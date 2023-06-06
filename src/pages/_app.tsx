import React, { Component } from 'react'
import Router, { useRouter } from 'next/router'
import App from 'next/app'
// components
import ProgressBar from '../components/progress-bar'
import SnackbarProvider from '../components/snackbar'
import { MotionLazyContainer } from '../components/animate'
// theme
import ThemeProvider from '../theme'
// scroll bar
import 'simplebar-react/dist/simplebar.min.css'
// lightbox
/* eslint-disable import/no-unresolved */
import 'yet-another-react-lightbox/plugins/captions.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'
// map
import 'mapbox-gl/dist/mapbox-gl.css'
// editor
import 'react-quill/dist/quill.snow.css'
// slick-carousel
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css'

import { Type as MegaMenuType } from '../globals/MegaMenu'
import { Type as FooterType } from '../globals/Footer'
import { Type as SocialMediaType } from '../globals/SocialMedia'

type AppProps = {
  pageProps: unknown
  Component: React.FC<{ footer: FooterType; socialMedia: SocialMediaType }>
} & {
  megaMenu: MegaMenuType
  footer: FooterType
  socialMedia: SocialMediaType
}

const transitionClass = 'page-transitions'

const MyApp = (appProps: AppProps): React.ReactElement => {
  const { Component, pageProps, megaMenu, footer, socialMedia } = appProps
  const router = useRouter()

  return (
    <MotionLazyContainer>
      <ThemeProvider>
        <SnackbarProvider>
          <StyledChart />
          <ProgressBar />
          <Component {...pageProps} footer={footer} socialMedia={socialMedia} />
        </SnackbarProvider>
      </ThemeProvider>
    </MotionLazyContainer>
  )
}

MyApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext)

  const [megaMenu = null, footer = null, socialMedia = null] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/mega-menu`).then(res => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/footer`).then(res => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/social-media`).then(res => res.json()),
  ])

  return {
    ...appProps,
    megaMenu,
    footer,
    socialMedia,
  }
}
