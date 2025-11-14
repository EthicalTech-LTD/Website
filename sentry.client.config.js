import * as Sentry from "@sentry/astro";

Sentry.init({
  dsn: "https://82385fd9939ab3e523f04f8cea816eb9@o4510360771690496.ingest.de.sentry.io/4510360797970512",
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
