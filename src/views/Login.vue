<template>
  <div class="login">
    <AccueilLogo text="Bienvenue chez Groupomania" />
    <div id="container">
    <input placeholder="Entrez votre identifiant" v-model="pseudo" type="text"/>
    <input placeholder="Entrez votre mot de passe" v-model="password" type="password"/>
</div>
    <Button @click="connexion" text="Connexion"/>
    <router-link to="SignUp">Créer un compte</router-link>
    
  </div>
</template>

<script>
// @ is an alias to /src
import AccueilLogo from '@/components/AccueilLogo.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'Login',
  components: {
    AccueilLogo,
    Button
  },
  data (){
    return{
      pseudo: '',
      password: '',
    }
  },
  methods:{
    connexion(){
        this.$router.push('Home')
    }
  }
}
</script>

<style lang="scss">
  #container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
}

input{
    width: 50% !important;
}
</style>