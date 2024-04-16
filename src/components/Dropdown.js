import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

const Dropdown = ({ options, selection, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
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
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        {selection?.label || "Select..."}
        <GoChevronDown className="text-xl" />
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOptions}{" "}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
