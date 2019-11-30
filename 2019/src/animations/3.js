import { TimelineMax, Power2 } from 'gsap'

export default {
  tl: null,
  build() {
    this.tl = new TimelineMax({ paused: true })

    this.tl.addLabel('start', 0).to(
      '#wave',
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
  },
  play() {
    if (this.tl !== null) this.tl.play(0, false)
  },
  stop() {
    if (this.tl !== null) this.tl.pause(0, false)
  }
}
