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
    color: "#84daf8",
    textDecoration: "underline"
  },
  "ul": {
    "margin-bottom": 0
  },
  "hr": {
    "background-color": "#f7be1e",
  },
  'blockquote': {
    'border-width': '.25rem',
    'border-color': "#fcc11d",
    'text-align': 'justify',
    'font-style': 'initial',
    'font-size': '1rem',
    color: '#84daf8'
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
