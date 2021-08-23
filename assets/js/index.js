import '../stylus/home.styl'


import useHeader from './common/useHeader.js'
import useFooter from './common/useFooter.js'

// Vue 实例
const app = Vue.createApp({
  setup(props) {
    const { name: headerName } = useHeader()
    const { name: footerName } = useFooter()

    console.log("setup")


    return {
      headerName,
      footerName
    }
  },

})

const vm = app.mount('#app')

