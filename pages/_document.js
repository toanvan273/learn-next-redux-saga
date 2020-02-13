import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from "styled-components";

const resetStyles = `
  body {
    width: 100%;
    height: 100%;
    min-height:100vh;
    
    font-style: normal;
    padding: 0;
    margin: 0;
    background: #fff;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  .fonts-loaded body {
    // font-family: ;
  }

  #__next {
    position: relative;
    overflow: auto;
    width: 100%;
    height: 100%;
  }
`;
export default class MyDocument extends Document {
    static getInitialProps({ renderPage, req }) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props =>
            sheet.collectStyles(<App {...props} />)
        )
        const styleTags = sheet.getStyleElement()
        const fontsAreLoaded = (req.headers.cookie || "").indexOf("fonts-loaded") !== 0
        return { ...page, styleTags, fontsAreLoaded }
    }
    render() {
        return (
            <html lang="vn">
                <Head>
                    <meta charSet="UTF-8"  />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                    <meta name="viewport"
                        content="width=device-width, initial-scale=1.0, user-scalable=yes" />
                    <style dangerouslySetInnerHTML={{ __html: resetStyles }} />
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}