<template>
  <div class="login">
    <AccueilLogo />
    <Connexion />
    <Button text="Connexion"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AccueilLogo from '@/components/AccueilLogo.vue'
import Connexion from '@/components/Connexion.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'Login',
  components: {
    AccueilLogo,
    Connexion,
    Button
  },

 


}
</script>
