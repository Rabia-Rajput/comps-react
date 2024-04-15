import {useState} from 'react'

const Dropdown = ({options} ) => {
    const [isOpen, setIsOpen]= useState(false);
    const handleClick=()=>{
        setIsOpen(!isOpen);
      // OR //  isOpen( (currentIsOpen) => !isOpen);
    };
    const renderedOptions=options.map((option)=>{
       return <div key={option.value}>
        {option.label}
       </div>

    });
  return (
    <div>
        <div onClick={handleClick}>Select...</div>
       { isOpen && <div>{renderedOptions} </div>}
    </div>
  );
}

export default Dropdown