<template>
  <div class="setting_img">
       <img @click="setting" src="../assets/user-cog-solid.svg"  >
     </div>
</template>

<script>
export default {
    name: "Setting",


    methods:{
    setting(){
        this.$router.push('Account')
    }
}
}


</script>

<style lang="scss">
    .setting_img{
        text-align: end;

        img{
            height: 30px;
            margin-right: 10px;
        }
    }
</style>