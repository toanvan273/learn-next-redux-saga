// import { useRouter } from 'next/router'
import Layout from '../components/MyLayout.js'

const Page = () => {
  // const router = useRouter()
  // console.log('r',router);
  
  return (
    <Layout>
      {/* <h1>{router.query}</h1> */}
      <p>POST PAGE.</p>
    </Layout>
  )
}

export default Page
