const phoneUpperBoundary = '600px'
const tabletPortraitUpperBoundary = '900px'
const tabletLandscapeUpperBoundary = '1200px'
const desktopUpperBoundary = '1800px'

export const phoneOnly = `max-width: ${phoneUpperBoundary - 1}`
export const tabletPortraitUp = `min-width: ${phoneUpperBoundary}`
export const tabletLandscapeUp = `min-width: ${tabletPortraitUpperBoundary}`
export const desktopUp = `max-width: ${tabletLandscapeUpperBoundary}`
export const bigDesktopUp = `max-width: ${desktopUpperBoundary}`
