<template>
  <v-container>
    <v-card>
      <v-img
        width="auto"
        height="300px"
        src="/images/form-background.jpg"
      ></v-img>
      <v-card-title>
        <span class="headline"><b>Add a Category</b></span>
      </v-card-title>
      <v-form ref="form">
        <v-container>
          <small class="red--text"
            >Once added, a category can not be deleted.</small
          >
          <v-row>
            <v-col cols="12" sm="10" md="10">
              <v-text-field
                :rules="inputRules"
                outlined
                dense
                prepend-icon="mdi-clipboard-list-outline"
                color="deep-purple"
                label="Category name"
                required
                v-model="newCategory"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="2" md="2">
              <v-btn color="success" @click="Add" elevation="0" block
                >ADD</v-btn
              >
            </v-col>
            <v-col cols="12" sm="10" md="10">
              <v-layout justify-center row wrap>
                <v-list>
                  <v-list-item
                    class="my-2"
                    v-for="category in categories"
                    :key="category"
                  >
                    <v-list-item-title> {{ category }} </v-list-item-title
                    ><v-btn icon>
                      <v-icon>mdi-delete-empty-outline</v-icon></v-btn
                    >
                  </v-list-item>
                </v-list>
              </v-layout>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
import db from "../firebase";
export default {
  data: () => ({
    categories: [],
    newCategory: "",
    inputRules: [(v) => v.length >= 2 || "Minimum length is 2 character"],
  }),
  methods: {
    Add() {
      if (this.$refs.form.validate()) {
        this.categories.push(this.newCategory);
        const data = { Categories: this.categories };
        db.collection("Categories")
          .doc("aL4uYvWcOTjWAMab2s8x")
          .update(data)
          .then(() => {
            this.newCategory = "";
            console.log("Updated !");
          });
      }
    },
  },
  created() {
    db.collection("Categories").onSnapshot((response) => {
      const changes = response.docChanges();
      changes.forEach((change) => {
        // console.log(change.type);
        if (change.type === "added") {
          this.categories = change.doc.data().Categories;
        } else if (change.type === "modified") {
          this.categories = change.doc.data().Categories;
        }
      });
    });
  },
};
</script>