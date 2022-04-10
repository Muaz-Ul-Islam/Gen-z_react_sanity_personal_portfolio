import React from "react";

const NavigationDots = ({ active }) => {
  const navItems = ["home", "about", "work", "skills", "contactus"];

  return (
    <div className="app__navigation">
      {navItems.map((item, index) => (
        <a href={`#${item}`} 
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? {backgroundColor: '#313BAC'} : {}}
        />
      ///   {/* {item}
       /// </a> */}

         
      ))}
    </div>
  );
};

export default NavigationDots;
