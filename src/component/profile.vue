<template>
    <div>
        <h3>this is a profile page</h3>
        <h3>{{ id }}</h3>
        <ul>
            {{ todos }}
        </ul>

        <router-view></router-view>
        <router-view name="ProfileShow"></router-view>
        <router-view name="ProfileEdit"></router-view>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
    /* computed: {
        id() {
            return this.$route.params.id;
        }
    }, */
    beforeRouteUpdate(to, from , next) {
        console.log('----beforeRouteUpdate')
    },
    beforeRouteEnter(to, from , next) {
        console.log('=====')
        console.log(to);

        next(vm => {
            console.log(vm.id);
        })
    },
    props: ['id'],
    computed: mapGetters({
        todos: 'doneTodos'
    }),
    // computed: mapState(['doneTodos']),
    created() {
        console.log('profile created')
        console.log(this.$store.state)
    }
}
</script>

