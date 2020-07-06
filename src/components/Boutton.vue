<template>
  <div>
      <button type="submit">{{text}}</button>
  </div>
</template>

<script>
export default {
    name: "Button",
    props: ["text"]
}
</script>

<style lang="scss">

button{
    background-color: orangered;
    border-radius: 17px;
    height: 36px;
    width: 110px;
    font-weight: 800;
}

</style>