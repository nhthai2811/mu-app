<template>
  <v-app-bar class="header-custom" app color="rgb(255 0 0 / 82%)">
    <v-spacer></v-spacer>
    <v-btn @click="move('home')" text>Trang chủ</v-btn>
    <v-btn @click="move('tintuc')" text>Tin tức</v-btn>
    <v-btn @click="move('discord')" text>Discord</v-btn>
    <v-btn @click="move('fanpage')" text>Fan page</v-btn>
  </v-app-bar>
</template>

<script>
import { Component } from "nuxt-property-decorator";
import Vue from "vue";

@Component
export default class HeaderComponent extends Vue {
  move(target) {
    const url = this.getTarget(target)
    if (target === "discord" || target === "fanpage") {
      window.open(url, '_blank'); // Mở trong tab mới
    } else {
      this.$router.push(url); // Sử dụng router cho các trường hợp khác
    }
  }

  getTarget(target) {
    switch (target) {
      case "tintuc":
        return "/notifications";
      case "discord":
        return "https://discord.com/invite/Wachty";
      case "fanpage":
        return "https://www.facebook.com/groups/379892046811698";
      default:
        return "/";
    }
  }
}
</script>

<style lang="scss" scoped>
.header-custom {
  display: flex;
  overflow: auto;
  justify-content: flex-start;
  color: white;
}
</style>