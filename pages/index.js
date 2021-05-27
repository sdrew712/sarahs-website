import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BongoCat from '../components/bongo-cat'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head> 
        <title>
          Sarah's Website
          </title>
        <meta name="description" content="I'm Sarah and I'm a better developer than Andrew" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1>Welcome to my website!</h1>
      <p id="one">I'm Sarah Drew, a developer from the bEast Coast. Here you can find all of my creative projects.</p>
      <p id="two">Kick back and have a look around!</p>
      <BongoCat width="40%" height="40%"/>
    </div>
  )
}