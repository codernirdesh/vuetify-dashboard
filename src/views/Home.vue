<template>
  <v-app>
    <NavBar/>
    <AppContent />
  </v-app>
</template>

<script>
import AppContent from "../components/AppContent";
import NavBar from "../components/NavBar";
export default {
  name: "Home",
  components:{
    AppContent,
    NavBar,
  }
};
</script>
