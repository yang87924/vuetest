<template>
    <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page content.</p>
    </div>
    <test/>
</template>


<style>
h1 {
    color: blue;
}
</style>

<script>
import test from '../component/test.vue'

export default {
    components:{
        test
    },
    data(){
        return {
            username: "SeeIe"
        }
    },
    methods:{

    }
}
</script>
