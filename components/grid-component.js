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
    <div class="row fade-in-bottom grid-component-container">
      <div class="col-9 slide-in-left text-content">
        <p class="title-animation">{{ content.title }}</p>
        <p class="subtitle-animation">{{ content.subtitle }}</p>
      </div>
      <div class="col slide-in-right image-container">
        <img :src="content.imageUrl" alt="Illustration" class="image-animation responsive-image">
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
          .grid-component-container {
            display: flex;
            align-items: center;
            overflow: hidden;
          }
          
          .text-content {
            flex: 0 0 75%;
            padding-right: 20px;
          }
          
          .image-container {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            max-height: 100%;
          }
          
          .responsive-image {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
          }

          .subtitle-animation {
            width: 90%;
            font-weight: 700;
            font-size: 60px;
            line-height: 1.2;
          }

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
             @media screen and (max-width: 800px) {
              .fade-in-bottom.is-visible{
                  width: 100%!important;
              }
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

          @media (max-width: 800px) {
            .grid-component-container {
              flex-direction: column;
            }
            .text-content, .image-container {
              flex: 1 0 100%;
              padding-right: 0;
            }
            .image-container {
              display:none;
              justify-content: center;
              margin-top: 20px;
            }
            .subtitle-animation {
              font-size: 35px;
            }
          }
        `;
        document.head.appendChild(style);
      }
    }
  }
});