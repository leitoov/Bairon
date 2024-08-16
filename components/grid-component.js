Vue.component('grid-component', {
    props: {
      images: {
        type: Array,
        required: true,
        default: () => ([
          { src: "images/img1ContainerGrid.svg", alt: "Image 1" },
          { src: "images/img3ContainerGrid.svg", alt: "Image 2" },
          { src: "images/img2ContainerGrid.svg", alt: "Image 3" },
          { src: "images/img4ContainerGrid.svg", alt: "Image 4" }
        ])
      }
    },
    template: `
      <div class="row fade-in-bottom">
        <div class="grid-container">
          <div v-for="(image, index) in images" :key="index" :class="'grid-item item-' + (index + 1)">
            <img :src="image.src" :alt="image.alt">
          </div>
        </div>
      </div>
    `
  });
  