Vue.component("card-component", {
  data() {
    return {
      cards: [
        {
          title: "Generación de contenido",
          content: "Nos preocupamos por entender lo que nuestros clientes quieren y realizar lo que necesitan logrando resultados personalizados.",
          color: "#F5A76B",
          buttonText: "Principal",
          imageUrl: "cardImg1.svg",
        },
        {
          title: "Manejo de redes",
          content: "Brindamos un servicio integral, nos involucramos en la planificación de estrategias, la creación y publicación de contenido textual, gráfico y audiovisual.",
          color: "#C7AFE9",
          buttonText: "Principal",
          imageUrl: "cardImg2.svg",
        },
        {
          title: "Cobertura de eventos",
          content: "Nos preocupamos por entender lo que nuestros clientes quieren y realizar lo que necesitan logrando resultados personalizados.",
          color: "#A4C8BA",
          buttonText: "Principal",
          imageUrl: "cardImg3.svg",
        },
        {
          title: "Diseño gráfico",
          content: "Creamos piezas visuales que impacten los sentidos de la audiencia probando de manera constante estilos y tendencias para optimizar su presencia en entornos",
          color: "#E9AFF2",
          buttonText: "Principal",
          imageUrl: "cardImg4.svg",
        },
        {
          title: "Diseño Web",
          content: "Desarrollamos sitios web eficientes con identidades visuales únicas que cautiven, prestando atención especial a la ejecución minuciosa de cada detalle.",
          color: "#F5A76B",
          buttonText: "Principal",
          imageUrl: "cardImg5.svg",
        },
      ],
      currentIndex: 0,
    };
  },

  template: `
    <div class="card-stack">
      <div v-for="(card, index) in cards" :key="card.title" 
           class="card" 
           :style="cardStyle(index)">
        <div class="card-content" :style="{ backgroundColor: card.color }">
          <h2>{{ card.title }}</h2>
          <p>{{ card.content }}</p>
          <ui-button class="beige">{{ card.buttonText }}</ui-button>
        </div>
        <div class="card-img">
          <img :src="getImageUrl(card.imageUrl)" :alt="card.title">
        </div>
      </div>
    </div>
  `,

  mounted() {
    this.startAutoChange();
  },

  beforeDestroy() {
    clearInterval(this.autoChangeInterval);
  },

  methods: {
    getImageUrl(img) {
      return "./images/" + img;
    },

    startAutoChange() {
      this.autoChangeInterval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.cards.length;
      }, 2000);
    },

    cardStyle(index) {
      const offset = (index - this.currentIndex + this.cards.length) % this.cards.length;
      const zIndex = this.cards.length - offset;
      const scale = 1 - (offset * 0.05);
      const translateY = offset * 10;

      return {
        zIndex: zIndex,
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: 1 - (offset * 0.2),
      };
    },
  },
});
