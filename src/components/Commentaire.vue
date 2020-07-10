<template>
  <div class="commentaire_container">
      <div class="pseudo_container">
          <img src="../assets/icon.png" alt="">
          <p>pseudo</p>
      </div>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
  </div>
</template>

<script>


</script>

<style lang="scss">
    .commentaire_container{
        display: flex;
        justify-content: space-between;
        align-content: center;
            align-items: center;
    }

    .pseudo_container{
        display: flex;
        flex-direction: column;
        padding-left: 5px;
    }
</style>