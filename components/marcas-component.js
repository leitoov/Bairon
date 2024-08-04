Vue.component("marcas-component", {
  data() {
    return {
      images: [
        { src: './images/BAIRON - Logos Web 02_07 - Aloha Gris 1.svg' },
        { src: './images/BAIRON - Logos Web 02_07 - Aurora Alfonso Gris 1.svg' },
        { src: './images/BAIRON - Logos Web 02_07 - Cala Gris 1.svg' },
        { src: './images/BAIRON - Logos Web 02_07 - Campari Gris 1.svg' },
        { src: './images/BAIRON - Logos Web 02_07 - Chandon Gris 1.svg' },
        { src: './images/BAIRON - Logos Web 02_07 - Corona Gris 1.svg' },
        { src: './images/BAIRON - Logos Web 02_07 - Freddo Gris 1.svg' },
        { src: './images/BAIRON - Logos Web 02_07 - Ginebra Gris 1.svg' },
        { src: './images/BAIRON - Logos Web 02_07 - Johnson & Johnson Gris 2 Líneas 1.svg' },
        { src: './images/BAIRON - Logos Web 02_07 - Mary Kay Gris 1.svg' },
        { src: './images/BAIRON - Logos Web 02_07 - Mas Colonia Gris 1.svg' },
        { src: './images/BAIRON - Logos Web 02_07 - Sieger Gris 1.svg' },
        { src: './images/BAIRON - Logos Web 02_07 - Sofitel Gris 1.svg' },
        { src: './images/BAIRON - Logos Web 02_07 - Sweet Gris 1.svg' }
      ]
    };
  },

  template: `
<div class="marcas-component">
        <div class="marcas-container">
          <div class="marcas-scroll">
            <div class="grid-item" v-for="(item, index) in images" :key="'first-' + index">
              <img :src="item.src" :alt="'Imagen ' + (index + 1)">
            </div>
            <div class="grid-item" v-for="(item, index) in images" :key="'second-' + index">
              <img :src="item.src" :alt="'Imagen ' + (index + 1)">
            </div>
          </div>
        </div>
      </div>
`,

});

const styles = `
<style>
  .marcas-container {
    display: flex;
    overflow: hidden;
    width: 100%;
    position: relative;
  }

  .marcas-scroll {
    display: flex;
    flex-wrap: nowrap;
    animation: scroll 150s linear infinite;
    white-space: nowrap;
  }

  .grid-item {
    flex: 0 0 auto;
    width: 150px; /* Ajusta según el tamaño de tus imágenes */
    margin-right: 50px; /* Espacio entre las imágenes */
    display: flex;
    align-items: center; /* Alinea verticalmente las imágenes */
    justify-content: center; /* Centra horizontalmente las imágenes */
  }

  .grid-item img {
    width: 100%;
    height: auto;
    object-fit: contain; /* Ajusta las imágenes para que se ajusten al contenedor sin deformarse */
  }

  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
</style>
`;
document.head.insertAdjacentHTML('beforeend', styles);
