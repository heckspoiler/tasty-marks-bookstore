import ShopNav from "../../components/ShopNav";

export const metadata = {
  title: "Tasty Marks Bookstore Shop Page",
  description:
    "Shop Page for our Design Books for Designers, Historians and Pretenders",
};

const ShopLayout = ({ children }) => {
  return (
    <div>
      <ShopNav />
      {children}
    </div>
  );
};

export default ShopLayout;
