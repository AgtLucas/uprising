import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import css from 'next/css'

export default () => (
  <div>
    <Head>
      <title>About</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <style>{`
        body {
          background: #000;
        }

        a {
          color: #FFF;
        }
      `}</style>
    </Head>
    <p className={paragraph}>About Uprising!</p>
    <Link href='/'>Back to home</Link>
  </div>
)

const paragraph = css({
  color: '#FFF',
})
