<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

  <style>
    body {
      font-family: "Lato", sans-serif;
      cursor: url('./images/cursor.png'), auto
    }
    .fondo {
      background-image: url('./images/fondo.png');
    }
    .container {
      max-width: 100%!important;
    }
    .sidenav {
      height: 100%;
      width: 0;
      position: fixed;
      z-index: 1;
      top: 0;
      right: 0;
      background-color: #111;
      overflow-x: hidden;
      transition: 0.5s;
      padding-top: 60px;
    }
    h1 {
      font-size: 84px;
      color: white;
      font-weight: 700;
      margin-top: 5%;
      margin-left: 5%;
    }
    .sidenav a {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 25px;
      color: #818181;
      display: block;
      transition: 0.3s;
    }
    .sidenav a:hover {
      color: #f1f1f1;
    }
    .sidenav .closebtn {
      position: absolute;
      top: 0;
      right: 25px;
      font-size: 36px;
      margin-left: 50px;
    }
    /* Cards */
    /* Banner */
    .nuestro-impacto {
      width: 90%;
      margin: 5rem auto;
      font-weight: bold;
    }
    .banner {
      border: 1px solid #333;
      box-shadow: -3px 1px 0px 2px rgba(0, 0, 0, 1);
      border-radius: 1rem;
      width: 90%;
      margin: 0 auto;
      position: relative;
      display: flex;
      background: #A4C8BA;
      justify-content: center;
    }
    .banner-logo,
    .banner > button {
      position: absolute;
      background-position: center;
      background-size: contain;
    }
    .banner-logo {
      width: 60px;
      height: 60px;
      background-image: url("images/AntartidaLogo.svg");
      top: 1rem;
      left: 3rem;
    }
    .banner > button {
      border: none;
      border-radius: 100%;
      width: 2.5rem;
      height: 2.5rem;
      background-image: url(./images/Flecha.svg);
      right: 1rem;
      bottom: 1rem;
    }
    .titleContainer {
      display: flex;
      flex-direction: column;
      width: 40%;
      justify-content: center;
      align-items: center;
    }
    .titleContainer > h1 {
      margin: 0;
      font-size: 4rem;
      font-weight: bold;
    }
    .titleContainer > p {
      margin: 0;
      font-size: 12px;
    }
    .banner-img-container {
      display: flex;
      width: 50%;
      align-items: flex-end;
      gap: 0 10px;
    }
    .banner-img {
      width: 30%;
      height: 332px;
      margin: 1rem 0;
      border-radius: 1rem;
      background-size: contain;
      background-repeat: no-repeat;
      background-image: url("images/Antartida.svg");
    }
    .banner-img-container .banner-img:nth-child(2) {
      height: 370px;
    }
    /* Marcas */
    .marcas-component {
      height: 100vh;
      margin: 2rem;
      font-family: Arial, Helvetica, sans-serif;
    }
    .marcas-container {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(3, auto);
      gap: 5px;
      width: 80%;
      margin: 3rem auto;
    }
    .marcas-container .grid-item {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 0px;
    }
    .marcas-container img {
      width: 80%;
      height: auto;
      object-fit: cover;
    }
    .prev-form > img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }
    /* Formulario */
    .form {
      display: flex;
      height: 90vh;
      justify-content: center;
      flex-direction: column;
    }
    .grid-container {
      display: grid;
      width: 50%;
      margin: 0 auto;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, auto);
      gap: 20px;
    }
    .full-span {
      grid-column: span 2;
    }
    input, textarea {
      background: #C7AFE9;
      border: none;
      margin: 5px;
      box-shadow: -1px 0px 0px 3px rgba(0, 0, 0, 1);
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
    }
    textarea {
      height: 100px;
    }
    .form > button {
      margin: 20px auto;
      padding: 15px 40px;
      background-color: #FFD015;
      color: #333;
      font-weight: 600;
      border: 1px solid #333;
      cursor: pointer;
    }
    /* Footer */
    footer {
      background: #A4C8BA;
      min-height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
    footer > div {
      display: flex;
      justify-content: space-between;
      width: 90%;
      align-items: center;
    }
    footer > div > ul > li {
      list-style-type: none;
      font-weight: bold;
      margin: 10px 0;
    }
    footer > div > ul {
      margin: auto 0;
      display: flex;
      gap: 10px;
    }
    .icon {
      gap: 20px;
      display: flex;
    }
    .icon > img {
      width: 40px;
      height: 40px;
      vertical-align: middle;
    }
    div > p {
      font-size: 12px;
      font-weight: 600;
      text-align: left;
      margin: 10px 10px;
    }
    @media screen and (max-height: 450px) {
      .sidenav {
        padding-top: 15px;
      }
      .sidenav a {
        font-size: 18px;
      }
    }
  </style>
</head>
<body>
  <div id="app">
    <div class="fondo">
      <header-component></header-component>
      <div>
        <h1>
          Bienvenidos<br> 
          al planeta<br>
          BAIRON
        </h1>
      </div>
      <div style="margin-left: 5%; padding-bottom: 4%;">
        <button class="btn btn-primary mb-2">Contactános</button>
        <button class="btn btn-outline-light mb-2 ms-2">Ver más</button>
      </div>
    </div>

    <div class="container">
      <h2 class="nuestro-impacto">
        Nuestro Impacto
      </h2>
      <banner-component title="+150%" content="Aumento de conversiones en 6 meses"></banner-component>
    </div>

    <marcas-component></marcas-component>
    <div class="prev-form">
      <img src="./images/background-img.svg" alt="Img">
    </div>
    <formulario-component></formulario-component>
    <footer-component></footer-component>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  <script src="components/header-component.js"></script>
  <script src="components/footer-component.js"></script>
  <script src="components/formulario-component.js"></script>
  <script src="components/marcas-component.js"></script>
  <script src="components/card-component.js"></script>
  <script src="components/banner-component.js"></script>
  <script>
    new Vue({
      el: '#app'
    });
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
