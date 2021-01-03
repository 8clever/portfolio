import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { langStore } from '../src/store/lang';
import { readFileSync } from "fs";
import { join } from "path";

declare type DocumentFiles = {
  sharedFiles: readonly string[];
  pageFiles: readonly string[];
  allFiles: readonly string[];
};

class CustomHead extends Head {
  getCssLinks (doc: DocumentFiles) {
    const { assetPrefix } = this.context;
    const files = doc.allFiles;
    if (!files || files.length === 0) return null;

    return files.filter(file => /\.css$/.test(file)).map(file => (
      <style
        key={file}
        data-href={`${assetPrefix}/_next/${file}`}
        dangerouslySetInnerHTML={{
          __html: readFileSync(join(process.cwd(), '.build', file), 'utf-8'),
        }}
      />
    )) as JSX.Element[];
  }
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={langStore.lang}>
        <CustomHead />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument