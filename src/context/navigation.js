
import {createContext, useEffect, useState} from 'react'

const NavigationContext = createContext();
function NavigationProvider ({Children}) {
const [currentPath, setCurrentPath]= useState(window.location.pathname);
useEffect(()=>{
    const handler=()=>{
        setCurrentPath(window.location.pathname);


    };
    window.addEventListener('popstate', handler);

    return ()=>{
        window.removeEventListener('popstate', handler);

    };
},[]);

    return( <NavigationContext.Provider value={{ }}>
        {currentPath}
        {Children}
    </NavigationContext.Provider>
    );
}
 
export {NavigationProvider};
export default NavigationContext;