import { FC } from 'react'
import * as React from 'react'
import styles from './index.module.scss'

interface ScreenBaseProps {}
export const ScreenBase: FC<ScreenBaseProps> = (props) => {
  return <div className={styles['root']}></div>
}
