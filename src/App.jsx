import { useDispatch, useSelector } from "react-redux";
import MenuGrid from "./components/MenuGrid";
import MenuSection from "./components/MenuSection";
import "./styles/main.scss";
import { getMenuData } from "./store/thunks/menuThunks";
import { useEffect } from "react";
import ProductDetail from "./components/ProductDetail";

function App() {
  const dispatch = useDispatch();
  const { menuItems, status, selectedProduct, isModalOpen } = useSelector(
    (state) => state.menu
  );

  useEffect(() => {
    dispatch(getMenuData());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Something went wrong</p>;

  return (
    <main className="container">
      <MenuSection />
      {isModalOpen && <ProductDetail product={selectedProduct} />}
      {menuItems &&
        menuItems.map((item) => (
          <MenuGrid
            key={item.id}
            sectionTitle={item.name[0].value}
            items={item.menuItems}
          />
        ))}
    </main>
  );
}

export default App;
