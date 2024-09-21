Vue.component('grid-component-4', {
  props: {
    images: {
      type: Array,
      required: true,
      default: () => ([
        { src: "images/img1ContainerGrid.jpg", alt: "Image 1" },
        { src: "images/img3ContainerGrid.jpg", alt: "Image 2" },
        { src: "images/img2ContainerGrid.jpg", alt: "Image 3" },
        { src: "images/img4ContainerGrid.jpg", alt: "Image 4" }
      ])
    }
  },
  template: `
    <div class="row fade-in-bottom" style="width: 80%;">
      <div class="grid-container">
        <div v-for="(image, index) in images" :key="index" :class="['grid-item', 'item-' + (index + 1), 'fade-in-grid']">
          <img :src="image.src" :alt="image.alt">
        </div>
      </div>
    </div>
  `,
  mounted() {
    this.addStyles();
  },
  methods: {
    addStyles() {
      if (!document.getElementById('grid-component-4-styles')) {
        const style = document.createElement('style');
        style.id = 'grid-component-4-styles';
        style.textContent = `
          .fade-in-grid {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }

          .fade-in-bottom.is-visible .fade-in-grid {
            opacity: 1;
            transform: translateY(0);
          }

          .fade-in-bottom.is-visible .fade-in-grid:nth-child(1) { transition-delay: 0.1s; }
          .fade-in-bottom.is-visible .fade-in-grid:nth-child(2) { transition-delay: 0.2s; }
          .fade-in-bottom.is-visible .fade-in-grid:nth-child(3) { transition-delay: 0.3s; }
          .fade-in-bottom.is-visible .fade-in-grid:nth-child(4) { transition-delay: 0.4s; }
        `;
        document.head.appendChild(style);
      }
    }
  }
});