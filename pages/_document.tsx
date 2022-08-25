import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body style={{ backgroundColor: "#fcfdff" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
