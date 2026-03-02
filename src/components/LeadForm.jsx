import { useMemo, useState } from "react";
import { trackEvent } from "../lib/analytics";

function buildInitialValues(fields) {
  return fields.reduce((accumulator, field) => {
    accumulator[field.name] = field.defaultValue ?? "";
    return accumulator;
  }, {});
}

function buildMailtoUrl({ fallbackEmail, mailtoSubject, fields, values }) {
  const lines = fields.map((field) => {
    const label = field.mailLabel ?? field.label;
    const value = values[field.name] || "Not provided";
    return `${label}: ${value}`;
  });

  const body = [
    "ATB site form submission",
    "",
    ...lines
  ].join("\n");

  return `mailto:${fallbackEmail}?subject=${encodeURIComponent(
    mailtoSubject
  )}&body=${encodeURIComponent(body)}`;
}

function LeadForm({
  formId,
  title,
  description,
  fields,
  submitLabel,
  successTitle,
  successMessage,
  endpoint,
  fallbackEmail = "atbarsenal@gmail.com",
  mailtoSubject,
  events = {},
  aside
}) {
  const [values, setValues] = useState(() => buildInitialValues(fields));
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [submitMode, setSubmitMode] = useState("email");

  const fallbackUrl = useMemo(
    () =>
      buildMailtoUrl({
        fallbackEmail,
        mailtoSubject,
        fields,
        values
      }),
    [fallbackEmail, fields, mailtoSubject, values]
  );

  function markStarted() {
    if (hasStarted) {
      return;
    }

    setHasStarted(true);

    if (events.start) {
      trackEvent(events.start, {
        form_id: formId
      });
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    markStarted();
    setValues((currentValues) => ({
      ...currentValues,
      [name]: value
    }));
  }

  async function submitToEndpoint() {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        formId,
        values
      })
    });

    if (!response.ok) {
      throw new Error("Unable to submit form");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    markStarted();

    setStatus("submitting");
    setMessage("");

    if (endpoint) {
      try {
        await submitToEndpoint();
        setSubmitMode("endpoint");
        setStatus("success");
        setMessage(successMessage);

        if (events.success) {
          trackEvent(events.success, {
            form_id: formId
          });
        }

        return;
      } catch (error) {
        setStatus("error");
        setMessage(
          "We could not send the form here, so your email app will open with your details prefilled."
        );

        if (events.fail) {
          trackEvent(events.fail, {
            form_id: formId
          });
        }
      }
    }

    setSubmitMode("email");
    setStatus("success");
    setMessage(
      `${successMessage} If your email app does not open, email ${fallbackEmail} directly.`
    );
    window.location.assign(fallbackUrl);

    if (events.success) {
      trackEvent(events.success, {
        form_id: formId,
        submit_mode: "email_fallback"
      });
    }
  }

  return (
    <div className="content-panel form-panel">
      <div className="form-panel-heading">
        <div>
          <p className="eyebrow">Action</p>
          <h2>{title}</h2>
        </div>
        {aside ? <p className="form-aside">{aside}</p> : null}
      </div>

      <p>{description}</p>

      <form className="lead-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          {fields.map((field) => {
            const sharedProps = {
              id: `${formId}-${field.name}`,
              name: field.name,
              value: values[field.name],
              onChange: handleChange,
              required: field.required
            };

            return (
              <label
                key={field.name}
                className={`form-field ${field.fullWidth ? "form-field-full" : ""}`}
                htmlFor={sharedProps.id}
              >
                <span>{field.label}</span>

                {field.type === "textarea" ? (
                  <textarea
                    {...sharedProps}
                    rows={field.rows ?? 4}
                    placeholder={field.placeholder}
                  />
                ) : field.type === "select" ? (
                  <select {...sharedProps}>
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    {...sharedProps}
                    type={field.type ?? "text"}
                    inputMode={field.inputMode}
                    placeholder={field.placeholder}
                  />
                )}

                {field.helpText ? (
                  <small className="field-help">{field.helpText}</small>
                ) : null}
              </label>
            );
          })}
        </div>

        <div className="form-actions">
          <button className="button" type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : submitLabel}
          </button>
          <a className="inline-link" href={`mailto:${fallbackEmail}`}>
            Need help instead? Email ATB directly.
          </a>
        </div>
      </form>

      {status === "success" ? (
        <div className="form-feedback form-feedback-success">
          <strong>{successTitle}</strong>
          <p>{message}</p>
        </div>
      ) : null}

      {status === "error" ? (
        <div className="form-feedback form-feedback-error">
          <strong>We need one more step.</strong>
          <p>{message}</p>
        </div>
      ) : null}
    </div>
  );
}

export default LeadForm;
