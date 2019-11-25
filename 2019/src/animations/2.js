import { TimelineMax, Power2 } from 'gsap'

export default {
  tl: null,
  build() {
    this.tl = new TimelineMax({ paused: true })

    this.tl
      .addLabel('start', 0)
      .to(
        '#three #body',
        2,
        {
          transformOrigin: '50% 75%',
          scale: 1.05,
          yPercent: -2,
          ease: Power2.easeInOut,
          repeat: -1,
          yoyo: true
        },
        'start'
      )
      .to(
        '#three #right-hand, .hand-fill.r',
        2,
        {
          xPercent: 5,
          yoyo: true,
          repeat: -1,
          ease: Power2.easeInOut
        },
        'start'
      )
      .to(
        '#three #left-hand, #three #right-hand, .hand-fill',
        1.5,
        {
          rotationZ: 5,
          transformOrigin: '90% 0%',
          repeat: -1,
          yoyo: true,
          ease: Power2.easeInOut
        },
        'start'
      )
  },
  play() {
    if (this.tl !== null) this.tl.play(0, false)
  },
  stop() {
    if (this.tl !== null) this.tl.pause(0, false)
  }
}
