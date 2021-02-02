import Link from 'next/link'
export default function Header() {
    return (

        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Server Side Blog</Link></li>
            <li><Link href="/static_blog">Static Side Blog</Link></li>
        </ul>

    )
  }
  