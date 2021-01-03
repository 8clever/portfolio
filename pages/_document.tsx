import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { langStore } from '../src/store/lang';
import sass from "sass";

export const getInlineAmpCss = () => {
  const css = sass.renderSync({
    file: process.cwd() + "/src/style/amp.scss",
    outputStyle: "compressed"
  });

  return css.css.toString()
    .replace(/\!important/gm, "");
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps
    }
  }

  render() {
    return (
      <Html lang={langStore.lang}>
        <Head />
        {
            this.props.inAmpMode ?
            <style amp-boilerplate="">{getInlineAmpCss()}</style> :
            null
          }
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument