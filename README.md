# ila_site

https://www.ilariamezzanotti.it/

Sito di Dott.ssa Ilaria Mezzanotti, Psicologa e Psicoterapeuta, costruito con [Astro](https://astro.build/) e Tailwind CSS.

## Comandi

Usa Node.js 24 LTS. Con Volta la versione 24.18.0 viene selezionata automaticamente dal pin in `package.json`; con nvm esegui `nvm use` (versione indicata in `.nvmrc`). Astro richiede almeno Node.js 22.23.4; anche la build Netlify usa Node.js 24.

| Comando           | Azione                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`      | Installa le dipendenze                        |
| `npm run dev`      | Avvia il server di sviluppo su `localhost:4321` |
| `npm run build`    | Compila il sito statico in `./dist/`          |
| `npm run preview`  | Anteprima della build in locale               |

## Stili

Gli stili della UI sono definiti con utility Tailwind nei componenti Astro. Colori, misure condivise, breakpoint e animazioni sono configurati in `tailwind.config.js`.

Tailwind 3 viene compilato con PostCSS, configurato in `postcss.config.cjs`.

`src/styles/global.css` contiene soltanto le direttive Tailwind. Non utilizzare file Sass/SCSS, blocchi `<style>` nei componenti o stili inline.
