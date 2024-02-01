import "./App.css";
import Footer from "./components/Footer";
import Promotion from "./components/content/Promotion";
import Header from "./components/header/Header";
import MainContent from "./components/content/MainContent";

export default function App() {
  return (
    <>
      <Header />
      <Promotion />
      <MainContent />
      <Footer />
    </>
  );
}
