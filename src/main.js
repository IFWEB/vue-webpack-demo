import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import Foo from './component/foo.vue'
// import Profile from './component/profile'

import ProfileShow from "./component/profileShow"
import ProfileEdit from "./component/profileEdit" 

Vue.use(VueRouter)
Vue.use(Vuex)

const mode = process.env.NODE_ENV;

const store = new Vuex.Store({
    state: {
        todos: [{
            id: 1, text: 'hello', done: true,
        }, {
            id: 2, text: 'world', done: false,
        }]
    },
    getters: {
        doneTodos(state, getters) {
            return state.todos.filter(todo => todo.done)
        }
    }
})


const router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '/foo',
            name: 'foo',
            alias: '/a',
            component: Foo,
            children: [
                {
                    path: 'profile/:id',
                    // component: Profile,
                    component: () => import(/* webpackChunkName: "group-foo" */'./component/profile'),
                    props: true,
                    children: [
                        {
                            path: 'aaa',
                            components: {
                                default: {
                                    template: '<div>this is default</div>'
                                },
                                ProfileShow: () => import(/* webpackChunkName: "group-foo" */'./component/profileShow'),
                                ProfileEdit: () => import(/* webpackChunkName: "group-foo" */'./component/profileEdit')
                                
                            }
                        }
                    ]
                }, {
                    path: '*',
                    component: {
                        template: '<div>empty</div>'
                    }
                }
            ]
        },
        {
            path: '/bar',
            meta: {requireAuth: true},
            component: {
                template: '<p>bar</p>'
            }
        },
        {
            name: 'user',
            path: '/user/:id',
            component: {
                template: '<p>user: {{ $route.params.id }}</p>',
                watch: {
                    $route(to, from) {
                        console.log(to)
                        console.log(from)
                    }
                }
            }
        }
        
    ]
})

router.beforeEach((to, form, next) => {
    // console.log(to);

    let result = to.matched.some(record => {
        return record.meta.requireAuth;
    })

    if(result) {
        next({
            path: '/login'
        });
    } else {
        next();
    }
    
})

const app = new Vue({
    router,
    store
}).$mount('#app')