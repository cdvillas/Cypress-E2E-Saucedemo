# Proyecto Final - XAcademy QA Automation

## Descripción del Proyecto
El proyecto consiste en una suite de pruebas automatizadas para el sitio web [Saucedemo](https://www.saucedemo.com), diseñada en Cypress para validar el flujo de compras, desde el inicio de sesión hasta el logout, incluyendo la selección de productos, el checkout y la detección de defectos como imágenes inconsistentes, botones defectuosos y errores en el formulario de datos personales. Se emplearon comandos personalizados para optimizar la reutilización de código y mejorar la mantenibilidad del proyecto.

## Plantillas

- [Plantilla de Test Cases](https://docs.google.com/spreadsheets/d/1zfselTKga2F9IUxq742uJIJ8MIR7_4HCuaGPTQC_ji4/edit?usp=sharing): Enlace a la plantilla que se utiliza para documentar los casos de prueba.
- [Plantilla de Bug Report](https://docs.google.com/document/d/1QrmK7TmQx6zT8LHfEqiqWzxyGJ3ioWPFLaD3nXr_yfY/edit?usp=sharing): Enlace a la plantilla para registrar los bugs encontrados.
- [Tablero de Trello](https://trello.com/b/0MQgrT5d): Enlace al tablero de Trello que se utiliza para gestionar las tareas y el progreso del proyecto.
  
## Tecnologías Utilizadas

- **Cypress**: Framework para la automatización de pruebas E2E.
- **JavaScript**: Lenguaje de programación para escribir los tests.
- **Node.js**: Entorno para ejecutar Cypress.
- **Git**: Control de versiones para gestionar el proyecto.

## Cómo ejecutar el proyecto

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/cdvillas/Cypress-E2E-Saucedemo.git
   ```
2. **Navegar al directorio del proyecto**
```bash
cd Cypress-E2E-Saucedemo
```

3. **Instalar las dependencias**
   Asegúrate de tener [Node.js](https://nodejs.org/) instalado, luego ejecuta:
   ```bash
   npm install
   ```

4. **Abrir Cypress**
   Para abrir el entorno interactivo de Cypress, ejecuta:
   ```bash
   npx cypress open
   ```

5. **Ejecutar las pruebas en modo headless**
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
