import '@/utils/rem'

import Vue from 'vue'

const App = () => import(/* webpackChunkName: "p-IndexPage" */ './index.vue')

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)
})
