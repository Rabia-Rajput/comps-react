import { useState,useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, selection, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl =useRef();
  useEffect(()=>{
    const handler=(event)=>{
      if(!divEl.current){
        return;
      }

      if(!divEl.current.contains(event.target)){
        setIsOpen(false);
      }
        
    };
    document.addEventListener('click', handler, true);
    return ()=>{ //clean Up function
      document.removeEventListener('click', handler);

    };

  },[]);
  const handleClick = () => {
    setIsOpen(!isOpen);
    // OR //  isOpen( (currentIsOpen) => !currentIsOpen);
  };
  const handleOptionClick = (option) => {
    // close dropdown
    setIsOpen(false);
    //what option did the user click on?
    onSelect(option);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer "
        onClick={handleClick}
      >
        {selection?.label || "Select..."}
        <GoChevronDown className="text-xl" />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full ">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
};

export default Dropdown;
