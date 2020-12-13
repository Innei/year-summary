import clsx from 'clsx'
import * as React from 'react'
import { Header } from '../components/header'
import { ScreenBase } from '../components/screen'
import { Copy } from '../copy'

import Analytics from 'analytics'
// @ts-ignore
import googleAnalytics from '@analytics/google-analytics'

import styles from './index.module.scss'

const BGM_URL =
  'https://api.i-meto.com/meting/api?server=netease&type=url&id=1428738823&auth=bc0de23bc13e9613d368530626b49d274d3ecc6c'

const analytics = Analytics({
  app: '2020',
  // @ts-ignore
  version: 100,
  plugins: [
    googleAnalytics({
      trackingId: 'G-WD2LTYCPB0',
    }),
  ],
})
analytics.page()
export const Index: React.FC = () => {
  const [isBottom, setBottom] = React.useState(false)
  const [isPlayed, setPlay] = React.useState(false)
  const [isStart, setStart] = React.useState(false)
  React.useEffect(() => {
    window.onscroll = () => {
      if (
        window.document.documentElement.scrollHeight -
          window.document.documentElement.scrollTop ===
        window.document.documentElement.clientHeight
      ) {
        if (!isBottom) {
          analytics.track('end', { time: new Date().toISOString() })
          setBottom(true)
        }
      } else {
        if (isBottom) {
          setBottom(false)
        }
      }
    }

    return () => {
      window.onscroll = null
    }
  }, [isBottom])
  const handleStart = React.useCallback(() => {
    if (!isStart) {
      analytics.track('start', {
        time: new Date().toISOString(),
      })
      if (!isPlayed) {
        setPlay(true)
        const audio = new Audio(BGM_URL)
        audio.loop = true
        audio.play()
      }
      setStart(true)
    }

    requestAnimationFrame(() => {
      window.scrollTo({
        top:
          window.document.documentElement.clientHeight < 600
            ? 600
            : window.document.documentElement.clientHeight,
        behavior: 'smooth',
      })
    })
  }, [isPlayed, isStart])
  return (
    <div className={clsx('wrapper', !isStart ? styles['overflow'] : null)}>
      <Header />

      <ScreenBase
        description={
          <>
            <p className={styles['home-text']}>春华秋实</p>
            <p className={styles['home-text']}>
              <button className={styles['start']} onClick={handleStart}>
                开始
              </button>
            </p>
          </>
        }
        title={'2020'}
      />

      {Copy.map((c, i) => {
        return <ScreenBase key={i} {...c} />
      })}

      <div className={clsx(styles['arrow'], isBottom ? styles['hide'] : null)}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-down"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          height="1.5rem"
          width="1.5rem"
        >
          <path
            fill="currentColor"
            d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
          ></path>
        </svg>
      </div>

      <div className={styles['tip']}>BGM: 陪伴 -- 邱有句</div>
    </div>
  )
}

export default Index
