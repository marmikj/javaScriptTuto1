import { useRouter } from "next/router";

const Product = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h2>
        {product.id} {product.title} {product.price}
      </h2>
      <p>{product.description}</p>
      <hr />
    </>
  );
};

export default Product;

export async function getStaticProps(context) {
    const { params } = context;
    console.log(`Regenerate product ${params.productid}`);
    const response = await fetch(
      `http://localhost:4000/products/${params.productid}`
    );
    const data = await response.json();
    //   if (!data.id) {
    //     return {
    //       notFound: true,
    //     };
    //   }
  
    return {
      props: {
        product: data,
      },
      revalidate: 10,
    };
  }

export async function getStaticPaths() {
  return {
    paths: [{ params: { productid: "1" } }],
    fallback: true,
  };
}
//   return {
//     // paths: [
//     //     {params: { postId: "1" }},
//     //     { params: { postId: "2" }},
//     //     { params: { postId: "3" } },

//     // ],
//     paths,
//     fallback: true,
//   };
// }


