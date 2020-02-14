// import Link from 'next/link'
import routes from '../routes'
const linkStyle = {
  marginRight: 15
}
const {Link} = routes
export default function Header() {
  // console.log('router :',routes);
  
  return (
    <div>
      <Link route="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link route="/about">
        <a style={linkStyle}>About</a>
      </Link>
      <Link route="/users">
        <a style={linkStyle}>Users</a>
      </Link>
      <Link route="/clock">
        <a style={linkStyle}>Clock</a>
      </Link>
      <Link route="/post">
        <a style={linkStyle}>Post</a>
      </Link>
    </div>
  )
}
