import React from 'react';
import './ElectricButton.css';

const ElectricButton = ({ 
  text = "Resume", 
  onClick = () => {}, 
  className = "",
  disabled = false,
  customStyles = {},
  filamentColor = "#8b451333",
  filamentGrowColor = "#fdfdf9", 
  glowColor = "#ff9f70",
  containerHeight = "200px",
  containerWidth = "100%"
}) => {
  // Split text into individual characters for animation
  // const textChars = text.split('').map((char, index) => (
  //   <span key={index} style={{ '--i': index }}>
  //     {char}
  //   </span>
  // ));

  const textChars = text.split("");

  // Custom CSS variables for theming
  const customCSSVars = {
    '--filament': filamentColor,
    '--filament-grow': filamentGrowColor,
    '--glow': glowColor,
    height: containerHeight,
    width: containerWidth,
    ...customStyles
  };

  return (
    <div 
      className={`electric-button-container ${className}`}
      style={customCSSVars}
    >
      {/* Interactive areas for hover effects */}
      {Array.from({ length: 15 }, (_, i) => (
        <div key={i} className="area"></div>
      ))}
      
      <button 
        className="electric-button" 
        onClick={onClick}
        disabled={disabled}
        type="button"
      >
        <div className="base"></div>
        
        {/* Filament SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 52 42"
          height="25"
          width="50"
          className="filament"
        >
          <path
            strokeWidth="3"
            stroke="var(--filament)"
            d="M1 11.5153C10.1667 12.6819 30.7 14.8153 39.5 14.0153C48.3 13.2153 50.1667 10.3486 50 9.01525C49.8333 6.84859 48.6 2.41525 45 2.01525C41.4 1.61525 39.8333 9.18192 39.5 13.0153V29.5153C39.5 32.5153 42 40.0153 45 40.0153C48 40.0153 50 37.5153 50 35.5153C50 33.5153 47.7 29.0153 38.5 27.0153C29.3 25.0153 9.66667 27.8486 1 29.5153"
          />
        </svg>
        
        {/* Filament glow SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 42"
          height="25"
          width="50"
          className="filament filament-glow"
        >
          <defs>
            <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--filament)"></stop>
              <stop offset="100%" stopColor="var(--filament)"></stop>
            </linearGradient>
          </defs>
          <path
            d="M1 11.5153C10.1667 12.6819 30.7 14.8153 39.5 14.0153C48.3 13.2153 50.1667 10.3486 50 9.01525C49.8333 6.84859 48.6 2.41525 45 2.01525C41.4 1.61525 39.8333 9.18192 39.5 13.0153V29.5153C39.5 32.5153 42 40.0153 45 40.0153C48 40.0153 50 37.5153 50 35.5153C50 33.5153 47.7 29.0153 38.5 27.0153C29.3 25.0153 9.66667 27.8486 1 29.5153"
          />
        </svg>
        
        <div className="glow"></div>
        
        {/* Lightning marquee */}
        <div className="lightning-marquee">
          {Array.from({ length: 2 }, (_, groupIndex) => (
            <div key={groupIndex}>
              {Array.from({ length: 5 }, (_, lightningIndex) => (
                <svg
                  key={lightningIndex}
                  viewBox="0 0 16 16"
                  className="lightning"
                  fill="var(--glow)"
                  height="15"
                  width="15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                </svg>
              ))}
            </div>
          ))}
        </div>
        
        {/* Button text */}
        <p className="text">
          {textChars}
        </p>
      </button>
      
      {/* Bulb wrapper with cursors */}
      <div className="bulb-wrapper">
        <div className="bulb"></div>
        
        {/* Cursor select */}
        <svg
          viewBox="0 0 16 16"
          className="cursor select"
          stroke="#000"
          fill="#fff"
          height="30"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
        </svg>
        
        {/* Cursor move */}
        <svg
          viewBox="0 0 16 16"
          className="cursor move"
          fill="#fff"
          height="30"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10M.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8" />
        </svg>
        
        {/* Cursor rotate */}
        <svg
          viewBox="0 0 16 16"
          className="cursor rotate"
          fill="#fff"
          height="30"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
        </svg>
        
        {/* Cursor hammer */}
        <svg
          viewBox="0 0 16 16"
          className="cursor hammer"
          stroke="#000"
          fill="#fff"
          height="30"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
        </svg>
        
        {/* Lightbulb off */}
        <svg
          viewBox="0 0 16 16"
          className="cursor lightbulb-off"
          fill="#fff"
          height="30"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
        </svg>
        
        {/* Lightbulb on */}
        <svg
          viewBox="0 0 16 16"
          className="cursor lightbulb-on"
          fill="#fff"
          height="30"
          width="30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5" />
        </svg>
      </div>
    </div>
  );
};

export default ElectricButton;