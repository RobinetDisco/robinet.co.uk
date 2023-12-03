import type { MDXComponents } from 'mdx/types'

function getAnchor(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-')
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => {
      const anchor = getAnchor(props.children as string)
      return <h2 id={anchor}>{props.children}</h2>
    },
    h3: (props) => {
      const anchor = getAnchor(props.children as string)
      return <h3 id={anchor}>{props.children}</h3>
    },
    ...components,
  }
}
