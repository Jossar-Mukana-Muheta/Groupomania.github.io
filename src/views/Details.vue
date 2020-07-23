<template>
<div>
<AccueilLogo text="Dernière Publications" />
  <Commentaire/>
</div>
  
</template>

<script>
import Commentaire from '@/components/Commentaire'

export default {
    name: 'Details',
    components:{
        Commentaire
    }
}
</script>

<style>

</style>