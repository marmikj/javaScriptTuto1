function NewsArticleList({ articles }) {
  return (
    <>
      <h1>list of Article</h1>
      <br />
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title} | {article.category}
            </h2>
          </div>
        );
      })}
    </>
  );
}
export default NewsArticleList;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  console.log('pre-rendering news article list')
  return {
    props: {
      articles: data,
    },
  };
}
