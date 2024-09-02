export type Lang = "pt-BR" | "en-US";

const translations: Record<Lang, Record<string, string>> = {
  "pt-BR": {
    "Hello, my name is": "Olá, meu nome é",
    "Systems Analyst and Developer by Unileão.":
      "Analista e Desenvolvedor de Sistemas pela Unileão.",
    "I enjoy building scalable and well-structured web applications.":
      "Gosto de construir aplicações web escaláveis e bem estruturadas.",
    "I'm always learning and experimenting with new technologies.":
      "Estou sempre estudando e experimentando novas tecnologias.",
  },
  "en-US": {
    "Hello, my name is": "Hi, my name is",
    "Systems Analyst and Developer by Unileão.":
      "Systems Analyst and Developer by Unileão.",
    "I enjoy building scalable and well-structured web applications.":
      "I enjoy building scalable and well-structured web applications.",
    "I'm always learning and experimenting with new technologies.":
      "I'm always learning and experimenting with new technologies.",
  },
};

export default translations;
