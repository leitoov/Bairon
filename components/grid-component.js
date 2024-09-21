Vue.component('grid-component', {
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({
        title: "Generación de contenido",
        subtitle: "Inspiración en acción, creatividad en movimiento",
        imageUrl: "./images/Ellipse 7.svg"
      })
    }
  },
  template: `
    <div class="row fade-in-bottom">
      <div class="col-9 slide-in-left" style="display: flex; flex-direction: column;">
        <p class="title-animation">{{ content.title }}</p>
        <p class="subtitle-animation" style="width:90%;font-weight: 700; font-size: 60px; line-height: 72px;">{{ content.subtitle }}</p>
      </div>
      <div class="col slide-in-right" style="display:flex;justify-content: flex-end; margin: auto;">
        <div>
          <img :src="content.imageUrl" alt="Illustration" class="image-animation">
        </div>
      </div>
    </div>
  `,
  mounted() {
    this.addStyles();
  },
  methods: {
    addStyles() {
      if (!document.getElementById('grid-component-styles')) {
        const style = document.createElement('style');
        style.id = 'grid-component-styles';
        style.textContent = `
          .slide-in-left, .slide-in-right {
            opacity: 0;
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          
          .slide-in-left {
            transform: translateX(-50px);
          }
          
          .slide-in-right {
            transform: translateX(50px);
          }
          
          .fade-in-bottom.is-visible .slide-in-left,
          .fade-in-bottom.is-visible .slide-in-right {
            opacity: 1;
            transform: translateX(0);
          }
          
          .title-animation, .subtitle-animation, .image-animation {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          
          .fade-in-bottom.is-visible .title-animation {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.2s;
          }
          
          .fade-in-bottom.is-visible .subtitle-animation {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.4s;
          }
          
          .fade-in-bottom.is-visible .image-animation {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.6s;
          }
        `;
        document.head.appendChild(style);
      }
    }
  }
});