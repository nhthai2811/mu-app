<template>
  <div class="page2">
    <div class="yuanMove"></div>
    <div class="page2Title"></div>
    <div class="lunbo1">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <!-- Swiper slides go here -->
        </div>
        <!-- Add Swiper navigation buttons if needed -->
        <div
          class="swiper-button-next"
          tabindex="0"
          role="button"
          aria-label="Next slide"
        ></div>
        <div
          class="swiper-button-prev"
          tabindex="0"
          role="button"
          aria-label="Previous slide"
        ></div>
        <span
          class="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        ></span>
      </div>
    </div>
  </div>
</template>
  
<script>
import { Component } from "nuxt-property-decorator";
import Vue from "vue";

@Component
export default class SliderComponent extends Vue {}
</script>
  
<style lang="scss" scoped>

</style>
  