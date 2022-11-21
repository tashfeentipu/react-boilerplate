import './App.css';
import Footer from "./Containers/Footer";
import Header from "./Containers/Header";
import { BrowserRouter } from "react-router-dom";
import RoutesImport from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesImport />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
