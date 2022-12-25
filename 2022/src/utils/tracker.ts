export const trakcer = (label: string, action: string) => {
  ;(window as any).umami?.trackEvent(label, action)
}
