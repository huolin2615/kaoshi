import Vue from 'vue'
import Router from 'vue-router'
import TransferPre from '@/pages/TransferPre'
import TransferRes from '@/pages/TransferRes'
import TransferConf from '@/pages/TransferConf'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TransferPre',
      component: TransferPre
    }, {
      path: '/transferRes',
      name: 'TransferRes',
      component: TransferRes
    }, {
      path: '/transferConf',
      name: 'TransferConf',
      component: TransferConf
    }
  ]
})
