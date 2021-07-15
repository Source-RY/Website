import React from 'react'

import { t } from '@lingui/macro'

import { HTML, Page } from '../components'


export default function HomePage () {
  return (
    <Page>
      <HTML dangerouslySetInnerHTML={{ __html: t`home:body` }} />
    </Page>
  )
}
