import Vue from 'vue'
import Router from 'vue-router'
import Jsx from '@/components/Jsx' //pake cara iterasi

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    { path: '/', name: 'home', component: require('@/components/Home').default },
    { path: '/javascript', name: 'javascript', component: require('@/components/Javascript').default },
    { path: '/ecmascript6', name: 'ecmascript6', component: require('@/components/Ecma').default },
    { path: '/node', name: 'node', component: require('@/components/Node').default },
    { path: '/express', name: 'express', component: require('@/components/Express').default },
    { path: '/installation', name: 'installation', component: require('@/components/VueInstall').default },
    { path: '/start', name: 'start', component: require('@/components/Start').default },
    { path: '/single', name: 'single', component: require('@/components/Single').default },
    { path: '/libraries', name: 'libraries', component: require('@/components/ThirdParty').default },
    { path: '/binding', name: 'binding', component: require('@/components/Binding').default },
    { path: '/expression', name: 'expression', component: require('@/components/Expression').default },
    { path: '/eventhandling', name: 'eventhandling', component: require('@/components/Method').default },
    { path: '/communicating', name: 'communicating', component: require('@/components/Props').default },
    { path: '/conditional', name: 'conditional', component: require('@/components/ConditionalRendering').default },
    { path: '/list', name: 'list', component: require('@/components/ListRender').default },
    { path: '/cookies', name: 'cookies', component: require('@/components/Cookies').default },
    { path: '/server', name: 'server', component: require('@/components/Server').default },
    { path: '/intro', name: 'intro', component: require('@/components/VueIntro').default },
    { path: '/basic', name: 'basic', component: require('@/components/VuexBasic').default },
    { path: '/states', name: 'states', component: require('@/components/VueStates').default },
    { path: '/mutation', name: 'mutation', component: require('@/components/VueMutation').default },
    { path: '/actions', name: 'actions', component: require('@/components/VueAction').default },
    { path: '/getter', name: 'getter', component: require('@/components/VueGetter').default },
    { path: '/modules', name: 'modules', component: require('@/components/VueModules').default },
    { path: '/routingbasic', name: 'routingbasic', component: require('@/components/RoutingBasic').default },

    { path: '/instance', name: 'instance', component: require('@/components/BInstance').default },
    { path: '/expression', name: 'expression', component: require('@/components/Expressions').default },
    { path: '/what', name: 'what', component: require('@/components/What').default },
    { path: '/history', name: 'history', component: require('@/components/History').default },
    { path: '/upcoming', name: 'upcoming', component: require('@/components/Upcoming').default },
    { path: '/current', name: 'current', component: require('@/components/Current').default },


    { path: '/html', name: 'html', component: require('@/components/Html').default },
    { path: '/data', name: 'data', component: require('@/components/Data').default },
    { path: '/lifecycle', name: 'lifecycle', component: require('@/components/Lifecycle').default },
    { path: '/form', name: 'form', component: require('@/components/Form').default },
    { path: '/method', name: 'method', component: require('@/components/Method').default },
    { path: '/filter', name: 'filter', component: require('@/components/Filter').default },
    { path: '/computed', name: 'computed', component: require('@/components/Computed').default },
    { path: '/vuex', name: 'vuex', component: require('@/components/Vuex').default },
    { path: '/style', name: 'style', component: require('@/components/Style').default }, //dengan cara nyebut langsung
    { path: '/jsx', name: 'jsx', component: Jsx }, //dengan cara nyimpan ke variable
    // { path: '/coffee', name: 'coffee', component: require('@/components/Coffee').default },
    { path: '/watcher', name: 'watcher', component: require('@/components/Watcher').default },
    { path: '/deploy', name: 'deploy', component: require('@/components/Deploy').default },
    { path: '/props', name: 'props', component: require('@/components/Props').default },
  ]
})
