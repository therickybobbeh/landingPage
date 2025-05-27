module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  css: [
    './app/globals.css',
    './app/styles/**/*.css',
  ],
  output: './purged/',
  safelist: [
    // Bootstrap classes that might be added dynamically
    /^col-/,
    /^row$/,
    /^btn-/,
    /^modal/,
    /^nav/,
    /^card/,
    /^show$/,
    /^active$/,
    /^d-/,
    // Animation classes
    /^animate-/,
    /^fade-/,
    // Keep all utility classes with responsive prefixes
    /^(sm:|md:|lg:|xl:)/,
  ]
}