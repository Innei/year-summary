import { trakcer } from '../utils/tracker'

export const Comment = () => {
  return (
    <p style={{ 'text-align': 'right' }}>
      <a
        href="https://innei.ren/notes/136#comments"
        onclick={() => {
          trakcer('to-comment', 'click')
        }}
      >
        看完了？说点什么。
      </a>
    </p>
  )
}
