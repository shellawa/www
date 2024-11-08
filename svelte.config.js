import adapter from "@sveltejs/adapter-static"

export default {
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "/src/404.html",
      precompress: false,
      strict: true
    })
  }
}
