interface ICopy {
  title: string
  description: string | JSX.Element
}

export const Copy: ICopy[] = [
  {
    title: '特殊的一年',
    description: (
      <>
        <p>难忘的 2020 ，发生了太多未知，太多不可思议。</p>
        <p>突如其来的疫情，把很多计划都打乱了。</p>
        <p>在家困住的日子里，说不上无聊，只是呆久了，变得不想离开家了。</p>
        <p>返校之际，也是四月中旬了，上半年好像什么也没做成，便过去了。</p>
        <p>
          在这么特殊的一年，大家都没想到。只是能好好的活着，也不再奢求什么了。
        </p>
      </>
    ),
  },
  {
    title: '逃脱网课中的学习',
    description: (
      <>
        <p>
          没想到是，在大学期间还能在家体验远程教学。这也便更加方便的"逃课"了，每天借着大把上课的时间，学着跟课程一点干系都没有的东西。
        </p>
        <p>
          从 3 月开始，重新写一套
          <a href="https://github.com/mx-space" target={'_blank'}>
            自己的小窝
          </a>
          需要多长时间。在此期间，我先后的学习了
          NextJS、NestJS。花了一个半月的时间完成了一个比较能看的版本。
        </p>
      </>
    ),
  },

  {
    title: '学业 OR 工作',
    description: (
      <>
        <p>
          曾经我也羡慕别人，能在学生时代便有一份工作。能够自力更生，用自己的赚的钱买自己想要的东西。
        </p>
        <p>很幸运，能在今年正式入职一家公司，成了一名实习员工。</p>
        <p>年中，我也拥有了第一台 MacBook Pro，iPhone..</p>
        <p>也算是通过自己的努力实现了今年的愿望。</p>
      </>
    ),
  },

  {
    title: '未来 AND 憧憬',
    description: (
      <>
        <p>新的一年，发现更多美好，尝试更多未知。</p>
        <p>
          接下来的一年，更多未知等待着我。人生路很长，只不过是一个探索未知的过程。
        </p>
        <p>当然更想，遇到一个电波相近的 ta，摆脱心灵的孤独。</p>
        <p>
          希望新的开始，不必强加自己一个不必要的面具。在这短暂的青春里，应该享受当下。
        </p>
      </>
    ),
  },

  {
    title: '停下来，中场休息',
    description: (
      <>
        <p>偶尔摘下耳机，停下来，听听这个世界</p>
        <p>累了吗，合上电脑，看看外面的世界</p>
        <p>生活也不应该是永不止步的前进。</p>
      </>
    ),
  },
  {
    title: '寄语',
    description: (
      <>
        <p>陌生人，祝福你</p>
        <p>愿每一份付出，终有回报</p>
        <p>愿每一次努力，终有回响</p>
      </>
    ),
  },
  {
    title: 'To Be Continue.',
    description: (
      <>
        <p>余生还有很长 故事还要继续</p>
        <p>谢谢你，陌生人。</p>
      </>
    ),
  },
]