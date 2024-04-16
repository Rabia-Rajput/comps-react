import {useState} from 'react'

const Dropdown = ({options, selection , onSelect } ) => {
    const [isOpen, setIsOpen]= useState(false);
    const handleClick=()=>{
        setIsOpen(!isOpen);
      // OR //  isOpen( (currentIsOpen) => !currentIsOpen);
    };
    const handleOptionClick=(option)=>{
        // close dropdown
        setIsOpen(false);
        //what option did the user click on?
        onSelect(option);

    };
    const renderedOptions=options.map((option)=>{
       return <div onClick={()=> handleOptionClick (option)} key={option.value}>
        {option.label}
       </div>

    });
  return (
    <div>
        <div onClick={ handleClick }>Select...</div>
       { isOpen && <div>{renderedOptions} </div>}
    </div>
  );
}

export default Dropdown