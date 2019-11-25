const state = {
  viewport: null
}

const actions = {
  updateViewport({ state }) {
    state.viewport = {
      w: window.innerWidth,
      h: window.innerHeight,
      is568: window.innerWidth <= 568,
      is768: window.innerWidth <= 768,
      is1024: window.innerWidth <= 1024
    }
  }
}

export default { state, actions }
