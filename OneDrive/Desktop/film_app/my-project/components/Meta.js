import React from 'react';
import Head from "next/head";
function Meta({keywords, description, title}) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords " content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="/favicon.ico" />
      <title>{ title }</title>
    </Head>
  )
}


Meta.defaultProps = {
  title: 'NetFlix',
  keywords: 'movie app, free movies',
  description: 'watch movies'
}

export default Meta