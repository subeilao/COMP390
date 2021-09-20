import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

// const UserHome = () => import('./pages/yubao.vue')

// const router = new VueRouter({
//   routes: [ 
//     { path: '/yubao', name:"天气预报", component: UserHome },
//   ]
// })

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
}).$mount('#app')
