<template>
  <div class="login">
    <AccueilLogo text="Bienvenue chez Groupomania" />
    <div id="container">
      <input
        placeholder="Entrez votre identifiant"
        v-model="pseudo"
        type="text"
      />
      <input
        placeholder="Entrez votre mot de passe"
        v-model="password"
        type="password"
      />
      <span id="message">{{ error }}</span>
    </div>
    <Button @valider="connexion" text="Connexion" />

    <router-link to="SignUp">Créer un compte</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import AccueilLogo from "@/components/AccueilLogo.vue";
import Button from "@/components/Button.vue";

export default {
  name: "Login",
  components: {
    AccueilLogo,
    Button,
  },
  data() {
    return {
      pseudo: "",
      password: "",
      error: "",
    };
  },
  methods: {
    connexion() {

if(this.pseudo =="" || this.password == "" ){

  this.error = "champs manquant"

}else{

      let userPseudo = this.pseudo
      let userPassword = this.password

      this.$axios
        .post("http://localhost:3000/api/login", { userPseudo, userPassword })
        .then((response) => {
          this.idUser = response.data.pseudo
          console.log(response)
          this.$router.push('Home/'+this.idUser);
        })
        .catch(() =>{ 
        this.error = "le nom d'utilisateur ou le mot de passe incorrect"
        });

}
    },
  },
};
</script>

<style lang="scss">
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}

input {
  width: 50% !important;
}
#message {
  color: red;
}
</style>
