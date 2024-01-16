+ 1. Устанавливаем Next JS 14
+ 2. Устанавливаем Fastify 4
+ 3. Делаем страницу "characters" Персонажи в next js 14
+ 3.1. Внутри страницы fetch запрос на fastify 4
+ 3.2. /character/[id] страница конкретного персонажа по ID
3.3. Добавить SEO на главную, characters, character
+ 4. Fastify 4 возвращает ответ по URL 
  /characters/
+ 4.1. Установить TS Watcher

# Установка Next JS 14
npx create-next-app@latest

# Установка Fastify 4
fastify generate test --lang=ts && cd test && npm i