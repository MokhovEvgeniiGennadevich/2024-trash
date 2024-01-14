import fastify from "fastify";

const server = fastify();

server.get("/ping", async (request, reply) => {
  return "pong 25\n";
});

// Запросы в PostgreSQL с помощью Fastify

server.get("/characters", async (request, reply) => {
  const characters = [
    {
      id: "4fa5d73e-05fb-422b-887c-9e957e4b1890",
      name: "Link",
      description: "The Link description",
      image: "link.PNG",
    },
    {
      id: "eb510c16-73d4-4204-99bc-b96377a1d514",
      name: "Zelda",
      description: "The Zelda description",
      image: "zelda.PNG",
    },
    {
      id: "ee5da13e-62ac-4950-9f68-0d700c05e576",
      name: "Ganon",
      description: "The Ganon description",
      image: "ganon.PNG",
    },
  ];

  // Рандомизируем возвращаемый результат ошибка или данные

  return characters;
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
