import React from 'react'
import Head from 'next/head'
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
      `}</style>
    </Head>
    <p className={paragraph}>Uprising!</p>
  </div>
)

const paragraph = css({
  color: '#FFF',
})
