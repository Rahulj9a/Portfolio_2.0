"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

const Circle = ({
  
  items = [],
   
  className,
  children,
  circleClass,
}) => {
  const circleRef = useRef(null);
  const [height,setHeight]  = useState(0)
  const [width,setWidth] = useState(0)
  const [clonedItems, setClonedItems] = useState([]);
   
  
  
  useEffect(() => {
    const numItems = items.length;
    const angle = 360 / numItems;
    
    if(height==0){
      setHeight(circleRef.current.getBoundingClientRect().height)
    }
    if(width==0){
      setWidth(circleRef.current.getBoundingClientRect().width)
    }
     
     
     
    const newClonedItems = items.map((item, index) => {
      const rotate = angle * index;
      const translateX = Math.cos((rotate * Math.PI) / 180) * (height / 2);
      const translateY = Math.sin((rotate * Math.PI) / 180) * (width / 2);
       
      return React.cloneElement(item, {
        className: `${item.props.className} animate-ping-slow`,
        style: {
          ...item.props.style,
          position: "absolute",
          transform: `${
            `translate(${translateX}px, ${translateY}px)` 
          } `,
        },
      });
    });
     
    setClonedItems(newClonedItems);
  }, [items,height,width]);

  const MChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, { className: "modified-child" })
  );

  return (
    <div
      id="outerMost"
      className={className}
      style={{
        borderRadius: "50%",
        position:"absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {MChildren}
      <div
        className={`h-full w-full ${circleClass}  `}
        ref={circleRef}
        style={{
          
          borderRadius: "50%",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          
        }}
      >
        {clonedItems}
      </div>
    </div>
  );
};

export default Circle;
