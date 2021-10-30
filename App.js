import React, { Component } from 'react'
  import WebViewExample from './src/components/modal_example'
  import TextExample  from './src/components/text'
  import List from './src/components/List'

  const Home = () => {
    return (
      <>
        <WebViewExample/>
        <TextExample />
        <List />
        </>
    )
  }
  export default Home;