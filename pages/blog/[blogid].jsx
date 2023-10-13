import Head from "next/head";
import React from "react";

const Blog = ({title,description}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">Article page</h1>
    </div>
  );
};

export default Blog;

export async function getServerSideProps(){
    return{
        props:{
            title:'article title',
            description:'article description',  

        }
    }
}