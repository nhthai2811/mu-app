<template>
  <div class="banner-container">
    <div class="banner">
      <div class="video-background">
        <video autoplay muted loop>
          <source src="videos/dragonlord.mp4" type="video/mp4" />
        </video>
        <div class="logo">
          <img src="/images/logo.png" alt="Banner Image" />
          <div class="banner-content pt-2">
            <div class="btn-download">
              <img src="images/download.png" alt="Download Image"/>
            </div>
          </div>
          <div class="banner-content pb-2">
            <h1>CHÀO MỪNG BẠN ĐẾN VỚI CỘNG ĐỒNG LŨ QUỶ</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { Component } from "nuxt-property-decorator";
import Vue from "vue";

@Component
export default class BannerComponent extends Vue {
  currentSlideIndex = 0;
  items = [
    {
      image: "images/banner1.png",
    },
    {
      image: "images/banner2.png",
    },
  ];

  linkList = [
    // {
    //   label: "Chuỗi sự kiện hấp dẫn mừng máy chủ mới: MU Hắc Long",
    //   link: "#",
    // },
    // {
    //   label: "Chuỗi sự kiện hấp dẫn mừng máy chủ mới: MU Hắc Long",
    //   link: "#",
    // },
  ];
}
</script>

 <style lang="scss" scoped>
.banner-container {
  margin: 0 0 100px 0;

  .banner {
    text-align: center;

    img {
      max-width: 100%;
      height: auto;
    }

    .banner-content {
      width: 100vw;
      font-size: 16px;
      font-family: "cinzel";
      padding: 0 100px;
      color: #fff;
      font-weight: bold;
      text-shadow: 0 0 11px #000, 0 0 11px #000, 0 0 11px #000, 0 0 11px #000;
      background-image: linear-gradient(
        to right,
        transparent,
        rgb(135 16 16 / 54%),
        transparent
      );
      filter: drop-shadow(2px 4px 6px black);

      .btn-download {
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.2);
          cursor: pointer;
        }
      }
    }
  }

  .video-background {
    position: relative;
    width: 100%;
    overflow: hidden;

    video {
      width: 100vw;
      height: calc(100vh - 10px);
      object-fit: cover;
      filter: brightness(0.5);
    }

    .logo {
      width: 100vw;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;

      img {
        max-width: 90%;
        height: auto;
      }
    }
  }
}
</style>
  