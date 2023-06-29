import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from 'src/components/navbar/navbar'
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
          <Navbar />
          <Main />
          <Footer />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}