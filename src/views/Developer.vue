<template>
  <v-app>
    <NavBar/>
    <p class="sorry">
      Sorry This page is not availabale.
      It is not made by the developer. (  <a href="https://m.me/nirdeshpokhrel11" class="link"> Nirdesh pokharel </a>  )
    </p>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar";
export default {
  name: "Home",
  components:{
    NavBar,
  }
};
</script>
<style lang="scss" scoped>
.sorry{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  .link{
    text-decoration: none;
    color: #d338cb;
  }
}
</style>