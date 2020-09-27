<template>
  <div>
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon @click="showDrawerMenu = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Chokiyo Admin Section</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon @click="dialog = true">mdi-database-plus</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- Movie Add Dialog -->
    <v-dialog v-model="dialog" temporary max-width="800px">
      <v-card>
        <v-img height="300px" src="/images/form-background.jpg"></v-img>
        <v-card-title>
          <span class="headline"><b>Add a Movie</b></span>
        </v-card-title>
        <v-card-text>
          <small class="red--text">All Fields are Required. *</small>

          <v-form ref="form">
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <p class="subheadline">Movie Name</p>
                  <v-text-field
                    :rules="inputRules"
                    outlined
                    prepend-icon="mdi-movie-edit-outline"
                    color="deep-purple"
                    label="Movie Name"
                    required
                    v-model="name"
                  ></v-text-field>

                  <p class="subheadline">Movie Description</p>
                  <v-textarea
                    prepend-icon="mdi-note-text-outline"
                    outlined
                    :rules="inputRules"
                    color="deep-purple"
                    label="Description"
                    rows="5"
                    row-height="30"
                    v-model="description"
                  ></v-textarea>

                  <p class="subheadline">YouTube Trailer Link</p>
                  <v-text-field
                    outlined
                    :rules="inputRules"
                    color="red"
                    label="Youtube Trailer Link"
                    prepend-icon="mdi-youtube"
                    icon
                    v-model="trailerLink"
                    required
                  ></v-text-field>
                  <p class="subheadline">Download URL</p>
                  <v-text-field
                    outlined
                    :rules="inputRules"
                    color="green"
                    label="Download URL"
                    prepend-icon="mdi-download"
                    required
                    v-model="downloadLink"
                  ></v-text-field>
                  <v-text-field
                    outlined
                    :rules="inputRules"
                    v-model="thumbLink"
                    color="deep-purple"
                    label="Image URL"
                    prepend-icon="mdi-link-variant-plus"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <p class="subheadline">Rating</p>
                  <v-layout justify-center row wrap>
                    <v-rating
                      :rules="inputRules"
                      color="deep-purple"
                      empty-icon="mdi-star-outline"
                      full-icon="mdi-star"
                      half-icon="mdi-star-half-full"
                      half-increments
                      v-model="ratingValue"
                      length="5"
                      size="30"
                    ></v-rating>
                  </v-layout>
                  <!-- <v-text-field
                  outlined
                  color="deep-purple"
                  label="Rating"
                  type="number"
                  max="10"
                  min="0"
                  placeholder="0 - 10"
                  required
                ></v-text-field> -->
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <p class="subheadline">Year Released</p>
                  <v-text-field
                    outlined
                    :rules="inputRules"
                    color="deep-purple"
                    prepend-icon="mdi-calendar-edit"
                    label="Year"
                    v-model="year"
                    placeholder="2020"
                    type="number"
                    required
                    validate-on-blur
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-select
                    outlined
                    color="deep-purple"
                    prepend-icon="mdi-clipboard-list-outline"
                    :items="categories"
                    label="Categories"
                    v-model="selectedCategories"
                    offset-y
                    multiple
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            @click="submit"
            class="py-5"
            elevation="0"
            block
            >ADD</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Movie Add Dialog -->
    <v-navigation-drawer v-model="showDrawerMenu" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-layout column align-center justify-center>
            <v-flex class="mt-5">
              <v-avatar size="100">
                <img src="/logo.png" alt="" />
              </v-avatar>
              <div class="deep-purple--text subheading mt-2">
                Nirdesh pokharel
              </div>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-list-item
            v-for="item in items"
            :key="item.name"
            class="my-2"
            @click="showDrawerMenu = false"
          >
            <v-list-item-icon>
              <v-icon> {{ item.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-title> {{ item.name }} </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import db from "../firebase";
export default {
  data: () => ({
    showDrawerMenu: false,
    dialog: false,
    name: "",
    description: "",
    downloadLink: "",
    thumbLink: "",
    trailerLink: "",
    selectedCategories:[],
    year: "",
    ratingValue: 2,
    categories: [],
    inputRules: [(v) => v.length >= 3 || "Minimum length is 3 character"],
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
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const data = {
          rating: this.ratingValue,
          title: this.name,
          description: this.description,
          downloadLink: this.downloadLink,
          imageURL: this.thumbLink,
          trailerYoutube: this.trailerLink,
          categories: this.selectedCategories,
          year: this.year,
        };
        db.collection("Movies")
          .add(data)
          .then(() => {
            this.dialog = false;
            console.log("Movie Added!");
          });
      }
    },
  },
  created() {
    db.collection("Categories").onSnapshot((response) => {
      const changes = response.docChanges();
      changes.forEach((change) => {
        if (change.type === "added") {
          this.categories = change.doc.data().Categories;
        }
      });
    });
  },
};
</script>
<style scoped>
</style>