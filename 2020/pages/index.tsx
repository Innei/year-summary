import * as React from 'react'
import { Header } from '../components/header'
import { ScreenBase } from '../components/screen'

export const Index: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />

      <ScreenBase description={'春华秋实'} title={'2020'} />
    </div>
  )
}

export default Index
