<template>
  <div id="app">
    <AccueilLogo />
    <Connexion />
    <Button text="Connexion"/>
  </div>
</template>

<script>
import AccueilLogo from './components/AccueilLogo.vue'
import Connexion from './components/Connexion.vue'
import Button from './components/Boutton'

export default {
  name: 'App',
  components: {
    AccueilLogo,
    Connexion,
    Button
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
