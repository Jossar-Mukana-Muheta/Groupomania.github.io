<template>
  <div class="signUp_container">
      
      <AccueilLogo text="Créer un compte" />

      <form action="">
          <input  id="pseudo" v-model="pseudo" type="text" placeholder="Entrez un pseudo">
          <input  id="password" v-model="password" type="password" placeholder="Entrez votre mots de passe">
          <input  id="passwordConfirm" v-model="passwordConfirm" type="password" placeholder="Confirmez votre mots de passe">
          <span id="errorMessage">{{error}}</span>
          <span>{{data}}</span>
      </form>
      <Button text="Créer mon compte" @valider="createAccount"/>
  </div>
</template>

<script>
import Button from "../components/Button"
import AccueilLogo from "@/components/AccueilLogo"
export default {
    name:"SignUp",
    components : {
        Button,
        AccueilLogo
    },
data(){
    return{
        pseudo :"",
        password: "",
        passwordConfirm: "",
        error:"",
        username:'',
        data:''
    }
},

methods:{
    createAccount(){

let pseudo = document.getElementById('pseudo')
let password = document.getElementById('password')


        if(this.pseudo == "" || this.password == "" || this.passwordConfirm  == ""){
            this.error = "Veuillez remplir tous les champs"
        }else{

    if (!/^[a-zA-Z0-9]+$/.test(this.pseudo)) {
    this.error = "Veuillez n'utiliser que des lettres et des chiffres";
    pseudo.focus();
  } else if (!/^[a-zA-Z0-9]+$/.test(this.password)) {
    this.error = "le mot de passe ne doit contenir que des lettres et des chiffres";
    password.focus();
  } else if(this.password != this.passwordConfirm){
       this.error = "Veuillez entrer le même mot de passe"
  }else{
      let userPseudo = this.pseudo
      let userPassword = this.password
    this.$axios
        .post("http://localhost:3000/api/signup", 
        {userPseudo, userPassword})
            .then(response =>{
                this.data = response.data.pseudo
                this.$router.push('/');
            })
            .catch(()=>{
                this.error= "Veuillez recommencer"
            })
  }
        }
    }
}
    
}



</script>

<style>
    form{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    }

    #errorMessage{
        color: red;
    }
</style>