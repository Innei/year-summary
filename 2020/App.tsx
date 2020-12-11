import * as React from 'react'
import { Header } from './components/header'
import { ScreenBase } from './components/screen'

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />

      <ScreenBase />
      <ScreenBase />
      <ScreenBase />
      <ScreenBase />
      <ScreenBase />
    </div>
  )
}
