Vue.component('grid-component-img-text', {
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
    <div class="row fade-in-bottom" style="width:90%;">
      <div class="col" >
        <img :src="content.imageSrc" alt="Image" style="margin:0 auto; width: 80%;border-radius: 2%;">
        
      </div>
      <div class="col" style="display: flex; flex-direction: column;margin:0 auto;">
        <div class="title-content-img-text">
          <h1>{{ content.title }}</h1>
          <p>{{ content.description }}</p>
          <ul>
          <li class="lista">Identidad corporativa</li>
          <li class="lista">Diseño de logotipo</li>
          <li class="lista">Comercialización</li>
          <li class="lista">Paquetería</li>
          <li class="lista">Piezas editoriales</li>
          <li class="lista">Señalética</li>
          <li class="lista">Papelería</li>
          <li class="lista">Ilustración</li>
          

          </ul>
        </div>
      </div>
    </div>
  `,
  mounted() {
    console.log('content:', this.content); // Verifica el valor de content
  }
});
