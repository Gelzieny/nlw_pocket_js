import fastify from "fastify";
import dotenv from "dotenv";

// Carrega as variáveis do .env para o process.env
dotenv.config();

const app = fastify()

const port = process.env.PORT || 3333;

app.listen({
    port: Number(port),
}).then(() => {
    console.log(`🚀 HTTP server rodando na porta ${port} 🚀`);
});