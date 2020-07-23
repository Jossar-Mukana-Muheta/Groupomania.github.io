<template>

    <div>
        <img src="../assets/logo.png" alt="logo" >
        <h1>{{text}}</h1>
    </div>
  
</template>

<script>
export default {
    name: "AccueilLogo",
    props: ["text"]
}
</script>

<style lang="scss">
img{
    height: 150px;
}

h1{
    text-align: center;
    margin: 20px;
    font-size: xxx-large;
}
</style>