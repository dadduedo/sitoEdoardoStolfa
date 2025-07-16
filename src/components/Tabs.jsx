import { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      {/* Tabs Buttons */}
      <div className="flex justify-center flex-wrap sm:flex-nowrap overflow-x-auto space-x-2 sm:space-x-4 mb-6 px-2">

        {children.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-all duration-300
            ${
              activeTab === index
                ? "bg-blue-600 text-white shadow-md"
                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            }`}
          >
            {tab.props.title}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div>{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;