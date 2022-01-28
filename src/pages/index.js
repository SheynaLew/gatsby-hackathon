// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

import { Carousel } from 'antd';

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

// Step 2: Define your component
const IndexPage = () => {
  return (
    <div>
       <Layout pageTitle="Home Page">
      <p>WELCOME TO OUR AXOLOTL ADOPTION SITE</p>
    </Layout>

    <Carousel afterChange={onChange}>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>, mountNode,
  </div>
   

  );
};

// Step 3: Export your component
export default IndexPage;
