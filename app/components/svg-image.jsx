import downloadIcon from '../../public/images/download-icon.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function SVGImage(props) {
  const { alt, caption, href, maxWidth, svg } = props
  const downloadPrompt = `Download ${caption} as PDF`

  return (
    <div className="svg-wrapper my-4 mx-auto" style={{ maxWidth: maxWidth }}>
      <div className="text-center">
        <Link href={href}>
          <img
            src={svg}
            alt={alt}
            width="100%"
            className="img-fluid border border-dark p-4"
          />
        </Link>
      </div>
      <div>
        <Link href={href}>
          <Image
            src={downloadIcon}
            className="me-2 d-print-none"
            height="15"
            width="15"
            alt={downloadPrompt}
            title={downloadPrompt}
          />
          {caption}
        </Link>
      </div>
    </div>
  )
}
