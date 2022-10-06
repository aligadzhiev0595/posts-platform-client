# Pet-project Posts-App

## Build

```bash
git clone https://github.com/aligadzhiev0595/nextjs-post.git
cd nextjs-post - $ yarn install || npm i
cd client - $ yarn install || npm i
build script - $ yarn dev || npm dev  
```

## Project layout

```txt
nextjs-post/
├─ server/
│ ├─ models                  Mongo DB models
│ ├─ routes                  Routing
│ └─ server.js               Express configuration
│
├─ client/
│ ├─ styles                  CSS & Styled components
│ ├─ pages                   Next js pages
│ ├─ layout                  Next js layout
│ ├─ public                  Static files
│ ├─ interfaces              Typescript types
│ ├─ .prettierrc             Prettier config
│ ├─ .eslintrc               Eslint config
│ ├─ next.config             Next config
│ ├─ tsconfig                Typescript config
│ └─ package.json            NPM dependencies
│
└─ package.json              NPM dependencies
```

## Used libraries
```txt
├─ server/
│ ├─ concurrently: ^7.4.0
│ ├─ cors: ^2.8.5
│ ├─ mongoose: ^6.6.4
│ └─ nodemon: ^2.0.20
│
├─ client/
│ ├─ axios: ^1.0.0
│ ├─ next: ^12.2.5
│ ├─ react: ^1.0.0
│ ├─ react-dom: ^18.2.0
│ ├─ @types/node: 18.7.13
│ ├─ @types/react: 18.0.17
│ ├─ @types/react-dom: 18.0.6
│ ├─ @types/styled-components: ^5.1.26
│ ├─ @typescript-eslint/eslint-plugin: ^5.36.1
│ ├─ @typescript-eslint/parser: ^5.36.1
│ ├─ babel-plugin-styled-components: ^2.0.7
│ ├─ @typescript-eslint/eslint-plugin: ^5.36.1
│ ├─ eslint: 8.22.0
│ ├─ eslint-config-next: 12.2.5
│ ├─ eslint-config-prettier: ^8.5.0
│ ├─ eslint-plugin-prettier: ^4.2.1
│ ├─ eslint-plugin-react-hooks: ^4.6.0
│ ├─ prettier: ^2.7.1
│ ├─ sass: ^1.54.8
│ ├─ styled-components: ^5.3.5
│ └─ typescript": 4.8.2
```
