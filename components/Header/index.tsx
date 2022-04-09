import type { FC } from "react";
import Head from "next/head";
interface IProps {
  title: string;
}
export const Header: FC<IProps> = function ({ title }) {
  return (
    <Head>
      <title>{title}.</title>
      <meta name="description" content="TESTE" />
      <link rel="icon" href="/icon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="title" content="Yuri Cunha" />
      <meta name="description" content="TESTE" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://garotogordo.codes/" />
      <meta property="og:title" content="Yuri Cunha | " />
      <meta
        property="og:description"
        content="Eu sou um Administrador de Banco de Dados e Programador Backend com 3 anos de experiencia.
E um simples estudante que gasta todo o seu tempo livre fazendo projetos/sites/softwares/query's open-source."
      />
      <meta property="og:image" content="https://garotogordo.codes/icon.png" />
      <meta property="theme-color" content="#d6cdf9" />

      <meta property="twitter:url" content="https://garotogordo.codes/" />
      <meta property="twitter:title" content="https://garotogordo.codes/" />
      <meta
        property="twitter:description"
        content="Eu sou um Administrador de Banco de Dados e Programador Backend com 3 anos de experiencia.
E um simples estudante que gasta todo o seu tempo livre fazendo projetos/sites/softwares/query's open-source."
      />
      <meta
        property="twitter:image"
        content="https://garotogordo.codes/icon.png"
      />
      <meta property="twitter:domain" content="https://garotogordo.codes/" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};
