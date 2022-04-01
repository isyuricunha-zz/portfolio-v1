export const CONFIG = {
  MAINPROJECTS: [
    {
      title: "[Teste] Reponse App",
      description: "A new way to chat with your communities and friends.",
      role: "Founder & Front-End Developer",
      what: "I founded Reponse back in 2021 to make comminication more easy than ever!",
      img: "/projects/reponse.png",
      linkto: "https://reponse.app",
    },
    {
      title: "[Teste] CodAre",
      description: "A Discord server for coding community.",
      role: "Support Team & Staff",
      what: "I joined the CodAre's support team in 2020 and it was best decision in my life.",
      img: "/projects/codare.jpg",
      linkto: "https://codare.fun",
    },
    {
      title: "[Teste] RepeatPay",
      description: "Innovative payment solution for your websites.",
      role: "Founder & Developer",
      what: "I founded RepeatPay back in 2021 to make open-source donating app for your donate pages and etc..",
      img: "/projects/repeatpay.png",
      linkto: "https://repeatpay.ga",
    },
  ] as MAINPROJECTS[],

  SIDEPROJECTS: [
    {
      title: "[Teste] projeto-portfolio",
      description:
        "🎄 A simple portfolio website made by using React (this website <3)",
      img: "/projects/v1.png",
      linkto: "projeto-portfolio",
      view: "https://garotogordo.codes/",
      mode: "1",
    },
    {
      title: "[Teste] v2",
      description:
        "🎄 A simple portfolio website made by using React (this website <3)",
      img: "/projects/v1.png",
      linkto: "v1",
      view: "https://garotogordo.codes/",
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
