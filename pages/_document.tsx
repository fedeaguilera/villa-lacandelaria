import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import Footer from "../components/index/footer/Footer";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link  rel="preconnect" href="https://fonts.googleapis.com" />
          <link  rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"crossOrigin"} />
          <link href="https://fonts.googleapis.com/css2?family=Belleza&family=Fleur+De+Leah&display=swap" rel="stylesheet"/>
          
        </Head>
        <body className="font-body box-border">
          <Main />
          <NextScript />
          <Footer/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
