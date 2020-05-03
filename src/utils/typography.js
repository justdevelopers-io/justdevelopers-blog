import Typography from 'typography'
import FairyGates from 'typography-theme-fairy-gates'


FairyGates.overrideThemeStyles = () => ({
  'h1, h2, h3, h4 , h5, h6': {
    color: 'inherit',
  }
})

delete FairyGates.googleFonts

const typography = new Typography(FairyGates)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
