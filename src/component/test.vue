<template>
    <router-link to="/about">
        <v-btn @click="hi">create</v-btn>
    </router-link>
</template>

<script>
export default {
    data(){
        return {
            username: "SeeIe",
            arr:["aaa","bbb","ccc"]
        }
    },
    methods:{
        hi(username){
            console.log("hi" + username)
        }
    },
    mounted() {

    }
}
</script>