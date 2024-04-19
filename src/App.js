
import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
function App  () {
  return   <div>
      <Sidebar/>
        <div>
          <Route path='/accordion'>
         <AccordionPage/>   
            
             </Route>
             <Route path='/'>
         <DropdownPage/>   
            
             </Route>

        </div>
    </div>
 
}

export default App;