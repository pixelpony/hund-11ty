module.exports = {
  url: process.env.SITE_URL || "http://localhost:8080",
  isProduction: Boolean(process.env.PRODUCTION),
  site: {
    title: "Hund 11ty",
    subtitle: "A starter for Eleventy & WebC",
    language: "en",
    description: "",
  },
  author: {
    name: "Derek Odegard",
    image: {
      src: "./src/assets/image.jpg",
      alt: "a broken image URL",
    },
    bio: "A brief description of me as an author.",
    contact: {
      email: "dereko@gmail.com",
      twitter: "https://twitter.com/dereko",
      mastodon: "https://hachyderm.io/@dereko",
      github: "https://github.com/pixelpony",
    },
  },
  og: {
    type: "website",
    image: {
      src: "",
      alt: "",
      width: "1200",
      height: "600",
    },
  },
  rss: {
    label: "RSS feed",
    icon: '<svg height="45px" enable-background="new 0 0 50 50" id="Layer_1" version="1.1" viewBox="0 0 50 50" xml:space="preserve" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g id="_x2E__x29__x29_"><circle cx="18.5" cy="31.5" fill="#F2890A" id="Dot__x28____x29_" r="3.1"/><path d="M15.4,11.5v3.8c10.6,0,19.2,8.6,19.2,19.2h3.8C38.5,21.8,28.2,11.5,15.4,11.5z" fill="#F2890A" id="Line__x29__1_"/><path d="M15.4,19.2V23C21.8,23,27,28.2,27,34.6h3.8C30.8,26.1,23.9,19.2,15.4,19.2z" fill="#F2890A" id="Line__x29_"/></g><path d="M25,1C11.7,1,1,11.7,1,25s10.7,24,24,24s24-10.7,24-24S38.3,1,25,1z M25,44C14.5,44,6,35.5,6,25S14.5,6,25,6  s19,8.5,19,19S35.5,44,25,44z" fill="#F2890A"/></svg>',
    link: "/feed.xml",
  },
  top: {
    label: "Back to top",
    icon: '<svg fill="#000205" height="45px" width="45px" version="1.1" id="Layer_1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g><g><g><path d="M256,0C114.88,0,0,114.88,0,256s114.88,256,256,256s256-114.88,256-256S397.12,0,256,0z M256,490.667c-129.387,0-234.667-105.28-234.667-234.667S126.613,21.333,256,21.333S490.667,126.613,490.667,256S385.387,490.667,256,490.667z"/><path d="M263.573,99.093c-2.027-1.92-4.693-3.093-7.467-3.093H256c-2.773,0-5.44,1.173-7.467,3.093L131.2,216.427c-4.267,4.053-4.373,10.88-0.213,15.04c4.16,4.16,10.88,4.373,15.04,0.213c0.107-0.107,0.213-0.213,0.213-0.213l99.093-99.093v272.533c0,5.333,3.84,10.133,9.067,10.88c6.613,0.96,12.267-4.16,12.267-10.56V132.373l99.093,99.093c4.267,4.053,10.987,3.947,15.04-0.213c3.947-4.16,3.947-10.667,0-14.827L263.573,99.093z"/></g></g></g></svg>',
    link: "#top",
  },
};

// favicon: {
//   source: "src/assets/images/_favicons-source/favicon.jpg",
//   temp: "src/assets/images/favicons/",
//   dest: "/",
// },
// color: {
//   theme: "#000",
//   background: "#fff",
// },
