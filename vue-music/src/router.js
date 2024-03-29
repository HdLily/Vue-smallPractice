import Vue from 'vue'
import VueRouter from 'vue-router'
import Album from './components/Album.vue'
import Singer from './components/Singer.vue'
import RankPage from './components/RankPage.vue'
import Cd from './components/Cd.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/singer/:id', name: 'singer', components: Singer
    },
    {
        path: '/album/:id', name: 'album', components: Album
    },
    {
        path: '/rank/:id', name: 'rank', components: RankPage
    },
    {
        path: '/cd/:id', name: 'cd', components: Cd
    }

]


export default new VueRouter ({
    routes,
    //只在history模式下有用
    scrollBehavior (to, from , savedPosition) {
        return { x:0, y:0}
    }
})