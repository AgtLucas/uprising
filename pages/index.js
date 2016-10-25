import React from 'react'
import Head from 'next/head'
import css from 'next/css'

export default () => (
  <div className={style}>
    <Head>
      <title>Home</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>Uprising!</p>
  </div>
)

const style = css({
  background: '#08C',
  color: '#FFF',
  ':hover': {
    background: '#68C'
  },
  '@media (max-width: 600px)': {
    background: '#000'
  }
})
