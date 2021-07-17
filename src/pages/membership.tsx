import { t } from '@lingui/macro'
import { Trans } from '@lingui/react'
import React from 'react'
import ReactMarkdown from 'react-markdown'

import { HTML, Page } from '../components'


export default function MembershipPage () {
  return (
    <Page>
      <HTML>
        <ReactMarkdown>{t`membership:body`}</ReactMarkdown>
      </HTML>
    </Page>
  )
}
