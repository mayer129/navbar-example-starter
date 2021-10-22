import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Home Page</h1>
      </main>
      <style jsx>{`
        .page {
          height: 100%;
        }
        main {
          height: 1000px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #1d3557;
        }
      `}</style>

    </div>
  )
}
