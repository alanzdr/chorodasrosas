import useAnalytics from 'hooks/useAnalytics'
import 'styles/global.css'

function MyApp({ Component, pageProps }) {
  useAnalytics();
  return <Component {...pageProps} />
}

export default MyApp
