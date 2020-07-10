<template>
  <div class="poste_container">
      <div class="poste_content">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, modi. Minus sit aut eligendi? Necessitatibus laboriosam unde maiores quod consequuntur corrupti molestias, vitae similique quidem maxime nihil, accusamus error veniam!</p>
      </div>
      <Commentaire/>
  </div>
</template>

<script>
import Commentaire from "../components/Commentaire"

export default {
    name: "Postes",
    components : {
    Commentaire
}
}


</script>

<style lang="scss">
    .poste_container{
        margin: 10px;
        border : 1px solid black;
        min-height: 200px;
        display: flex;
        flex-direction: column;
    }

    .poste_content{
        border : 1px solid gray;
        margin: 10px;
        min-height: 100px;
    }
</style>