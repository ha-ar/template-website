// next
// @mui
import { Box } from '@mui/material'
import getConfig from 'next/config'
import Head from 'next/head'

// components
// import ScrollProgress from '../components/scroll-progress'
// layouts
// import MainLayout from '../layouts/main'
// sections
import { HomeMinimal } from '../sections/home'

// ----------------------------------------------------------------------

// HomePage.getLayout = page => <MainLayout> {page} </MainLayout>
const {
  publicRuntimeConfig: { SERVER_URL },
} = getConfig()

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Head>
        <title> AlgoRepublic - 2.0</title>
      </Head>

      {/* <ScrollProgress />

      <HomeHero /> */}

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <HomeMinimal />

        {/* <HomeHugePackElements />

        <HomeForDesigner />

        <HomeDarkMode />

        <HomeColorPresets />

        <HomeCleanInterfaces />

        <HomePricingPlans />

        <HomeLookingFor />

        <HomeAdvertisement /> */}
      </Box>
    </>
  )
}
