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
        title: "otrbanner",
        content: "Aumehgygyuiuhbu",
        color: "red",
        imageUrl: "cardImg4.svg",
        logoImg: "AntartidaLogo.svg"
      },
      
     ],
      currentItem: 0,
      exitingItem: null // Para rastrear el banner que está saliendo
    }
  },
  template: `
    <div v-if="banners.length > 0" class="carousel-banner-container">
      <div v-for="(banner, index) in banners" :key="banner.title"
        class="banner" :class="{ active: index === currentItem, front: index === currentItem, back: index === (currentItem + 1) % banners.length, 'banner-exit': index === exitingItem }"
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
        </div>
        <button @click="nextBanner"></button>
      </div>
    </div>
  `,
  methods: {
    getImageUrl(img) {
      return "./images/" + img;
    },
    nextBanner() {
      this.exitingItem = this.currentItem;
      setTimeout(() => {
        this.currentItem = (this.currentItem + 1) % this.banners.length;
        this.exitingItem = null;
      }); 
    }
  }
});
