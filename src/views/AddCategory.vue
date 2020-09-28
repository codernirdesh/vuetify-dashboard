<template>
  <v-app>
    <NavBar/>
    <CategoryForm />
  </v-app>
</template>
<script>
import CategoryForm from "../components/CategoryForm";
import NavBar from "../components/NavBar";
export default {
  components: {
    CategoryForm,
    NavBar
  },
};
</script>