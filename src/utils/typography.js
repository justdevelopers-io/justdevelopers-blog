import Typography from 'typography'
import FairyGates from 'typography-theme-fairy-gates'

FairyGates.overrideThemeStyles = () => ({
  'a': {
    boxShadow: 'none',
    textDecoration: 'none',
    backgroundImage: 'none',
    textShadow: '1px 1px 1px black',
    color: "#fcc11d"
  },
  'a:hover': {
    color: "#00a6b2",
    textDecoration: "underline"
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
