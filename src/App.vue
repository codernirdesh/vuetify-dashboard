<template>
  <v-app>
    <v-card class="mx-auto mt-5" width="400">
      <v-card-title primary-title> Login </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            prepend-icon="mdi-account-circle"
            name="username"
            label="Username"
            id="username"
            autofocus
          ></v-text-field>
          <v-select
            v-model="e1"
            :items="items"
            label="State"
            prepend-icon="mdi-media-network-outline"
          ></v-select>
          <v-text-field
            prepend-icon="mdi-lock"
            name="password"
            label="Password"
            id="password"
            single-line
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append="showPassword = !showPassword"
          />
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="danger">Register</v-btn>
            <v-spacer></v-spacer>
            <v-btn type="submit" color="success">
              <v-icon>mdi-sign-in</v-icon> Login</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    showPassword: false,
    items: [
      "Provience 1",
      "Provience 2",
      "Provience 3",
      "Provience 4",
      "Provience 5",
      "Provience 6",
      "Provience 7",
    ],
  }),
};
</script>
