export const isDevMode =
  (typeof window !== "undefined" &&
    window &&
    window.location &&
    window.location.hostname) === "localhost" ||
  (typeof window !== "undefined" &&
    window &&
    window.location &&
    window.location.hostname) === "127.0.0.1";

export const isServer = !(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);
