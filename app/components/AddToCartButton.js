import styles from "./AddToCartButton.module.css";

const AddToCartButton = () => {
  const addToCart = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Hurensohn");
  };

  return (
    <button className={styles.addCartButton} onClick={addToCart}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
