import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
      <Link href="/users">
        <a style={linkStyle}>Users</a>
      </Link>
      <Link href="/clock">
        <a style={linkStyle}>Clock</a>
      </Link>
      <Link href="/post">
        <a style={linkStyle}>Post</a>
      </Link>
    </div>
  )
}
