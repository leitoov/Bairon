Vue.component('grid-component-img-text', {
    data() {
      return {
        content: {
          title: "Generación de contenido",
          subtitle: "Inspiración en acción, creatividad en movimiento",
          imageUrl: "./images/Ellipse 7.svg"
        }
      };
    },
    template: `
      <div class="row fade-in-bottom">
        <div class="col" style="display: flex; flex-direction: column;">
          <p>{{ content.title }}</p>
          <p style="width:90%;font-weight: 700; font-size: 60px; line-height: 72px;">{{ content.subtitle }}</p>
        </div>
        <div class="col" style="display:flex;justify-content: flex-end;">
          <img :src="content.imageUrl" alt="Illustration">
        </div>
      </div>
    `
  });
  