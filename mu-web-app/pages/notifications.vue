<template>
  <div class="banner-container">
    <div class="banner-v2">
      <div class="banner-v2-header">
        <div class="banner-v2-content">
          <div class="d-flex">
            <div class="down-game">
              <div @click="handleDownGame()" class="btn-download">
                <img src="images/game-info__download.gif" alt="Game info" />
              </div>
            </div>
            <v-carousel class="banner-auto">
              <v-carousel :cycle="true" :interval="5000" hide-delimiters>
                <v-carousel-item v-for="(item, index) in items" :key="index">
                  <div class="center-image">
                    <img :src="item.image" alt="Banner Image" />
                  </div>
                </v-carousel-item>
              </v-carousel>
            </v-carousel>
          </div>
          <v-list class="list">
            <h1>TIN TỨC GAME</h1>
            <v-list-item v-for="(item, index) in linkList" :key="index" link>
              <v-list-item-title>{{ item.label }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </div>
        <div class="banner-v2-footer"></div>
      </div>
      <!-- <div class="banner-v2-info">
          <div class="btn-group">
            <img src="/images/prev.png" alt="Prev button" @click="changeSlide('prev')">
            <img src="/images/next.png" alt="Next button" @click="changeSlide('next')">
          </div>
          <div class="yuanMove"></div>
          <div class="banner-v2-info-background">
            <template v-for="(element, index) in bannerList">
              <div
                :key="index"
                class="banner-v2-info-element"
                :class="{ active: index === currentSlideIndex }"
              >
                <img :src="element.image" alt="Banner list image" />
              </div>
            </template>
          </div>
          </div> -->
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
    // {
    //   label: "Chuỗi sự kiện hấp dẫn mừng máy chủ mới: MU Hắc Long",
    //   link: "#",
    // },
    // {
    //   label: "Chuỗi sự kiện hấp dẫn mừng máy chủ mới: MU Hắc Long",
    //   link: "#",
    // },
    // {
    //   label: "Chuỗi sự kiện hấp dẫn mừng máy chủ mới: MU Hắc Long",
    //   link: "#",
    // },
    // {
    //   label: "Chuỗi sự kiện hấp dẫn mừng máy chủ mới: MU Hắc Long",
    //   link: "#",
    // },
    // {
    //   label: "Chuỗi sự kiện hấp dẫn mừng máy chủ mới: MU Hắc Long",
    //   link: "#",
    // },
  ];

  bannerList = [
    {
      image: "/images/gift05c4ca4.png",
    },
    {
      image: "/images/gift05c4ca4.png",
    },
    {
      image: "/images/gift05c4ca4.png",
    },
    {
      image: "/images/gift05c4ca4.png",
    },
    {
      image: "/images/gift05c4ca4.png",
    },
    {
      image: "/images/gift05c4ca4.png",
    },
  ];

  handleDownGame() {
    window.open('https://drive.google.com/file/d/184jRlMcjchw_aT-3zndW4DOQsLosKbXp/view', '_blank');
  }

  changeSlide(direction) {
    const scrollContainer = document.querySelector(
      ".banner-v2-info-background"
    );
    const scrollAmount = 260;

    if (direction === "next") {
      const maxScroll =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      let newScrollPosition = scrollContainer.scrollLeft + scrollAmount;
      newScrollPosition = Math.min(newScrollPosition, maxScroll);
      scrollContainer.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    } else if (direction === "prev") {
      let newScrollPosition = scrollContainer.scrollLeft - scrollAmount;
      newScrollPosition = Math.max(newScrollPosition, 0);
      scrollContainer.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  }
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
      font-family: "cinzel";
      padding: 0 100px 30px;
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
      width: 100%;
      height: 800px;
      object-fit: cover;
      filter: brightness(0.5);
    }

    .logo {
      width: 100vw;
      position: absolute;
      top: 410px;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;

      img {
        max-width: 90%;
        height: auto;
      }
    }
  }

  .banner-v2 {
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 100px;
    min-height: 1000px;
    margin-top: -5px;
    background: url("/images/bgjsdesign3.jpg") no-repeat center;
    background-size: cover;

    .banner-v2-header {
      background: url("/images/page-main-top.png") no-repeat top;
      width: 1000px;
      position: relative;
      min-height: 430px;
      margin: 0;
      padding: 20px 0px 0;

      @media (max-width: 1600px) {
        transform: scale(0.9);
      }

      @media (max-width: 1200px) {
        transform: scale(0.7);
        top: -200px;
      }

      @media (max-width: 800px) {
        transform: scale(0.4);
        top: -300px;
      }

      @media (max-width: 600px) {
        transform: scale(0.3);
        top: -300px;
      }

      .banner-v2-content {
        background: url("/images/page-main-loop.png");
        padding: 0 5px 0px;

        ::v-deep .v-window {
          height: 222px !important;
        }

        .down-game {
          width: 30%;
          height: 300px;
          margin: -81px 10px;
          background: url(/images/game-info-bg.png);
          padding: 92px 0 0 24px;

          transition: transform 0.2s ease;

          &:hover {
            transform: scale(1.05);
            cursor: pointer;
          }

          .btn-download {
            img {
              height: 189px;
              width: 262px;
            }
          }
        }

        .banner-auto {
          width: 693px;
        }
      }

      .center-image {
        display: flex;
        justify-content: center;
        padding: 10px;

        img {
          width: 100%;
          border: 1px solid #333333;
        }
      }

      ::v-deep .v-carousel__controls,
      ::v-deep .v-window__prev,
      ::v-deep .v-window__next {
        display: none;
      }

      ::v-deep .list {
        background-color: #1e1e1e00;
        min-height: 500px;
        padding: 0px 15px;
      }
    }

    .banner-v2-footer {
      min-height: 150px;
      background: url("/images/page-main-bot.png") no-repeat bottom;
    }

    .banner-v2-info {
      position: relative;
      min-width: 600px;

      @media (max-width: 1600px) {
        transform: scale(0.8);
      }

      @media (max-width: 1200px) {
        top: -200px;
        transform: scale(0.6);
      }

      @media (max-width: 800px) {
        top: -200px;
        transform: scale(0.4);
      }

      @media (max-width: 600px) {
        top: -200px;
        transform: scale(0.3);
      }

      .banner-v2-info-background {
        width: 260px;
        display: flex;
        position: absolute;
        overflow: hidden;
        left: 245px;
        margin: 165px 0;
        z-index: 99;
      }

      .btn-group {
        position: absolute;
        display: flex;
        width: 390px;
        justify-content: space-between;
        margin: 330px 177px;

        img {
          cursor: pointer;
        }
      }

      .yuanMove {
        background: url(/images/yuan.png) no-repeat 0 0;
        position: absolute;
        width: 750px;
        height: 750px;
        margin: 0 auto;
        /* Thêm mã CSS cho vòng tròn */
        animation: spin 15s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
}
</style>
    