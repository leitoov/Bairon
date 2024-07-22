Vue.component('header-component', {
  template: `
    <div class="container text-center">
      <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
        <a href="#">QUINES SOMOS</a>
        <a href="#">SERVICIOS</a>
        <a href="#">CASOS DE ÉXITO</a>
        <a href="#">CONTACTO</a>
      </div>
      <div class="row">
        <div class="col" style="align-items: end; display: flex; margin: auto;">
          <img src="./images/Logo.svg"/>
        </div>
        
        <div class="col" style="justify-content: end;display: flex;margin: auto; padding-right: 50px;">
          <span style="font-size:30px;cursor:pointer;color: white;" @click="openNav">&#9776;</span>
        </div>
      </div>
    </div>
  `,
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("mySidenav").style.height = "auto";
      document.getElementById("mySidenav").style.boxShadow="-5px 7px 13px 4px rgba(0, 0, 0, 1)";

    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mySidenav").style.height = "0";
      document.getElementById("mySidenav").style.boxShadow="none";
    }
    
  }
});
