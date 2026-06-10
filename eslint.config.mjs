import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "public/sw.js",
      "public/workbox-*.js",
    ],
  },
  ...nextVitals,
  {
    rules: {
      "@next/next/no-page-custom-font": "off",
    },
  },
];

export default config;
