<template>
  
   <div class="home_container">
     <Setting/>
     <h1 id="titre_principal">Bienvenue chez Groupomania</h1>
     <img src="../assets/icon.png" alt="logo"/>
     <Postes/>
   </div>
  
</template>

<script>
import Postes from '../components/Postes'
import Setting from '../components/Setting'

export default {
  name : "Home",
  components : {
  Postes,
  Setting
},

data : function(){
  return{
    image : "@/assets/logo.png"
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


