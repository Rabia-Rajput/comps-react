import { useState,useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, selection, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(()=>{
    const handler=(event)=>{
        console.log(event.target);
    };
    document.addEventListener('click', handler, true)

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
    <div className="w-48 relative">
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
