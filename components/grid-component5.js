Vue.component('grid-component5', {
    data() {
      return {
        images: [
          'images/img1ContainerGridSegunda.svg',
          'images/img3ContainerGridSegunda.svg',
          'images/img4ContainerGridSegunda.svg',
          'images/img2ContainerGridSegunda.svg',
          'images/img5ContainerGridSegunda.svg'
        ]
      };
    },
    template: `
      <div class="row fade-in-bottom">
        <div class="grid-container">
           <div v-for="(image, index) in images" :key="index" :class="'grid-item item-' + (5 + index  )">
            <img :src="image" alt="Grid Image">
          </div>
        </div>
      </div>
    `,
    mounted() {
      // Aquí podrías agregar lógica adicional si es necesario
    }
  });
  