import React, { useState } from "react";

function Tabs({ tabs }) {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const handleTabClick = (index) => {
      setActiveIndex(index);
    };
  
    return (
      <div>
        <ul>
          {tabs.map((object, index) => (
            <li
              key={index}
              className={index === activeIndex ? "active" : ""}
              onClick={() => handleTabClick(index)}
            >
              {object.title}
            </li>
          ))}
        </ul>
        <div className="content">
          {activeIndex !== null && (
            <p>{tabs[activeIndex].content}</p>
          )}
        </div>
      </div>
    );
  }

export default Tabs;
