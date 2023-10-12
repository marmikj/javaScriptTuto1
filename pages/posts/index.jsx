function PostsList({ posts }) {
  return (
    <>
      <h1>posts Lists</h1>
      <br />
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h1>
              {post.id} {post.title}
            </h1>
            <hr />
          </div>
        );
      })}
    </>
  );
}
export default PostsList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {  
      posts: data,
    },
  };
}
