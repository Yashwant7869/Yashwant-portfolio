import React from 'react';
import ElectricButton from './ElectricButton';

// Demo component showing different ElectricButton configurations
const ElectricButtonDemo = () => {
  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} button clicked!`);
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <h1 className="text-white text-3xl mb-8 text-center">Electric Button Component Demo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Default Button */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-white text-lg mb-4">Default Button</h3>
          <ElectricButton 
            onClick={() => handleButtonClick('Default')}
          />
        </div>

        {/* Custom Text Button */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-white text-lg mb-4">Custom Text</h3>
          <ElectricButton 
            text="Click Me!"
            onClick={() => handleButtonClick('Custom Text')}
          />
        </div>

        {/* Purple Theme Button */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-white text-lg mb-4">Purple Theme</h3>
          <ElectricButton 
            text="Purple Power"
            glowColor="#8245ec"
            onClick={() => handleButtonClick('Purple')}
          />
        </div>

        {/* Blue Theme Button */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-white text-lg mb-4">Blue Theme</h3>
          <ElectricButton 
            text="Ocean Blue"
            glowColor="#3b82f6"
            filamentGrowColor="#60a5fa"
            onClick={() => handleButtonClick('Blue')}
          />
        </div>

        {/* Green Theme Button */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-white text-lg mb-4">Green Theme</h3>
          <ElectricButton 
            text="Go Green"
            glowColor="#10b981"
            filamentGrowColor="#34d399"
            onClick={() => handleButtonClick('Green')}
          />
        </div>

        {/* Custom Size Button */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-white text-lg mb-4">Custom Size</h3>
          <ElectricButton 
            text="Big Button"
            containerHeight="250px"
            onClick={() => handleButtonClick('Big')}
          />
        </div>

      </div>

      <div className="mt-12 bg-gray-800 p-6 rounded-lg">
        <h3 className="text-white text-xl mb-4">Available Props:</h3>
        <div className="text-gray-300 space-y-2">
          <p><strong>text:</strong> Button text (default: "GetStarted")</p>
          <p><strong>onClick:</strong> Click handler function</p>
          <p><strong>className:</strong> Additional CSS classes</p>
          <p><strong>disabled:</strong> Disable the button</p>
          <p><strong>customStyles:</strong> Custom inline styles object</p>
          <p><strong>filamentColor:</strong> Color of the filament (default: "#8b451333")</p>
          <p><strong>filamentGrowColor:</strong> Color when filament glows (default: "#fdfdf9")</p>
          <p><strong>glowColor:</strong> Main glow color (default: "#ff9f70")</p>
          <p><strong>containerHeight:</strong> Height of the container (default: "200px")</p>
          <p><strong>containerWidth:</strong> Width of the container (default: "100%")</p>
        </div>
      </div>
    </div>
  );
};

export default ElectricButtonDemo;