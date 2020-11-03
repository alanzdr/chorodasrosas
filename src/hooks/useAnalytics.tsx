import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Analytics from 'react-ga';

const TRACKING_ID = 'G-X6CQH7YMH7';

type AnalyticsHook = () => void

const useAnalytics : AnalyticsHook = () => {
  const router = useRouter();

  useEffect(() => {
    Analytics.initialize(TRACKING_ID);
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      Analytics.pageview(window.location.pathname);
    }
    console.log(`navigate to ${router.asPath}`)
  }, [router.asPath])
  
}

export default useAnalytics;