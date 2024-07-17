Vue.component('header-component', {
  template: `

    <div class="container text-center">
      <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <div class="row">
        <div class="col" style="align-items: end; display: flex; margin: auto;">
          <img src="./images/Logo.svg"/>
        </div>
        
        <div class="col" style="justify-content: end;display: flex;margin: auto;">
          <span style="font-size:30px;cursor:pointer;color: white;" @click="openNav">&#9776;</span>
        </div>
      </div>
    </div>
  `,
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
  }
});
