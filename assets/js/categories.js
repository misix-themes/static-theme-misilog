// 头部底部 mixin
import mixin_header from './_mixin/header.js'
import mixin_footer from './_mixin/footer.js'

// Vue 实例
const app = Vue.createApp({
  setup(props) {
    console.log("setup")


    return {} // 这里返回的任何内容都可以用于组件的其余部分
  },
  mixins: [
    mixin_header,
    mixin_footer
  ],

})

const vm = app.mount('#app')

