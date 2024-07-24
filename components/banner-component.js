Vue.component('banner-component', {
  data() {
    return {
      banners: [{
        title: "+150%",
        content: "Aumento de conversiones en 6 meses",
        color: "#A4C8BA",
        imageUrl: "Antartida.svg",
        logoImg: "AntartidaLogo.svg"
      }, {
        title: "+150%",
        content: "Aumento de conversiones en 6 meses",
        color: "red",
        imageUrl: "Antartida.svg",
        logoImg: "AntartidaLogo.svg"
      }],
      currentItem: 0
    }
  },
  template: `
    <div v-if="banners.length > 0">
      <div v-for="(banner, index) in banners" :key="banner.title"
        class="banner" :class="{ active: index === currentItem }"
        :style="{ backgroundColor: banner.color }">
        <div class="banner-logo">          
          <img :src="getImageUrl(banner.logoImg)" :alt="banner.title">
        </div>
        <div class="titleContainer">
          <h1>{{ banner.title }}</h1>
          <p>{{ banner.content }}</p>
        </div>
        <div class="banner-img-container">   
          <div class="banner-img">
            <img :src="getImageUrl(banner.imageUrl)" :alt="banner.title">
          </div>
          <div class="banner-img">
            <img :src="getImageUrl(banner.imageUrl)" :alt="banner.title">
          </div>
          <div class="banner-img">
            <img :src="getImageUrl(banner.imageUrl)" :alt="banner.title">
          </div>
        </div><button @click="nextBanner" ></button>
      </div> 
     
    </div>
  `,
  methods: {
    getImageUrl(img) {
      return "./images/" + img;
    },
    nextBanner() {
      this.currentItem = (this.currentItem + 1) % this.banners.length;
    }
  }
});
