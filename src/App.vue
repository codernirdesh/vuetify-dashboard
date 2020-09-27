<template>
  <v-app>
    <NavBar />

    <AppContent />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import AppContent from "./components/AppContent";
export default {
  name: "App",
  components: {
    NavBar: NavBar,
    AppContent: AppContent,
  },
  data: () => ({
    navigation: false,
    items: [
      { name: "Provience 1", icon: "mdi-github" },
      { name: "Provience 2", icon: "mdi-git" },
      { name: "Provience 3", icon: "mdi-charity" },
      { name: "Provience 4", icon: "mdi-google-controller-off" },
      { name: "Provience 5", icon: "mdi-microsoft-excel" },
      { name: "Provience 6", icon: "mdi-microsoft-word" },
      { name: "Provience 7", icon: "mdi-source-branch" },
    ],
  }),
};
</script>
