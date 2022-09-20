import '@styles/globals.css'
import { useMounted } from '@components/hooks';

function Application({ Component, pageProps }) {
  const { mounted } = useMounted()
  return mounted && <Component {...pageProps} />
}

export default Application
