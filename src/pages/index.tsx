import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <main>
        <h1>ここはトップページです</h1>
      </main>
    </div>
  );
}

export default Home
