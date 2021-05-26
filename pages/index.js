import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BongoCat from '../components/bongo-cat'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sarah's Website</title>
        <meta name="description" content="I'm Sarah and I'm a better developer than Andrew" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Welcome to my website</div>
      <BongoCat width="40%" height="40%"/>
    </div>
  )
}