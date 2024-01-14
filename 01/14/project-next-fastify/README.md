+ 1. Устанавливаем Next JS 14
+ 2. Устанавливаем Fastify 4
+ 3. Делаем страницу "characters" Персонажи в next js 14
+ 3.1. Внутри страницы fetch запрос на fastify 4
+ 3.2. /character/[id] страница конкретного персонажа по ID
+ 4. Fastify 4 возвращает ответ по URL 
  /characters/
+ 4.1. Установить TS Watcher


npx create-next-app@latest

npm i fastify
npm i -D typescript @types/node

{
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "start": "node index.js"
  }
}

npx tsc --init