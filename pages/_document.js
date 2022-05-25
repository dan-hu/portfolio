import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: '只是胡闹',
    description: '一个人的胡说八道。',
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta name="twitter:site" content="@hu1980" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
