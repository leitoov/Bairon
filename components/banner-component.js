Vue.component("banner-component", {
  data() {
    return {
      banners: [
        {
          title: "+600",
          content: "Departamentos vendidos en un año",
          color: "#A4C8BA",
          imageUrl: ["bennerImg2.svg", "bennerImg1.svg", "bennerImg3.svg"],
          logoImg: "colonia.svg",
          class: "item-1",
        },
        {
          title: "+500",
          content: "Contenidos realizados con 80% de efectividad",
          color: "#F5A76B",
          imageUrl: ["boulanImg2.svg", "boulanImg1.svg"],
          logoImg: "boulan.svg",
          class: "item-2",
        },
        {
          title: "+100k",
          content: "Clientes nuevos en un año",
          color: "#C7AFE9",
          imageUrl: ["dermaglosImg2.svg", "dermaglosImg1.svg"],
          logoImg: "dermaglos.svg",
          class: "item-3",
        },
      ],
      currentItem: 0,
      exitingItem: null, // Para rastrear el banner que está saliendo
    };
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
            <h1 :style="{color: banner.color}"> {{ banner.title }}</h1>
            <p>{{ banner.content }}</p>
          </div>
         <div v-if="Array.isArray(banner.imageUrl)" :class="['banner-img-container', banner.class]">   
  <div class="banner-img">
    <img v-for="(img, i) in banner.imageUrl" :key="i" :src="getImageUrl(img)" :alt="banner.title">
  </div>
</div>
          
          <button @click="nextBanner">
            <i class="material-icons arrow_forward icon">arrow_forward</i>
          </button>
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
    },
  },
});
