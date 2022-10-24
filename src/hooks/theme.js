export default () => ({
  theme: 'light',
  init() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.theme = 'dark';
    } else {
      this.theme = 'light';
    }

    // DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
      // here is the Vue code
    });
  },
  change(theme) {
    this.theme = theme;
    localStorage.theme = theme;
  },
});
