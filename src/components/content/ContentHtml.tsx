import { memo } from 'react'
import sanitize from 'sanitize-html'
import { whitelistLinkInHtml } from '../../utils'

// export interface Props extends CommonHtmlProp {
//   html: string
//   module?: (props: { html: string }) => { resultHtml?: JSX.Element; sanitizeConfig?: sanitize.IOptions }
// }

/**
 * sanitize and display string as HTML, also remove non-whitelist link
 */
const ContentHtml = ({ html, className = '', module }: any) => {
  const additionalConfig = module ? module({ html }) : null
  const sanitizeConfig = additionalConfig?.sanitizeConfig
  const sanitized = sanitizeConfig ? sanitize(html, sanitizeConfig) : sanitize(html)

  const htmlWithExpectedLinks = whitelistLinkInHtml(sanitized)
  const resultHtml = { __html: htmlWithExpectedLinks }

  return (
    // if we don't want tailwind style to apply to this html, add `prose prose-slate`
    <div className='prose prose-slate'>
      {additionalConfig?.resultHtml ?? (
        <div className={`ContentHtml content ${className} `} dangerouslySetInnerHTML={resultHtml} />
      )}
    </div>
  )
}

const allowedAttributes = {
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading'],
}

export const ContentHtmlQuill = ({ html }: any) => {
  const sanitizeConfig = {
    allowedClasses: {
      '*': ['ql-*'],
    },
    allowedAttributes,
  }

  const resultHtml = <div className='ql-editor text-justify' dangerouslySetInnerHTML={{ __html: html }} />
  return { sanitizeConfig, resultHtml }
}

export default memo(ContentHtml)

/** display sub title text (description of an entity, like subtitle of heading, description of Task, ...) as sanitized HTML format string */
export const SubTitleDescriptionHtml = ({
  textHtml,
  className,
  children,
}: {
  textHtml?: string | null
} & any) => {
  return (
    <div className={`SubTitleDescriptionHtml font-sans2 text-black ${className ?? ''}`}>
      {textHtml ? <ContentHtml html={textHtml || ''} module={ContentHtmlQuill} /> : <></>}
      {children}
    </div>
  )
}
