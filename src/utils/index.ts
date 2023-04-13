/** regex to match <a> anchor */
export const isAnchorARegex = /<a .*?href=["'](.*?)["'].*?>(.*?)<\/a>/g
export const whitelistLinkInHtml = (html: string): string => {
    /** regex to match href */
    const matches = html.match(isAnchorARegex)

    if (!matches) return html

    matches.forEach((match) => {
        // const href = match.replace(isAnchorARegex, '$1')
        const text = match.replace(isAnchorARegex, '$2')

        html = html.replace(match, `<span>${text}</span>`)

    })
    return html
}