class Form extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
    /* html */`
    <style>

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
      }

      button{
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        padding: 0;
      }

      h1, h2, h3, h4, h5, h6, p{
        margin: 0;
      }

      h1, h2, h3, h4, h5, h6, p, a, span, li, label, input, button{
        font-optical-sizing: auto;

      }

      img{
        object-fit: cover;
        width: 100%;
      }

      ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
      }



      .form {
        display:flex;
        flex-direction: column;
        gap: 10px;
        border-radius: 10px;
      }

      .form__body{
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 10px 0;
        gap: 10px;
      }
      /* Encabezado del formulario */
      .form__header {
        background-color: rgb(255, 255, 255);
      }

      .form__header-box{
        display: flex;
        justify-content: space-between; /* Alinea los elementos a los extremos */
        align-items: center;
      }

      .form__header-box-filter {
        background: hsl(229, 66%, 30%);
        padding: 5px 10px;
        color: white; /* Asegura que el texto sea visible */
        height: 30px;
      }

      .form__header-box-filter button {
        color: white; /* Asegura que el texto sea visible */
        font-size: 16px;
      }

      .form__header-icons {
        display: flex;
        gap: 10px; /* Espacio entre los iconos */
        margin-right: 5px;
      }

      .table__header__icon svg,
      .edit-icon svg,
      .delete-icon svg,
      .clean-icon,
      .save-icon {
        width: 30px;
        height: 30px;
        fill: black;
      }


      /* Ajustar cada elemento del formulario */
      .form-element {
        flex: 1;
        display:flex;
        flex-direction: column;
        gap: 10px 0px;

      }


      /* Campos de entrada */
      .form-element {
        margin: 10px 0;
      }

      .form-element-input input {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        box-sizing: border-box;
        border: none;
        background: hsl(229, 66%, 80%);
        color: white;
      }


   
    </style>

    <section class="form">
      <div class="form__header">
        <div class="form__header-box">
          <div class="form__header-box-filter">
            <button>General</button>
          </div>
          <div class="form__header-icons">
            <button class="clean-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>eraser</title>
                <path
                  d="M16.24,3.56L21.19,8.5C21.97,9.29 21.97,10.55 21.19,11.34L12,20.53C10.44,22.09 7.91,22.09 6.34,20.53L2.81,17C2.03,16.21 2.03,14.95 2.81,14.16L13.41,3.56C14.2,2.78 15.46,2.78 16.24,3.56M4.22,15.58L7.76,19.11C8.54,19.9 9.8,19.9 10.59,19.11L14.12,15.58L9.17,10.63L4.22,15.58Z" />
              </svg>
            </button>
            <button class="save-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>content-save</title>
                <path
                  d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="form__body">
        <form>
          <div class="form-element">
            <div class="form-title">
              <span>Nombre</span>
            </div>
            <div class="form-element-input">
              <input type="text" placeholder="">
            </div>
          </div>
        </form>
        <form>
          <div class="form-element">
            <div class="form-title">
              <span>Email</span>
            </div>
            <div class="form-element-input">
              <input type="email" placeholder="">
            </div>
          </div>
        </form>
      </div>
    </section>
    
    `
  }
}

customElements.define('form-component', Form)
