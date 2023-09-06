<template>
    <v-app-bar class="header-custom" app color="rgb(255 0 0 / 82%)">
        <v-spacer></v-spacer>
        <v-btn text>Trang chủ</v-btn>
        <v-btn text>Discord</v-btn>
        <v-btn text>Fan page</v-btn>
    </v-app-bar>
</template>

<script>
import { Component } from 'nuxt-property-decorator'
import Vue from 'vue'

@Component
export default class HeaderComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.header-custom {
  display: flex;
  justify-content: flex-start;
  color: white;
}
</style>