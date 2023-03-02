/**
 * @type {import('next').NextConfig}
 */
const withPWA = require("next-pwa")({
  dest: "public",
});
const nextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/create-infinite-scroll-in-react",
        destination: "https://blog.coolhead.in/create-infinite-scroll-in-react",
        permanent: true,
      },
      {
        source:
          "/difference-between-function-scope-and-block-scope-in-javascript",
        destination:
          "https://blog.coolhead.in/difference-between-function-scope-and-block-scope-in-javascript",
        permanent: true,
      },
      {
        source: "/arraysome-method-in-javascript-explained-with-examples",
        destination:
          "https://blog.coolhead.in/arraysome-method-in-javascript-explained-with-examples",
        permanent: true,
      },
      {
        source: "/21-things-i-learnt-in-2022",
        destination: "https://blog.coolhead.in/21-things-i-learnt-in-2022",
        permanent: true,
      },
      {
        source:
          "/how-to-do-cors-configuration-for-aws-s3-bucket-to-make-it-work-on-react-website",
        destination:
          "https://blog.coolhead.in/how-to-do-cors-configuration-for-aws-s3-bucket-to-make-it-work-on-react-website",
        permanent: true,
      },
      {
        source: "/resources-to-learn-typescript",
        destination: "https://blog.coolhead.in/resources-to-learn-typescript",
        permanent: true,
      },
      {
        source: "/how-to-deploy-next-js-appsite-on-linode",
        destination:
          "https://blog.coolhead.in/how-to-deploy-next-js-appsite-on-linode",
        permanent: true,
      },
      {
        source: "/how-to-create-avatar-maker-in-next-js-and-react",
        destination:
          "https://blog.coolhead.in/how-to-create-avatar-maker-in-next-js-and-react",
        permanent: true,
      },
      {
        source: "/10-ways-to-work-with-objects-in-javascript",
        destination:
          "https://blog.coolhead.in/10-ways-to-work-with-objects-in-javascript",
        permanent: true,
      },
      {
        source: "/functional-programming-functions",
        destination:
          "https://blog.coolhead.in/functional-programming-functions",
        permanent: true,
      },
      {
        source: "/functional-programming-composition-of-functions",
        destination:
          "https://blog.coolhead.in/functional-programming-composition-of-functions",
        permanent: true,
      },
      {
        source:
          "/explained-currying-in-functional-programming-with-examples-in-javascript",
        destination:
          "https://blog.coolhead.in/explained-currying-in-functional-programming-with-examples-in-javascript",
        permanent: true,
      },
      {
        source:
          "/explained-catamorphism-in-functional-programming-with-examples-in-javascript",
        destination:
          "https://blog.coolhead.in/explained-catamorphism-in-functional-programming-with-examples-in-javascript",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "https://blog.coolhead.in/contact",
        permanent: true,
      },
      {
        source: "/sponser",
        destination: "https://blog.coolhead.in/sponsor",
        permanent: true,
      },
      {
        source: "/newsletter",
        destination: "https://blog.coolhead.in/newsletter",
        permanent: true,
      },
      {
        source: "/notes-on-api-modelling",
        destination: "https://blog.coolhead.in/notes-on-api-modelling",
        permanent: true,
      },
      {
        source: "/web-scraping-with-python-beautiful-soup",
        destination:
          "https://blog.coolhead.in/web-scraping-with-python-beautiful-soup",
        permanent: true,
      },
      {
        source: "/navbar-hide-and-show-on-scroll-using-custom-react-hooks",
        destination:
          "https://blog.coolhead.in/navbar-hide-and-show-on-scroll-using-custom-react-hooks",
        permanent: true,
      },
    ];
  },
  i18n: {
    locales: ["en-US", "fr", "nl-NL"],
    defaultLocale: "en-US",
  },
  images: {
    domains: ["images.unsplash.com", "cdn.hashnode.com"],
  },
};

module.exports = withPWA(nextConfig);
