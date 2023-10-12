function ProductsList({ products }) {
  return (
    <>
      <h1>products Lists</h1>
      <br />
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>
              {product.id} {product.title} {product.price}
            </h2>
            <p>{product.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}
export default ProductsList;

export async function getStaticProps() {
  console.log("Genetrating /regenerated productlist ");
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
}
