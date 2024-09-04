Vue.component("card-component", {
  data() {
    return {
      cards: [
        {
          title: "Generación de contenido",
          content: "Nos preocupamos por entender lo que nuestros clientes quieren y realizar lo que necesitan logrando resultados personalizados.",
          color: "#F5A76B",
          buttonText: "Ver más",
          imageUrl: "generacion_contenido.gif",
          enlace:"./contenido.html"
        },
        {
          title: "Manejo de redes",
          content: "Brindamos un servicio integral, nos involucramos en la planificación de estrategias, la creación y publicación de contenido textual, gráfico y audiovisual.",
          color: "#C7AFE9",
          buttonText: "Ver más",
          imageUrl: "menejo_redes.gif",
            enlace:"./redes-sociales.html"
        },
        {
          title: "Cobertura de eventos",
          content: "Nos preocupamos por entender lo que nuestros clientes quieren y realizar lo que necesitan logrando resultados personalizados.",
          color: "#A4C8BA",
          buttonText: "Ver más",
          imageUrl: "cobertura_eventos.gif",
            enlace:"./cobertura-de-eventos.html"
        },
        {
          title: "Diseño gráfico",
          content: "Creamos piezas visuales que impacten los sentidos de la audiencia probando de manera constante estilos y tendencias para optimizar su presencia en entornos",
          color: "#E9AFF2",
          buttonText: "Ver más",
          imageUrl: "disenio_grafico.gif",
            enlace:"./redes-sociales-innovacion.html"
        },
        {
          title: "Diseño Web",
          content: "Desarrollamos sitios web eficientes con identidades visuales únicas que cautiven, prestando atención especial a la ejecución minuciosa de cada detalle.",
          color: "#F5A76B",
          buttonText: "Ver más",
          imageUrl: "disenio_web.gif",
            enlace:"./redes-sociales.html"
        },
      ],
      currentIndex: 0,
    };
  },

  template: `
    <div class="card-stack">
      <div v-for="(card, index) in cards" :key="card.title" 
           class="card" 
           :style="cardStyle(index, card.color)">
        <div class="card-content">
          <h3 class="contenido-title">{{ card.title }}</h3>
          <p class="contenido-text">{{ card.content }}</p>
        <button class="ui-button beige" @click="Href(card.enlace)">{{ card.buttonText }}</button>
       </div>
        <div class="card-img">
<img :src="getImageUrl(card.imageUrl)" />

         
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
      return "./gif/" + img;
    },

    startAutoChange() {
      this.autoChangeInterval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.cards.length;
      }, 5000);
    },

    cardStyle(index, color) {
      const offset = (index - this.currentIndex + this.cards.length) % this.cards.length;
      const zIndex = this.cards.length - offset;
      const scale = 1 - (offset * 0.05);
      const translateY = offset * 10;

      return {
        zIndex: zIndex,
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: 1 - (offset * 0.2),
        backgroundColor: color,
      };
    },
    Href(enlace) {
      window.location.href = enlace;
    },
  },
});