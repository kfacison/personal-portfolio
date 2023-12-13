import { Html, Head, Main, NextScript } from 'next/document'
import NavBar from '@/components/NavBar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* page layout that effects ALL urls can be placed here */}
      <NavBar />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
