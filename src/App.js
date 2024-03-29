import Button from "./Button";
import {GoBell, GoCloudDownload, GoDatabase, GoCheck, GoClippy} from 'react-icons/go';
function App (){
    const handleClick=()=>{
        console.log('clicked');

    };
    return <div>
        <div><Button success rounded outline className='mb-5' onClick={handleClick}><GoCloudDownload/>Click me </Button></div>
        <div><Button danger outline> <GoBell/>Buy now!</Button></div>
        <div><Button warning><GoClippy/>See Data</Button></div>
        <div><Button secondary outline> <GoDatabase/> Hide Ads</Button></div>
        <div><Button primary rounded><GoCheck/>Something!</Button></div>
       

    </div>;
}



export default App;