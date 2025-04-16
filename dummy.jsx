// styles/globals.css
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .connector-line {
    position: absolute;
    background-color: #888;
    height: 2px;
    transform-origin: 0 0;
  }
`;

export default GlobalStyle;

// components/DetailWithConnector.js
import React, { useEffect, useRef, useState } from 'react';

export default function DetailWithConnector({ detail, centerPoint, index }) {
  const [line, setLine] = useState({ width: 0, angle: 0 });
  const detailRef = useRef(null);
  const dotRef = useRef(null);
  
  useEffect(() => {
    if (detailRef.current && dotRef.current && centerPoint) {
      const rect1 = detailRef.current.getBoundingClientRect();
      const rect2 = dotRef.current.getBoundingClientRect();
      
      const x1 = rect1.left + rect1.width / 2;
      const y1 = rect1.top + rect1.height / 2;
      const x2 = rect2.left + rect2.width / 2;
      const y2 = rect2.top + rect2.height / 2;
      
      const width = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
      
      setLine({ width, angle });
    }
  }, [centerPoint]);
  
  return (
    <div className="detail-container" ref={detailRef}>
      <div ref={dotRef} className="dot"></div>
      <div 
        className="connector-line"
        style={{
          width: ${line.width}px,
          transform: rotate(${line.angle}deg)
        }}
      ></div>
      <div className="detail-content">
        <h3>{detail.title}</h3>
        <p>{detail.description}</p>
      </div>
    </div>
  );
}

// pages/_app.js
import GlobalStyle from '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;