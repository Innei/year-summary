import 'virtual:windi.css'
import React from 'preact'
import { render } from 'preact'
import { Background } from './background'
import { useEffect, useState } from 'preact/hooks'
const $app = document.getElementById('app')!
import './index.css'
render(<App />, $app)

function App() {
  const [years, setYears] = useState([] as { name: string; year: number }[])

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('/year.json')
      .then((res) => res.text())
      .then((jsonText) => {
        console.log(jsonText)

        const years = JSON.parse(jsonText)
        setYears(years)
        setLoading(false)
      })
  }, [])

  const Inner = (
    <div class="relative z-10 flex-col flex min-h-screen items-center justify-center">
      <h1 class="text-3xl font-medium animate-fill-both animate-repeat-2 animate-bounce">
        Year Summaries
      </h1>
      <ul class="mt-6 animate-fade-in-up animate-fill-both animate-repeat-1 animate-duration-1200 animate-delay-200">
        {years.map(({ year, name }) => (
          <li key={year}>
            <a
              href={`https://year.innei.ren/${year}`}
              class="inline-block hover:text-opacity-80 ease-in-out text-black transition-all transform hover:translate-x-2 tabular-nums"
            >
              {year} - {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
  return (
    <>
      <Background></Background>
      {loading ? (
        <p class=" h-screen m-auto flex items-center justify-center animate-bounce-in text-2xl relative z-10">
          Loading...
        </p>
      ) : (
        Inner
      )}
    </>
  )
}
