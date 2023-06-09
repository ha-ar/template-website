// next
// @mui
import { Box, Container } from '@mui/material'
import Head from 'next/head'

// _mock
// import { _mapContact } from '../_mock/arrays'
// layouts
import MainLayout from '../layouts/main'
// sections
import { ContactForm, ContactHero, ContactMap } from '../sections/contact'

// ----------------------------------------------------------------------

ContactPage.getLayout = page => <MainLayout>{page}</MainLayout>

// ----------------------------------------------------------------------
const _mapContact = [
  {
    latlng: [33, 65],
    address: 'Office # 614, Siddiq Trade Center, Gulberg, Lahore, Pakistan',
    phoneNumber: '+92 42 3578 1943',
  },
  {
    latlng: [-12.5, 18.5],
    address: '16 Queens St., Level 14, Melbourne, Victoria 3000, Australia',
    phoneNumber: '+61 3 8376 6284',
  },
]
export default function ContactPage() {
  return (
    <>
      <Head>
        <title> Contact us | AlgoRepublic</title>
      </Head>

      <ContactHero />

      <Container sx={{ py: 10 }}>
        <Box
          gap={10}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <ContactForm />

          <ContactMap contacts={_mapContact} />
        </Box>
      </Container>
    </>
  )
}
