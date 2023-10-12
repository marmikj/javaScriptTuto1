

function Category ({articles,category})  {
  return (
    <>
        <h1>Showing news for <i>{category}</i></h1>
        <br /><br />
        {
            articles.map((article)=>{
                return(
                    <div key={article.id}>
                        <h2>{article.id} {article.title}</h2>
                        <p>{article.description}</p>
                        <hr/>
                    </div>
                )
            })
        }
    </>
  )
}

export default Category

export async function getServerSideProps(context){
    const {params,req,res,query}=context
    console.log(query)
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie',['name=marmik'])
    const {category}=params
    const response  = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()
    console.log(`pre-renderning new article for category ${category}`)
    return {
        props:{
            articles:data,
            category,           
        }
    }

}