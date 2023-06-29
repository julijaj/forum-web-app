import { Html, Head, Main, NextScript } from 'next/document'
import NavBar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Trips</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="global-container">
          <NavBar />
          <Main />
          <Footer />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}