import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sarah's Website</title>
        <meta name="description" content="I'm Sarah and I'm a better developer than Andrew" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Welcome to my website</div>
    </div>
  )
}