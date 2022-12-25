import { Markdown } from './components/markdown'
import { Comment } from './components/comment'
import './typora-lark.css'
import styles from './app.module.css'
function App() {
  return (
    <div class={styles.app} id="write">
      <Markdown />

      <Comment />
    </div>
  )
}

export default App
