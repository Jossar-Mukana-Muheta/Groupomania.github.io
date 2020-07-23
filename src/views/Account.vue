<template>
<div>
  <AccueilLogo text="Mon compte"/>
  <p>Pseudo :</p>
  <p>Mes Articles :</p>
  <button class="waves-effect waves-light btn"  @click="supprimer">Supprimer mon compte</button>

</div>
  
</template>

<script>
import AccueilLogo from '@/components/AccueilLogo'
export default {
  name: 'Account',
  components:{
    AccueilLogo
  },

  methods:{
    supprimer(){
      alert('Valider suppression ?')
    }
  }
}
</script>

<style>

</style>