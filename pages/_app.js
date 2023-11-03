import React from 'react'
import NavBar from '../components/NavBar';

const App = ({Component, pageProps}) => {
  return (
    <>
      <NavBar/>
      <Component {...pageProps} />
      <span>Hello</span>
      <style jsx global>
        {`
          a {
            color: red;
          }
        `}
      </style>
    </>
  )
}

export default App