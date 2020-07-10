<template>
  <div>
      <button class="waves-effect waves-light btn"  @click="connexion">{{text}}</button>
      
  </div>
</template>

<script>
export default {
    name: "Button",
    props: ["text"],
    data:function() {
return {
        
    };
},

methods:{
    connexion(){
        this.$router.push('Home')
    }
}
}


</script>

<style lang="scss">

button{
   margin-bottom: 20px;
}

</style>