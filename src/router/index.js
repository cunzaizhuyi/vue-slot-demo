import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Slot1 from '@/components/demo1/Slot1'
import Slot2 from '@/components/demo2/Slot2'
import Slot3 from '@/components/demo3/Slot3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/slot1',
      name: 'Slot1',
      component: Slot1
    },
   {
      path: '/slot2',
      name: 'Slot2',
      component: Slot2
    },{
      path: '/slot3',
      name: 'Slot3',
      component: Slot3
    },
  ]
})
