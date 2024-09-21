Vue.component('grid-component-5', {
    data() {
      return {
        images: [
          'images/img1ContainerGridSegunda.jpg',
          'images/img3ContainerGridSegunda.jpg',
          'images/img4ContainerGridSegunda.jpg',
          'images/img2ContainerGridSegunda.jpg',
          'images/img5ContainerGridSegunda.jpg'
        ]
      };
    },
    template: `
      <div class="row fade-in-bottom" style="width: 80%;">
        <div class="grid-container">
           <div v-for="(image, index) in images" :key="index" :class="'grid-item item-' + (5 + index  )">
            <img :src="image" alt="Grid Image" >
          </div>
        </div>
      </div>
    `,
    mounted() {
      // Aquí podrías agregar lógica adicional si es necesario
    }
  });
  