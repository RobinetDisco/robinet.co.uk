# robinet.co.uk website

This site is being developed using GatsbyJS with MDX, KaTeX, and Bootstrap.

## Edit the content

The content on the home page is authored using [Markdown](https://www.markdownguide.org/). To make changes, edit [src/pages/index.mdx](src/pages/index.mdx) with a text editor.

### Mathematical equations

Mathematical equations are encoded using [KaTeX](https://katex.org/). Simply add `$$` before and after the equation, and it will be automatically converted on the page. You can view a list of supported functions at [katex.org/docs/supported.html](https://katex.org/docs/supported.html).

### Images

#### Transform the SVG that comes out of Kicad

1. Open the file in Inkscape
1. Go to `File->Document Properties...`
1. Expand `Resize page to content...`
1. Click `Resize page to drawing or selection`
1. Save the file
1. Open the file in a text editor
1. Add the following text above the closing `</svg>` tag:

```
    <metadata
    id="metadata11201">
    <rdf:RDF>
    <cc:Work
        rdf:about="">
        <dc:title>Audio Amplifier Design Figure <x></dc:title>
                <dc:creator>
        <cc:Agent>
            <dc:title>John Howard, www.robinet.co.uk</dc:title>
        </cc:Agent>
        </dc:creator>
        <cc:license
        rdf:resource="http://creativecommons.org/licenses/by-nc-sa/4.0/" />
    </cc:Work>
    <cc:License
        rdf:about="http://creativecommons.org/licenses/by-nc-sa/4.0/">
        <cc:permits
        rdf:resource="http://creativecommons.org/ns#Reproduction" />
        <cc:permits
        rdf:resource="http://creativecommons.org/ns#Distribution" />
        <cc:requires
        rdf:resource="http://creativecommons.org/ns#Notice" />
        <cc:requires
        rdf:resource="http://creativecommons.org/ns#Attribution" />
        <cc:prohibits
        rdf:resource="http://creativecommons.org/ns#CommercialUse" />
        <cc:permits
        rdf:resource="http://creativecommons.org/ns#DerivativeWorks" />
        <cc:requires
        rdf:resource="http://creativecommons.org/ns#ShareAlike" />
    </cc:License>
    </rdf:RDF>
</metadata>
```

#### Add saved SVG to the site

1. Place the image file in [src/images](src/images)
2. Add this line near the top of the file: `import myimage from '../images/image.svg'`
3. Add this line where you want the image to appear: `<SVGImage svg={myimage} alt='My Image' />`

### Convert SVG to PDF

1. Open the file in Inkscape
2. Add a text box (font: sans-serif, font size: 10) that reads:

```
Figure 5 from 'Audio Amplifier with Defined Output Impedance' by John Howard, available at robinet.co.uk
Licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
```

3. Resize the page (see above)
4. Choose `File->Save As...` and save the file as a PDF. You might want to set a bleed margin of 10mm.
5. Place the PDF file in [static/pdfs](static/pdfs)

## Run the site locally

This is not strictly necessary, but you may find it useful to be able to preview your changes before pushing them to Github.

1. Install npm: `apt install npm nodejs`
2. `git clone git@github.com:RobinetDisco/robinet.co.uk.git`
3. `cd robinet.co.uk`
4. `npm install && npm run develop`
5. Go to [localhost:8000](http://localhost:8000) to view the site. Changes you make to the source files while `npm run develop` is running will automatically be reflected in the browser after a short compliation delay.

## Update the disco binaries

1. Create a new tag in the Discographer repository:
    - ```git tag 1.0.2 && git push origin 1.0.2```
    - (note: DO NOT create the release - it will happen automatically as a github action)
2. Wait for the github action to build the binaries
3. Download the created binaries from the Releases page, and add them to public/disco-binaries in this repository
