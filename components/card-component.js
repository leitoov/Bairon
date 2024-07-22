Vue.component("card-component", {
  data() {
    return {
      cards: [
        {
          title: "Generación de contenido",
          content:
            "Nos preocupamos por entender lo que nuestros clientes quieren y realizar lo que necesitan logrando resultados personalizados.",
          color: "#F5A76B",
          buttonText: "Principal",
          imageUrl: "cardImg1.svg",
        },
        {
          title: "Manejo de redes",
          content:
            ">Brindamos un servicio integral, nos involucramos en la planificación de estrategias, la creación y publicación de contenido textual, gráfico y audiovisual.",
          color: "#C7AFE9",
          buttonText: "Principal",
          imageUrl: "cardImg2.svg",
        },
        {
          title: "Cobertura de eventos",
          content:
            "Nos preocupamos por entender lo que nuestros clientes quieren y realizar lo que necesitan logrando resultados personalizados.",
          color: "#A4C8BA",
          buttonText: "Principal",
          imageUrl: "cardImg3.svg",
        },
        {
          title: "Diseño gráfico",
          content:
            "Creamos piezas visuales que impacten los sentidos de la audiencia probando de manera constante estilos y tendencias para optimizar su presencia en entornos",
          color: "#E9AFF2",
          buttonText: "Principal",
          imageUrl: "cardImg4.svg",
        },
        {
          title: "Diseño Web",
          content:
            "Desarrollamos sitios web eficientes con identidades visuales únicas que cautiven, prestando atención especial a la ejecución minuciosa de cada detalle.",
          color: "#F5A76B",
          buttonText: "Principal",
          imageUrl: "cardImg5.svg",
        },
      ],
    };
  },

  template: `
    <div  v-if="cards.length">
        <div v-for="card in cards" :key="cards.title" >
                <div  :style="{ backgroundColor: card.color }" class="card">
                    <div class="card-content">
                        <h2>{{ card.title }}</h2>
                        <p>{{ card.content }}</p>
                        <ui-button class="beige">{{ card.buttonText }}</ui-button>
                    </div>
                <div class="card-img">
                <img :src="getImageUrl(card.imageUrl)" :alt="card">
                </div>
            </div>
        </div>
    </div>
            `,
  mounted() {},
  methods: {
    getImageUrl(img) {
      return "./images/" + img;
    },
  },
});
