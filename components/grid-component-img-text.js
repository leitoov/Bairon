Vue.component('grid-component-img-text', {
  props: {
    content: {
      type: Object,
      required: true,
      default: () => ({
        title: 'Historias visuales',
        description: 'Transformamos las ideas en contenido visual inspirador.',
        imageSrc: './images/img5ContainerGrid.svg'
      })
    }
  },
  template: `
    <div class="row fade-in-bottom">
      <div class="col" >
        <img :src="content.imageSrc" alt="Image" style="margin:0 auto;">
        
      </div>
      <div class="col" style="display: flex; flex-direction: column;margin:0 auto;">
        <div class="title-content-img-text">
          <h1  >{{ content.title }}</h1>
          <p >{{ content.description }}</p>
        </div>
      </div>
    </div>
  `,
  mounted() {
    console.log('content:', this.content); // Verifica el valor de content
  }
});
