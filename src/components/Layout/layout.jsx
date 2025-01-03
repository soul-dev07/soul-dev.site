import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <main className="w-[90vw] md:w-[80vw] max-w-[1920px] mx-auto pt-6">
        {children}
      </main>
    </>
  );
};

export default Layout;
