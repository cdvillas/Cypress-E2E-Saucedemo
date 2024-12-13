/// <reference types="cypress" /> 

Cypress.Commands.add('iniciarSesion', (usuario, contraseña) => {

  // Navegar a la pagina Saucedemo
  cy.visit('https://www.saucedemo.com/')
  // ----------------------------------------
  // Primera pantalla "Login"
  // Ingresar el usuario  
  cy.get('#user-name').type(usuario)
  // Ingresar la clave
  cy.get('#password').type(contraseña)
  cy.wait(2000)
  // Hacer click en el boton ingresar
  cy.get('#login-button').click()

})

Cypress.Commands.add('añadirAlCarrito', () => {
    
  // Selecciona solo los 3 primeros productos
  cy.get('.btn_inventory').each((button, index) => {    
    if (index < 3) {    
      cy.wrap(button).click();
    }

  })

})

Cypress.Commands.add('hacerCompra', () => {

  // Hacer click en el icono del carrito
  cy.get('#shopping_cart_container > a').click();
  // Hacer click en el boton ckeckout 
  cy.get('#checkout').click(); 
  // ----------------------------------------
  // Llenar el formulario con informacion personal
  // Ingresar el nombre
  cy.get('#first-name').type('John');
  // Ingresar el apellido 
  cy.get('#last-name').type('Doe');
  // Ingresar el código postal 
  cy.get('#postal-code').type('123456');
  // Hacer click en el boton continuar 
  cy.get('#continue').click();
  // ----------------------------------------
  // Pantalla de resumen
  // Hacerl click en el boton Finalizar compra
  cy.get('#finish').click(); 
  // ----------------------------------------
  // Validar que el mensaje de éxito sea visible
  cy.contains('Thank you for your order!').should('be.visible');

})

Cypress.Commands.add('cerrarSesion', () => {

  // Hacer click en el boton Menu Hamburguesa
  cy.wait(2000)
  cy.get('#react-burger-menu-btn').click(); 
  // ----------------------------------------
  // Seleccionar Logout del Menu
  cy.wait(2000)
  cy.get('#logout_sidebar_link').click(); 


});


