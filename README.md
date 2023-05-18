# Rick and Morty Project

![Rick and Morty Project](./src/assets/logo.png)

The Rick and Morty project is a web application built with React and Redux, designed to provide information about the characters from the popular TV show. This README file provides an overview of the project, installation instructions, usage guidelines, and a list of dependencies.

## Features

- View a list of characters with details such as name, image, status, and species.
- Search functionality to find specific characters
- Filter the search result and the character list 
- Responsive design for seamless user experience across devices.
- Explore episodes and their associated information, including air date and episode number inside every character.

## Installation

To set up the project locally, please follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/the-moezzat/rick-and-morty.git
   ```

2. Navigate to the project directory:

   ```bash
   cd rick-and-morty
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

After the installation process is complete, you can use the following npm scripts to work with the project:

- Start the development server:

  ```bash
  npm run dev
  ```

  This command launches the development server using Vite, which provides a hot-reloading development environment. The application will be accessible at `http://localhost:3000`.

- Build the project for production:

  ```bash
  npm run build
  ```

  This command builds the project for production using TypeScript and Vite. The output will be located in the `dist` directory.

- Lint the source code:

  ```bash
  npm run lint
  ```

  This command runs ESLint on the source code, enforcing coding conventions and identifying potential issues.

- Preview the production build:

  ```bash
  npm run preview
  ```

  This command allows you to preview the production build locally using Vite. It provides a server to serve the optimized build, allowing you to verify the application before deployment.

- Run tests:

  ```bash
  npm test
  ```

  This command runs the tests for the project, ensuring that the application functions as expected.

- Generate test coverage report:

  ```bash
  npm run coverage
  ```

  This command generates a test coverage report using vitest, providing insights into the test coverage of the project.

## Dependencies

The project relies on the following dependencies:

- **@emotion/react**: Provides utilities for styling React components using Emotion.
- **@emotion/styled**: Integrates Emotion with styled components in React.
- **@mui/material**: Material-UI component library for React, offering pre-built UI components.
- **@phosphor-icons/react**: A collection of icons for React applications, providing visual elements for enhanced user experience.
- **@reduxjs/toolkit**: Redux utility library for efficient state management, simplifying common Redux patterns.
- **react**: JavaScript library for building user interfaces, serving as the foundation for the project.
- **react-dom**: Entry point to the React DOM package for rendering React components into the DOM.
- **react-redux**: Official Redux bindings for React, enabling seamless integration between React and Redux.
- **react-router-dom**: DOM bindings for React Router, a declarative routing solution for React applications.

## Development Dependencies

The project utilizes the following development dependencies:

- **@testing-library/jest-dom**: Custom Jest matchers for testing DOM elements, facilitating UI testing.
- **@testing-library/react**: Testing utilities

for React components, aiding in component testing.
- **@testing-library/user-event**: Simulates user events for testing purposes, enabling user interaction testing.
- **@types/react**: TypeScript type definitions for React, enhancing type safety and IntelliSense support.
- **@types/react-dom**: TypeScript type definitions for React DOM, improving type safety and IntelliSense support.
- **@typescript-eslint/eslint-plugin**: ESLint plugin for TypeScript, enforcing consistent code standards and best practices.
- **@typescript-eslint/parser**: ESLint parser for TypeScript, enabling linting and static analysis of TypeScript code.
- **@vitejs/plugin-react**: Vite plugin for React integration, optimizing the development experience for React applications.
- **@vitest/coverage-c8**: Code coverage generator for vitest, providing insights into the test coverage of the project.
- **eslint**: Linter tool for identifying and reporting JavaScript code issues, improving code quality and maintainability.
- **eslint-plugin-react-hooks**: ESLint plugin for enforcing rules of React Hooks, ensuring proper usage of hooks.
- **eslint-plugin-react-refresh**: ESLint plugin for supporting React Fast Refresh, aiding in development efficiency.
- **intersection-observer**: Polyfill for the Intersection Observer API, ensuring cross-browser compatibility.
- **jsdom**: A JavaScript implementation of the W3C DOM, facilitating DOM-related testing in Node.js.
- **msw**: Mock Service Worker for intercepting and mocking HTTP requests, aiding in testing and development.
- **ts-jest**: TypeScript preprocessor for Jest, enabling Jest to work seamlessly with TypeScript code.
- **typescript**: TypeScript language compiler, allowing the use of TypeScript in the project.
- **vite**: Web development build tool that serves as a development server and bundler, optimizing the development experience.
- **vitest**: Testing framework for Vite applications, simplifying the testing process.

## Contact

For any inquiries or suggestions, please contact the project maintainer: [dev.moezzat@gmail.com](mailto:dev.moezzat@gmail.com).