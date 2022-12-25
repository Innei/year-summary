import article from '../assets/2022.md?raw'
import { marked } from 'marked'
export const Markdown = () => {
  const html = marked(article)

  return <div innerHTML={html}></div>
}
