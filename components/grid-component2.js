Vue.component('grid-component2', {
    template: `
      <div class="row fade-in-bottom">
        <div class="col">
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
        </div>
        <div class="col">
          <img :src="imageSrc" alt="Image">
        </div>
      </div>
    `,
    props: {
      title: {
        type: String,
        default: 'Historias visuales'
      },
      description: {
        type: String,
        default: 'Transformamos las ideas en contenido visual inspirador.'
      },
      imageSrc: {
        type: String,
        default: './images/img5ContainerGrid.svg'
      }
    }
  });
  