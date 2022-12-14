# Tailwind CSS

## Configurando o tailwind CSS no projeto

- No terminal :

        npm install -D tailwindcss postcss autoprefixer

        npx tailwindcss init -p

- Editar o arquivo tailwind.config.js

        substituir content por: content: ["./src/**/*.tsx"],

- Criar arquivo global.css e adicionar nele:

        @tailwind base;
        @tailwind components;
        @tailwind utilities;

- No arquivo main.tsx:

        importar o arquivo global.css

### Usar font externa do Google fonts (Exemplo Font Lato)

- No arquivo global.css

        adicionar no começo:
        @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap');

        adicionar ao body:
        @apply font-Inter

- No arquivo tailwind.config.js

        adicionar no theme.extend:
        fontFamily: { Inter: ['Inter'], },

### Usar dark mode manual com Tailwind CSS, obs: Tailwind tem suporte automático a temas

- No arquivo tailwind.config.js

        adicionar no module.exports:
        darkMode: 'class',

- Na tag html da página web:

        precisa adicionar a classe dark exemplo:
        modo dark: <html lang="en" class="dark">...</html>
        modo light: <html lang="en">...</html>

- Nas estilizações de componentes:

        adicionar a variante dark exemplo:
        <div class="bg-white dark:bg-zinc-900">...</div>
