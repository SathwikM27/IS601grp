import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en"> {/* Add whichever language you want here */}
      <Head />
       <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"></link>
      <body style={{margin: 0, overflowX: 0}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}