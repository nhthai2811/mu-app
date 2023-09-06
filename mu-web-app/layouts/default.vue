<template>
  <v-app class="background-red">
    <header-component />
    <v-main class="main-custom">
      <v-container class="container-custom">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { Component } from "nuxt-property-decorator";
import Vue from "vue";

import HeaderComponent from "@/components/header.vue";

@Component({
  components: {
    HeaderComponent,
  },
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss" scoped>
.main-custom {
  height: 100vh;
  padding: 0 !important;
}
.background-red {
  background-color: rgb(22 8 8 / 96%);
}
.container-custom {
  max-width: 100vw;
  margin: 0;
  padding: 0;
}
</style>
