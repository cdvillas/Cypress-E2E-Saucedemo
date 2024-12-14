# Proyecto Final - XAcademy QA Automation
## Descripción del Proyecto
El proyecto consiste en una suite de pruebas automatizadas para el sitio web [Saucedemo](https://www.saucedemo.com), diseñada en Cypress para validar el flujo de compras, desde el inicio de sesión hasta el logout, incluyendo la selección de productos, el checkout y la detección de defectos como imágenes inconsistentes, botones defectuosos y errores en el formulario de datos personales. Se emplearon comandos personalizados para optimizar la reutilización de código y mejorar la mantenibilidad del proyecto.
## Tecnologías Utilizadas
- **Cypress**: Framework para la automatización de pruebas E2E.
- **JavaScript**: Lenguaje de programación para escribir los tests.
- **Node.js**: Entorno para ejecutar Cypress.
- **Git**: Control de versiones para gestionar el proyecto.

## Cómo ejecutar el proyecto
Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>
   ```

2. **Instalar las dependencias**
   Asegúrate de tener [Node.js](https://nodejs.org/) instalado, luego ejecuta:
   ```bash
   npm install
   ```

3. **Abrir Cypress**
   Para abrir el entorno interactivo de Cypress, ejecuta:
   ```bash
   npx cypress open
   ```

4. **Ejecutar las pruebas en modo headless**
   Si prefieres ejecutar las pruebas en la terminal, utiliza:
   ```bash
   npx cypress run
   ```

## Estructura del Proyecto
- **cypress/e2e**: Contiene los tests automatizados.
- **cypress/support/commands.js**: Incluye los comandos personalizados reutilizables.
- **cypress.config.js**: Archivo de configuración de Cypress.

## Autor
Proyecto desarrollado como parte de un trabajo final en QA Automation de XAcademy.
