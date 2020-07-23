<template>
  <div>
      <button class="waves-effect waves-light btn"  @click="valider">{{text}}</button>
      
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
    valider(){
        this.$emit('valider')
    }
    
}
}


</script>

<style lang="scss">

button{
   margin-bottom: 20px;
   margin-top: 20px;
}

</style>