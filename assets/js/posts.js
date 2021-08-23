
// Vue 实例
const app = Vue.createApp({
  setup(props) {
    console.log("setup")


    return {} // 这里返回的任何内容都可以用于组件的其余部分
  },

})

const vm = app.mount('#app')

