import { FC } from 'react'
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import TweenOne from 'rc-tween-one'
import * as React from 'react'
import styles from './index.module.scss'
import clsx from 'clsx'
import RcQueueAnim from 'rc-queue-anim'
const Section: FC<{ className?: string }> = (props) => {
  return (
    <ScrollOverPack playScale={0.3}>
      <TweenOne
        animation={{ y: 0, opacity: 1 }}
        key="1"
        style={{ transform: 'translateY(100px)', opacity: 0 }}
        className={clsx(styles['wrapper'], props.className)}
      >
        {/* <section className={clsx(styles['wrapper'], props.className)}> */}
        <RcQueueAnim delay={300} type={'bottom'}>
          {props.children}
        </RcQueueAnim>
        {/* </section> */}
      </TweenOne>
    </ScrollOverPack>
  )
}

interface ScreenBaseProps {
  title: string

  description?: string | JSX.Element
}
export const ScreenBase: FC<ScreenBaseProps> = (props) => {
  const { title, description } = props
  return (
    <div className={styles['root']}>
      <Section>
        <div className={styles['title']} key={'title'}>
          {title}
        </div>
        {description && (
          <div className={styles['description']} key={'desc'}>
            {description}
          </div>
        )}
      </Section>
    </div>
  )
}
