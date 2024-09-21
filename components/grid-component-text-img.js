Vue.component('grid-component-text-img', {
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({
        title: 'Historias visuales',
        description: 'Transformamos las ideas en contenido visual inspirador.',
        imageSrc: './images/img5ContainerGrid.jpg'
      })
    }
  },
  template: `
    <div class="row fade-in-bottom" style="width:90%; overflow: hidden;">
      <div class="col slide-in-left" style="display: flex; flex-direction: column; justify-content: center; gap: 10px;">
        <div class="title-content">
          <h1>{{ content.title }}</h1>
          <p class="text-center">{{ content.description }}</p>
        </div>
      </div>
      <div class="col slide-in-right" style="text-align: center;">
        <img :src="content.imageSrc" alt="Image" style="width: 80%; border-radius: 2%;">
      </div>
    </div>
  `,
  mounted() {
    console.log('content:', this.content);
  }
});

// Estilos CSS para las animaciones
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInLeft {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }

  @keyframes slideInRight {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }

  .slide-in-left {
    animation: slideInLeft 1s ease-out;
  }

  .slide-in-right {
    animation: slideInRight 1s ease-out;
  }
`;
document.head.appendChild(style);