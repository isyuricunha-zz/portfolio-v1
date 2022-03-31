import { Main } from "@components/Main";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";

const Home = () => {
  return (
      <div>
        <Header title="Yuri Cunha"/>
        <Navbar />
        <Main />
        <Footer />
      </div>
  );
};

export default Home;
