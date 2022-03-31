import { NextPage } from 'next';
import { Navbar } from '@components/Navbar';
import { Header } from '@components/Header';

const Custom404Page:NextPage = () => {
    return (
      <div className="">
        <div>
          <Navbar />
        </div>
        <div className="flex h-screen items-center justify-center">
          <p>Não encontrado... Ainda estou fazendo essa página, ou ela simplesmente não existe.</p>
        </div>
        <Header title="Não encontrado!" />
      </div>
    );
};

export default Custom404Page;