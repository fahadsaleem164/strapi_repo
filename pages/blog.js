
import Header from '../components/header'

export default function  Blog ({data}){
    console.log(data)
    return(
        <>
        <Header/>
        <h1>Server Side Pages</h1>
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

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://nameless-beyond-16486.herokuapp.com/blogs')
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
  }
  
