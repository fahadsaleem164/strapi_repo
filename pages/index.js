import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../components/header'

export default function Home() {
  return (
    <div className={styles.container}>
        <Header/>
      {/* <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blog">Server Side Blog</Link></li>
        <li><Link href="/static_blog">Static Side Blog</Link></li>
        
      </ul> */}



    </div>
  )
}
