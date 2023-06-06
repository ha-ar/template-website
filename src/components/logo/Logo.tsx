import React, { forwardRef } from 'react'
import { Box, Link } from '@mui/material'
// @mui
import { useTheme } from '@mui/material/styles'
// next
import NextLink from 'next/link'
import PropTypes from 'prop-types'

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const theme = useTheme()

  const PRIMARY_LIGHT = theme.palette.primary.light

  const PRIMARY_MAIN = theme.palette.primary.main

  const PRIMARY_DARK = theme.palette.primary.dark

  // OR using local (public folder)
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo_single.svg" => your path
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 40,
        height: 40,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>

          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>

        <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
          <path
            fill="url(#BG1)"
            d="M870 3874 c-47 -13 -116 -29 -154 -34 -130 -19 -178 -65 -196 -187 -4 -32 -35 -163 -69 -291 -34 -128 -61 -242 -61 -255 0 -37 -57 -239 -72 -252 -7 -7 -40 -27 -73 -45 -70 -39 -106 -61 -121 -75 -6 -6 -32 -22 -57 -35 -39 -21 -46 -29 -51 -63 -7 -40 12 -77 38 -77 6 0 38 -28 71 -62 33 -35 69 -68 79 -74 19 -10 19 -16 -28 -205 -26 -107 -68 -272 -92 -366 -41 -156 -44 -177 -33 -215 15 -56 94 -205 128 -243 16 -16 54 -66 86 -109 l59 -79 13 54 c17 76 17 79 -28 129 -22 25 -47 59 -55 75 -7 17 -28 46 -44 65 -58 67 -58 78 -2 308 28 114 69 285 91 381 l42 174 -87 81 c-48 44 -95 87 -105 94 -11 7 -19 16 -19 20 0 4 29 23 65 42 36 19 65 38 65 43 0 4 6 7 14 7 8 0 31 10 52 23 121 72 105 43 164 292 17 72 56 231 87 355 31 124 59 243 63 265 13 81 44 102 199 141 52 13 95 25 96 26 4 6 35 102 35 110 0 10 -1 10 -100 -18z"
          />
          <path
            fill="url(#BG2)"
            d="M4806 3879 c-3 -8 -10 -36 -16 -63 -11 -52 -11 -53 48 -115 12 -14 29 -39 38 -56 8 -18 24 -42 34 -53 30 -32 60 -85 60 -107 1 -19 -47 -226 -140 -610 l-39 -160 107 -103 c124 -121 128 -102 -43 -188 -62 -31 -122 -64 -134 -73 -16 -12 -31 -54 -61 -166 -22 -83 -44 -175 -49 -205 -4 -30 -34 -154 -66 -275 -32 -121 -60 -231 -63 -245 -10 -52 -46 -74 -186 -110 l-99 -25 -19 -54 c-10 -30 -16 -56 -14 -59 3 -2 62 12 131 32 70 20 139 36 153 36 75 1 146 64 157 140 3 19 34 159 71 310 36 151 77 325 90 385 14 61 27 117 30 126 2 8 46 37 97 63 156 80 211 114 218 133 20 49 10 65 -97 170 l-107 104 42 149 c23 81 46 172 51 202 4 30 27 123 50 207 31 115 40 162 35 190 -11 56 -99 215 -160 287 -30 35 -55 68 -55 72 -1 4 -14 22 -30 41 -21 25 -31 30 -34 20z"
          />
        </g>
      </svg>
    </Box>
  )

  if (disabledLink) {
    return logo
  }

  return (
    <Link component={NextLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  )
})

Logo.propTypes = {
  sx: PropTypes.object,
  disabledLink: PropTypes.bool,
}

export default Logo
