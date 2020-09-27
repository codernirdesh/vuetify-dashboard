<template>
  <v-container
    align-center
    align-start
    d-flex
    fill-height
    fluid
    grid-list-xs
    id="container"
    justify-start
    tag="div"
    wrap
  >
    <v-row>
      <v-col
        v-for="movie in movies"
        :key="movie.id"
        sm="12"
        md="6"
        lg="4"
        xl="3"
      >
        <v-hover>
          <v-card class="pa-2">
            <v-img height="250" :src="movie.imageURL"></v-img>
            <!-- <v-card-media :src="movie.imageURL" height="200px"> </v-card-media> -->
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">
                  <b>{{ movie.title }}</b>
                </h3>
                <div class="my-2">
                  <v-chip
                    class="mx-1"
                    outlined
                    v-for="category in movie.categories"
                    :key="category"
                    small
                  >
                    {{ category }}
                  </v-chip>
                </div>
                <div class="text-subtitle-2">{{ movie.description }}</div>
              </div>
            </v-card-title>
            <v-flex> </v-flex>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import db from "../firebase";
export default {
  data: () => ({
    movies: [],
  }),
  created() {
    db.collection("Movies").onSnapshot((response) => {
      const changes = response.docChanges();
      changes.forEach((change) => {
        if (change.type === "added") {
          this.movies.push({ ...change.doc.data(), id: change.doc.id });
        }
      });
    });
  },
};
</script>
<style scoped>
</style>