import { Html, Head, Main, NextScript } from 'next/document'
import NavBar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Ask.fm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}