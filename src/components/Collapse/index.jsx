import React, { useState, useRef, useEffect } from "react";
import "../../style/Collapse.scss";

function Collapse({ textWhenCollapsed, textWhenExpanded, additionalClass }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isExpanded ? `${contentRef.current.scrollHeight}10px` : "0px";
    }
  }, [isExpanded]);

  return (
    <div className={`collapse-container ${additionalClass} ${isExpanded ? 'expanded' : ''}`}>
      <button className={`toggle-button ${isExpanded ? 'expanded' : 'collapsed'}`} onClick={toggleCollapse}>
        {isExpanded ? textWhenCollapsed : textWhenCollapsed} 
        <div className="Fleche">❯</div>
      </button>
      <div 
        ref={contentRef} 
        className="expanded-content"
        style={{
          overflow: 'hidden',
          transition: 'max-height 200ms ease-in-out',
          maxHeight: '70px',
        }}
      >
        <p>{textWhenExpanded}</p>
      </div>
    </div>
  );
}

Collapse.defaultProps = {
  textWhenCollapsed: "Afficher plus",
  textWhenExpanded: "Réduire",
};

export { Collapse };