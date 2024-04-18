
import {createContext} from 'react'

const NavigationContext = createContext();
function NavigationProvider ({Children}) {
    return( <NavigationContext.Provider value={{ }}>
        {Children}
    </NavigationContext.Provider>
    );
}
 
export {NavigationProvider};
export default NavigationContext;