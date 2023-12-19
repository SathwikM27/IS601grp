import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en"> {/* Add whichever language you want here */}
      <Head />
      <body style={{margin: 0}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}