import { useState } from "react";
import Table from "./Table"

const SortableTable = (props) => {
    
    const {config}=props;
    const handleClick=(label)=>{
       

    }

    const updatedConfig = config.map((column)=>{
        if(!column.sortValue){
            return column;
        }
        return {
            ...column,
            header: ()=> <th onClick={()=> handleClick(column.label)}> {column.label} </th>
        }

    });
  return (
  <Table {...props} config={updatedConfig} />
  );
}

export default SortableTable;