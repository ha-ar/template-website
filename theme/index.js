import { useMemo } from 'react'
// @mui
import { CssBaseline } from '@mui/material'
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles'
import PropTypes from 'prop-types'

// components
import customShadows from './customShadows'
import GlobalStyles from './globalStyles'
import componentsOverride from './overrides'
//
import palette from './palette'
import shadows from './shadows'
import typography from './typography'

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
}

const themeMode = 'dark'
const themeDirection = 'ltr'

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette: palette(themeMode),
      typography,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: shadows(themeMode),
      customShadows: customShadows(themeMode),
    }),
    [themeDirection, themeMode],
  )

  const theme = createTheme(themeOptions)

  theme.components = componentsOverride(theme)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
