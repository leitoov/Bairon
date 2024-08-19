Vue.component('formulario-component', {
    data() {
      return {
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: ''
      };
    },
    template: `
      <div class="form">
        <div class="grid-container-form">
          <h2>Escribinos</h2>
          <div></div>
          <div>
            <input type="text" v-model="nombre" placeholder="Nombre">
          </div>
          <div>
            <input type="text" v-model="apellido" placeholder="Apellido">
          </div>
          <div>
            <input type="email" v-model="email" placeholder="Email">
          </div>
          <div>
            <input type="tel" v-model="telefono" placeholder="Teléfono">
          </div>
          <div class="full-span">
            <textarea v-model="mensaje" placeholder="Mensaje"></textarea>
          </div>
        </div>
        <button @click="enviarFormulario">Enviar</button>
      </div>
    `,
    methods: {
      enviarFormulario() {
        // Aquí puedes manejar el envío del formulario
        console.log({
          nombre: this.nombre,
          apellido: this.apellido,
          email: this.email,
          telefono: this.telefono,
          mensaje: this.mensaje
        });
        // Restablecer los campos del formulario después del envío
        this.nombre = '';
        this.apellido = '';
        this.email = '';
        this.telefono = '';
        this.mensaje = '';
      }
    }
  });
  