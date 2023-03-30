import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <div className="scroll" aria-hidden="true">
        <p className="arrow"><i className="fa-solid fa-arrow-down" /></p>
        <p className="scroll-text">Lets scroll</p>
      </div>
      <main>
        Find me in src/app.js!
      </main>
      <Footer />
    </>
  )
}
