<template>
<div id="container">
    <input placeholder="Entrez votre identifiant" type="text"/>
    <input placeholder="Entrez votre mot de passe" type="text"/>
</div>
  
  
</template>

<script>
export default {
    name : "connexion"
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