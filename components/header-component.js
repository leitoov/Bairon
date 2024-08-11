Vue.component('header-component', {
  template: `
    <div class="container text-center">
      <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
        <a href="#quienes-somos"  @click="closeNav" style="margin-top: 15px;">QUIENES SOMOS</a>
        <a href="#servicios"  @click="closeNav">SERVICIOS</a>
        <a href="#caso-exito"  @click="closeNav">CASOS DE ÉXITO</a>
        <a href="#contacto"  @click="closeNav" style="margin-bottom: 10px;">CONTACTO</a>
      </div>
      <div class="row">
        <div class="col" style="align-items: end; display: flex; margin: auto;">
          <img src="./images/Logo.svg" style="width:10%;">
        </div>
        
        <div class="col" style="justify-content: end;display: flex;margin: auto; padding-right: 50px;">
          <span style="font-size:30px;cursor:pointer;color: white;" @click="openNav">&#9776;</span>
        </div>
      </div>
    </div>
  `,
  mounted() {
    this.closeNav(); // Asegura que el menú esté cerrado al iniciar
  },
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "270px";
      document.getElementById("mySidenav").style.height = "300px";
      document.getElementById("mySidenav").style.boxShadow = "-5px 7px 13px 4px rgba(0, 0, 0, 1)";
      document.getElementById("overlay").style.display = "block"; // Muestra el overlay
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mySidenav").style.height = "0";
      document.getElementById("mySidenav").style.boxShadow = "none";
      document.getElementById("overlay").style.display = "none"; // Oculta el overlay
    }
  }
});
