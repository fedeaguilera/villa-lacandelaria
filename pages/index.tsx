import type { NextPage } from 'next'
import Header from '../components/index/header/Header'
import Gallery from '../components/index/main/gallery/Gallery'
import Hero from '../components/index/main/hero/Hero'
import Introduction from '../components/index/main/presentation/Introduction'
import Around from '../components/index/main/around/Around'


const Home: NextPage = () => {
  return (
    <main className=" min-h-screen ">
      <Header/>
     <Hero/>
     <Introduction/>
     <Gallery/>
     <Around/>

    </main>
  )
}

export default Home
