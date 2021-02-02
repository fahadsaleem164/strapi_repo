import Header from '../components/header'

export default function  StaticBlog ({data}){
    console.log(data)
    return( <>
        <Header/>
        <h1>Static Pages</h1>
        <div style={{margin: "auto" , width: "50%" , padding: "10px"  }} >
               { data.map((blogData,index)=>(
                   <>
                    <h1>{blogData.title}</h1>
                    <p>{blogData.description}</p>
                    </>
                 ))} 

        </div>
        </>
    )
}

export async function getStaticProps(context) {

    const res = await fetch('https://nameless-beyond-16486.herokuapp.com/blogs')
    const data = await res.json()
    console.log(data)
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        data
      }, // will be passed to the page component as props
    }
  }