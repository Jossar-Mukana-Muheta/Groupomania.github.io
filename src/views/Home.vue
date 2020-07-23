<template>
  
   <div class="home_container">
     <Setting/>
     <AccueilLogo text="Dernière Publications" />
     <Postes v-on="showDetails"/>
   </div>
  
</template>

<script>
import Postes from '@/components/Postes'
import Setting from '@/components/Setting'
import AccueilLogo from '@/components/AccueilLogo'

export default {
  name : "Home",
  components : {
  Postes,
  Setting,
  AccueilLogo
},

data : function(){
  return{
    image : "@/assets/logo.png"
  }
},
methods:{
  showDetails(){
    this.$router.push('Details')
  }
}
}



</script>

<style lang="scss">
img{
  height: 50px;
};
#titre_principal{
  margin: 20px !important;
  font-size: xxx-large;
}




</style>


