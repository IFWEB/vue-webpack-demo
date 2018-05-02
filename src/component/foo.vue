<template>
    <div>
        <p>this is foo {{ obj.a }}</p>
        <a @click="changeRouter">button</a>

        <router-link to="/foo" class="nav-crumb">Foo</router-link> >
        <router-link to="/foo/profile/123" class="nav-crumb">Foo child</router-link>
        <router-view></router-view>
    </div>
</template>
<style>
    .nav-crumb {
        text-decoration: none;
        color: #666;
    }
</style>


<script>
export default {
    data() {
        return {
            obj: {
                a: 123
            }
        }
    },
    methods: {
        changeRouter() {
            this.obj.a = 999;

            // this.$router.push({ name: 'user', params: {id: 123}})
        }
    },
    watch: {
        'obj': {
            handler (newValue, oldValue) {
                console.log(newValue)
                console.log(oldValue)
            },
            deep: true
        }
    }    
}
</script>
