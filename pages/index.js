import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import css from 'next/css'

export default () => (
  <div>
    <Head>
      <title>Home</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <style>{`
        body {
          background: #08C;
        }

        a {
          color: #FFF;
        }
      `}</style>
    </Head>
    <p className={paragraph}>Uprising!</p>
    <Link href='/about'>About</Link>
  </div>
)

const paragraph = css({
  color: '#FFF',
  backgroundColor: '#08C',
  padding: 20
})
