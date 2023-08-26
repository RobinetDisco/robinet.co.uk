import React from "react";
import { withPrefix } from "gatsby"
import downloadIcon from "../images/download-icon.svg"

export default function SVGImage(props) {
    const { alt, caption, href, maxWidth, svg } = props
    const downloadPrompt = `Download ${caption} as PDF`

    return (
        <div className="svg-wrapper my-4 mx-auto" style={{ maxWidth: maxWidth }}>
            <div className="text-center">
                <a href={withPrefix(href)}>
                    <img src={svg} alt={alt} width="100%" className="img-fluid border border-dark p-4" />
                </a>
            </div>
            <div><a href={withPrefix(href)}><img src={downloadIcon} className="me-2 d-print-none" height="15" width="15" alt={downloadPrompt} title={downloadPrompt} />{caption}</a></div>
        </div >
    )
}
