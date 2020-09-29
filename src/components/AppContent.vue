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
        lg="3"
        xl="2"
      >
        <v-card elevation="5">
          <v-img height="250" :src="movie.imageURL"></v-img>
          <!-- <v-card-media :src="movie.imageURL" height="200px"> </v-card-media> -->
          <v-card-title primary-title>
            <div>
              <a :href="movie.downloadLink" class="headline np-link">
                <h3 class="headline ma-0">
                  <b>{{ movie.title }}</b>
                </h3>
              </a>
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on">
                    <v-rating
                      dense
                      :rules="inputRules"
                      color="orange"
                      empty-icon="mdi-star-outline"
                      full-icon="mdi-star"
                      half-icon="mdi-star-half-full"
                      half-increments
                      length="5"
                      :value="movie.rating"
                      readonly
                      size="20"
                    />
                  </span>
                </template>
                <span> {{ movie.rating }} /10 </span>
              </v-tooltip>
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
<style lang="scss" scoped>
.np-link{
  text-decoration: none;
  color: black;
  transition: all 400ms ease-out;
  :hover{
    transform: scale(1.05);
    color: rgb(34, 34, 34);
    transition: all 300ms ease-in-out;
  }
}
</style>