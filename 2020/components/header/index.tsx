import * as React from 'react'
import styles from './index.module.scss'

export const Header: React.FC = () => {
  return (
    <div className={styles['header']}>
      <h1 className={styles['title']}>
        <span className={styles['year']}>2020</span> · 春华秋实
      </h1>
    </div>
  )
}
