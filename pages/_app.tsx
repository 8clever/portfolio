import type { AppProps } from 'next/app'
import "../src/style/style.scss";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App;