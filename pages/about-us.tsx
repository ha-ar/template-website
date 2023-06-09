// next
// @mui
import { Divider } from '@mui/material'
import Head from 'next/head'

// layouts
import MainLayout from '../layouts/main'
// sections
import { AboutHero, AboutTeam, AboutTestimonials, AboutVision, AboutWhat } from '../sections/about'

import payload from 'payload'
import { CollectionAfterChangeHook } from 'payload/types'

// ----------------------------------------------------------------------

AboutPage.getLayout = page => <MainLayout>{page}</MainLayout>

// ----------------------------------------------------------------------

export default function AboutPage() {
  return (
    <>
      <Head>
        <title> About us | AlgoRepublic</title>
      </Head>

      <AboutHero />

      <AboutWhat />

      <AboutVision />

      <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />

      <AboutTeam />

      <AboutTestimonials />
    </>
  )
}

// const aboutUs = await payload.find({
//   collection: 'posts',
// })

// console.log(aboutUs)
