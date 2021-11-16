import NavBar from "./components/Layout/NavBar";
import ItemListContainter from "./components/ItemList/ItemListContainter";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import HomeContent from "./components/Layout/HomeContent";
import CartContainer from "./components/Cart/CartContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import "./styles/App.css";
import { Crud } from "./components/Admin/Crud";

function App() {
  const storeInfo = {
    storeName: "Infotech",
    categories: [
      { id: 1, title: "Computadoras", link: "/computers", category: "computers" },
      { id: 2, title: "Laptops", link: "/laptops", category:"laptops" },
      { id: 3, title: "Monitores", link: "/monitors", category:"monitors" },
      { id: 4, title: "Accesorios", link: "/accesories", category:"accesories" },
    ],
  };

  return (
    <>
      <NavBar storeInfo={ storeInfo } />
      <Switch>
        <Route exact path="/">
          <HomeContent />
        </Route>
        <Route exact path="/admin">
          <Crud />
        </Route>
        <Route exact path="/cart">
          <CartContainer />
        </Route>

        {storeInfo.categories.map((elem, idx) => (
          <Route exact path={elem.link} key={idx}>
            <ItemListContainter data={[elem.category, elem.title]} />
          </Route>
        ))}

        {storeInfo.categories.map((elem, idx) => (
          <Route path={`${elem.link}/:itemID`} key={idx}>
            <ItemDetailContainer />
          </Route>
        ))}

        <Route exact path="/buy">
          <>Confirmación</>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
