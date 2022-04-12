export const CONFIG = {
  MAINPROJECTS: [
    {
      title: "Dongdedi: Song Dedication",
      description:
        "Um serviço gratuito de dedicação de música adequado para casamentos, festas ou qualquer evento.",
      role: "Fundador e dbA",
      what: "Aqui você pode enviar o link para as pessoas te dedicarem músicas. E, elas podem até subir arquivos em mp3!",
      img: "/projects/songdedi.jpg",
      linkto: "https://songdedi-admin.herokuapp.com/",
    },
    {
      title: "Comunidade DEV",
      description:
        "Servidor do Discord para a comunidade de desenvolvedores e entusiastas da tecnologia.",
      role: "Fundador",
      what: "A ideia é montar um servidor aonde todos os desenvolvedores, estudantes e entusiastas possam trocar conhecimentos.",
      img: "/projects/comunidade-dev.png",
      linkto: "https://discord.gg/qCXfvFxpAC",
    },
    {
      title: "Leonardo Vargas",
      description:
        "Servidor do Discord para a comunidade de desenvolvedores e entusiastas da tecnologia.",
      role: "Moderador e dbA",
      what: "A ideia é montar um servidor aonde todos os desenvolvedores, estudantes e entusiastas possam trocar conhecimentos.",
      img: "/projects/community-dev.jpg",
      linkto: "https://discord.gg/JPS2bY6GVy",
    },
  ] as MAINPROJECTS[],

  SIDEPROJECTS: [
    {
      title: "GitHub Auto Unfollow e Follow",
      description: "Um bot para seguir e deixar de seguir pessoas do GitHub.",
      img: "/projects/follow_unfollow.png",
      linkto: "Auto-Github-Follow-e-Unfollow",
      view: "https://github.com/isyuricunha/Auto-Github-Follow-e-Unfollo",
      mode: "1",
    },
    {
      title: "LinkedIn Auto Unfollow",
      description:
        "Esse script dá unfollow em todos os seus amigos, páginas e/ou empresas.",
      img: "/projects/linkedin-script.jpg",
      linkto: "linkedin-mass-unfollow",
      view: "Auto-Github-Follow-e-Unfollo",
      mode: "1",
    },
  ] as SIDEPROJECTS[],
};

interface MAINPROJECTS {
  title: string;
  description: string;
  role: string;
  what: string;
  img: string;
  linkto: string;
}

interface SIDEPROJECTS {
  title: string;
  description: string;
  img: string;
  linkto: string;
  view: string;
  mode: string;
}
