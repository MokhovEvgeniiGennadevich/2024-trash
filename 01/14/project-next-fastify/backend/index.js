"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const server = (0, fastify_1.default)();
server.get("/ping", (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
    return "pong 25\n";
}));
server.get("/characters", (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
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
    return characters;
}));
server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
