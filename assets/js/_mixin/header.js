/*
 * @Description  : 底部 mixin
 */


export default {

  data() {
    return {
      theme: '', // 当前主题颜色
      message: 'Header'
    }
  },
  created() {
    this.getThemeFromHtml()



    console.log('mixin...', 'header');
  },
  mounted() { },
  methods: {
    // 获取主题设置
    getThemeFromHtml() {
      // 获取主题名称 本地存储>Html标签设置>默认
      this.theme = window.localStorage.getItem('theme') ||
        document.querySelector("body").getAttribute('theme') || 'default'
    },
    changeTheme() { }
  },
}