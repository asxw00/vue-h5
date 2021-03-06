import Vue from 'vue'
import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
import card from './card.vue'
import 'lib-flexible/flexible.js'
import jsbridge from '@/utils/jsbridge'
Vue.prototype.$jsbridge = jsbridge
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#card',
  template: '<card/>',
  components: { card }
})
