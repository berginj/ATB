export async function fetchInstagramMedia({ accessToken, userId, signal }) {
  const endpoint = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`;
  const response = await fetch(endpoint, { signal });
  const payload = await response.json();

  if (!response.ok || payload.error) {
    const apiError = payload.error || {};
    const error = new Error(
      apiError.message || "Instagram content is temporarily unavailable."
    );

    error.code = apiError.code;
    throw error;
  }

  return Array.isArray(payload.data) ? payload.data : [];
}
