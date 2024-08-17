Vue.component('grid-component-text-img', {
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
      <div class="col" style="display: flex; flex-direction: column;">
        <h1>{{ content.title }}</h1>
        <p>{{ content.description }}</p>
      </div>
      <div class="col">
        <img :src="content.imageSrc" alt="Image">
      </div>
    </div>
  `,
  mounted() {
    console.log('content:', this.content); // Verifica el valor de content
  }
});
