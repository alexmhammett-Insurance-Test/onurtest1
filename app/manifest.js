export default function manifest() {
  return {
    name: "OnurTest Personal Training",
    short_name: "OnurTest",
    description: "Trainer-client communication and progress tracking",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    orientation: "portrait",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any maskable",
      },
    ],
  };
}
