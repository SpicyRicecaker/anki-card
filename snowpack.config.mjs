// snowpack.config.mjs

export default {
  plugins: [["@snowpack/plugin-sass"]],
  mount: {
    // src: '/',
    public: "/",
    src: "/dist",
  },
};
