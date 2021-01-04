import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ga } from 'react-ga';
import 'styles/global.css'

function MyApp({ Component, pageProps }) { 
  const router = useRouter();
  
  useEffect(() => {
    if ('gtag' in window) {
      window.gtag('event', 'page_view', {
        page_path: router.asPath
      })
    }
    console.log(`navigate to ${router.asPath}`)
  }, [router.asPath])

  return <Component {...pageProps} />
}

export default MyApp
