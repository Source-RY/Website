import React from 'react'

import { t } from '@lingui/macro'

import { Markdown, Page } from '../components'
import { Button } from '../components/Button'
import tw from 'twin.macro'


const Container = tw.div`
  px-3
`

export default function MembershipPage () {
  return (
    <Page>
      <Container>
        <Markdown>{t`membership:body`}</Markdown>
        <Button>Liity jäseneksi</Button>
      </Container>
    </Page>
  )
}
