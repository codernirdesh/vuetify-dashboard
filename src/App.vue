<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    navigation: false,
    items: [
      { name: "Provience 1", icon: "mdi-github", path: "/" },
      { name: "Provience 2", icon: "mdi-git", path: "/a" },
      { name: "Provience 3", icon: "mdi-charity", path: "/" },
      { name: "Provience 4", icon: "mdi-google-controller-off", path: "/a" },
      { name: "Provience 5", icon: "mdi-microsoft-excel", path: "/" },
      { name: "Provience 6", icon: "mdi-microsoft-word", path: "/" },
      { name: "Provience 7", icon: "mdi-source-branch", path: "/" },
    ],
  }),
};
</script>
