import ReactMarkdown, { ReactMarkdownOptions } from 'react-markdown'

import { HTML } from './HTML'


export const Markdown: React.FC<ReactMarkdownOptions> = props => <HTML><ReactMarkdown {...props} /></HTML>
