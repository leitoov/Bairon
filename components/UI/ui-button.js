Vue.component('ui-button', {
    template: `
      <button 
        :class="['custom-button', buttonType]" 
        @click="emitClick"
      >
        <slot></slot>
      </button>
    `,
    props: {
      buttonType: {
        type: String,
        default: 'transparent',
        validator: (value) => ['transparent', 'yellow', 'beige'].includes(value)
      },
      description: {
        type: String,
        default: ''
      }
    },
    methods: {
      emitClick() {
        this.$emit('funcion')
      }
    }
  });
  
  // Estilos del botón
  const styles = `
    <style>
      .custom-button {
        font-family: Helvetica, sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 20.7px;
        letter-spacing: 2%;
        text-align: center;
        width: 209.15px;
        height: 62px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
      }
  
      .transparent {
        background-color: transparent;
        border: 1px solid rgba(255, 255, 255, 1);
        color: rgba(255, 255, 255, 1);
      }
  
      .yellow {
        background-color: rgba(255, 208, 21, 1);
        border: 0.3px solid rgba(255, 208, 21, 1);
        border-bottom-width: 2.74px;
        border-right-width: 2.74px;
        color: black;
      }
  
      .beige {
        background-color: rgba(243, 227, 157, 1);
        border: 1px solid rgba(0, 0, 0, 1);
        border-bottom-width: 2px;
        border-right-width: 2px;
        color: rgba(0, 0, 0, 1);
      }
  
      .custom-button:hover {
        opacity: 0.8;
      }
    </style>
  `;
  
  // Agregar los estilos al documento
  document.head.insertAdjacentHTML('beforeend', styles);