import React, { useState } from 'react';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      type="button"
      title="Scroll to top"
      className={visible ? 'top-button' : 'hideTopBtn'}
      onClick={scrollToTop}>
      <i className="fa fa-arrow-up" />
    </button>
  )
};

export default ScrollButton;