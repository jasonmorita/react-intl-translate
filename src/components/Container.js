
import React from 'react';
import Header from './Header'
import Content from './Content'

const Container = (props) => {
  return (
      <div>
          <Header {...props} />
          <Content />
      </div>
  );
};

export default Container;
