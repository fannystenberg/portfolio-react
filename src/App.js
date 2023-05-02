import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Tech from 'components/Tech';
import Skills from 'components/Skills';
import ScrollBtn from 'components/ScrollBtn';
import FeaturedProjectList from 'components/Projects/FeaturedProjectList';

export const App = () => {
  return (
    <>
      <Header />
      <div className="scroll" aria-hidden="true">
        <p className="arrow"><i className="fa-solid fa-arrow-down" /></p>
        <p className="scroll-text">Lets scroll</p>
      </div>
      <main>
        <Tech />
        <FeaturedProjectList />
      </main>
      <Skills />
      <Footer />
      <ScrollBtn />
    </>
  )
}
