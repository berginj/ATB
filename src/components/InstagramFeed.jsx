import { useEffect, useState } from "react";
import { fetchInstagramMedia } from "../lib/instagram";
import heroPattern from "../assets/hero-pattern.svg";
import teamDugout from "../assets/team-dugout.svg";

// Set real credentials here for a quick local test, or prefer VITE_INSTAGRAM_* env vars in Azure Static Web Apps.
const ACCESS_TOKEN =
  import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN || "INSTAGRAM_ACCESS_TOKEN";
const USER_ID = import.meta.env.VITE_INSTAGRAM_USER_ID || "INSTAGRAM_USER_ID";
const PROFILE_URL =
  import.meta.env.VITE_INSTAGRAM_PROFILE_URL || "https://www.instagram.com/";

const fallbackPosts = [
  {
    id: "fallback-1",
    caption: "Training windows, team wins, and key registration reminders can be featured here.",
    media_url: teamDugout,
    permalink: "https://www.instagram.com/"
  },
  {
    id: "fallback-2",
    caption: "Replace the Instagram placeholders with real credentials to pull the latest ATB posts.",
    media_url: heroPattern,
    permalink: "https://www.instagram.com/"
  },
  {
    id: "fallback-3",
    caption: "If the API rate limit is reached, the site automatically falls back to this curated content.",
    media_url: teamDugout,
    permalink: "https://www.instagram.com/"
  }
];

function InstagramFeed() {
  const [posts, setPosts] = useState(fallbackPosts);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState(
    "Instagram is using placeholder content until live API credentials are added."
  );

  useEffect(() => {
    if (
      ACCESS_TOKEN === "INSTAGRAM_ACCESS_TOKEN" ||
      USER_ID === "INSTAGRAM_USER_ID"
    ) {
      setStatus("placeholder");
      return;
    }

    const controller = new AbortController();

    async function loadPosts() {
      setStatus("loading");

      try {
        const media = await fetchInstagramMedia({
          accessToken: ACCESS_TOKEN,
          userId: USER_ID,
          signal: controller.signal
        });
        const nextPosts = media.slice(0, 6);

        if (nextPosts.length === 0) {
          setStatus("empty");
          setMessage("No Instagram posts were returned, so placeholder highlights are shown.");
          setPosts(fallbackPosts);
          return;
        }

        setPosts(nextPosts);
        setStatus("ready");
        setMessage("Latest Instagram posts");
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }

        const rateLimited = [4, 17, 32, 613].includes(error.code);

        setStatus(rateLimited ? "rate-limited" : "error");
        setMessage(
          rateLimited
            ? "Instagram request limits were reached. Showing fallback highlights instead."
            : "Instagram is temporarily unavailable. Showing fallback highlights instead."
        );
        setPosts(fallbackPosts);
      }
    }

    loadPosts();

    return () => controller.abort();
  }, []);

  return (
    <section className="content-panel feed-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Live From ATB</p>
          <h2>Latest posts and updates</h2>
        </div>
        <div className="pill-actions">
          <a
            className="pill-link"
            href={PROFILE_URL}
            target="_blank"
            rel="noreferrer"
          >
            ATB Instagram
          </a>
          <a
            className="pill-link"
            href="https://arlingtontravelbaseball.org/register/"
            target="_blank"
            rel="noreferrer"
          >
            Registration
          </a>
        </div>
      </div>

      <p className="section-caption">
        Add real credentials in `src/components/InstagramFeed.jsx` or set
        `VITE_INSTAGRAM_ACCESS_TOKEN` and `VITE_INSTAGRAM_USER_ID` in your
        build environment before deploying.
      </p>

      <div className={`status-chip status-${status}`}>{message}</div>

      <div className="instagram-grid">
        {posts.map((post) => {
          const mediaSource =
            post.media_type === "VIDEO" && post.thumbnail_url
              ? post.thumbnail_url
              : post.media_url;

          return (
            <a
              key={post.id}
              className="instagram-card"
              href={post.permalink}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={mediaSource}
                alt={post.caption || "ATB Instagram update"}
                loading="lazy"
              />
              <div className="instagram-card-copy">
                <span>Instagram</span>
                <p>{post.caption || "ATB highlight"}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default InstagramFeed;
