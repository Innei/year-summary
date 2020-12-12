import { FC } from 'react'
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import TweenOne from 'rc-tween-one'
import * as React from 'react'
import styles from './index.module.scss'
import clsx from 'clsx'
const Section: FC<{ className?: string }> = (props) => {
  return (
    <ScrollOverPack playScale={0.3}>
      <TweenOne
        animation={{ y: 0, opacity: 1 }}
        key="1"
        style={{ transform: 'translateY(100px)', opacity: 0 }}
      >
        <section className={clsx(styles['wrapper'], props.className)}>
          {props.children}
        </section>
      </TweenOne>
    </ScrollOverPack>
  )
}

interface ScreenBaseProps {
  title: string

  description: string
}
export const ScreenBase: FC<ScreenBaseProps> = (props) => {
  const { title, description } = props
  return (
    <div className={styles['root']}>
      <Section>
        <div className={styles['title']}>{title}</div>
        <div className={styles['description']}>{description}</div>
      </Section>
    </div>
  )
}
