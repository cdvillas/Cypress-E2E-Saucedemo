/// <reference types="cypress" /> 

describe('Test Shopping Cart - Saucedemo', () => {

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/');
  });

  const usuarios = [
    {usuario: 'standard_user', contraseña: 'secret_sauce'},
    {usuario: 'problem_user', contraseña: 'secret_sauce'}
  ];

  // Iteramos sobre los usuarios con forEach
  usuarios.forEach((usuario) => {

    it(`Compra con el usuario ${usuario.usuario}`, () => {
      // Iniciar sesión
      cy.iniciarSesion(usuario.usuario, usuario.contraseña); // Comando personalizado para el login
      
      // Agregar productos al carrito
      cy.añadirAlCarrito(); // Comando personalizado para agregar productos
      
      // Realizar el checkout
      cy.hacerCompra(); // Comando personalizado para el heckout
      
      // Cerrar sesión
      cy.cerrarSesion(); // Comando personalizado para el logout
    });
   
  });

})

