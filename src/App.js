import Header from "./components/header";
import Banner from "./sections/banner";
import Brands from "./sections/brands";
import Faq from "./sections/faq";
import Footer from "./sections/footer";
import MaisonFrancis from "./sections/maison-francis";
import PerfumeShowcase from "./sections/perfume-showcase";
import TopProducts from "./sections/top-products";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Brands />
      <TopProducts />
      <MaisonFrancis />
      <PerfumeShowcase />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
