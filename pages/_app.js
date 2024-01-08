import '@/styles/globals.css'
import { Mulish } from 'next/font/google'
import { Source_Code_Pro } from 'next/font/google'

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400','700'],
})

const SourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400','700'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={mulish.className}>
      <Component {...pageProps} />
    </main>
  )
}
