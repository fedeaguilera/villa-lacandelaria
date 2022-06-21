import {FunctionComponent} from 'react'
import {FcWiFiLogo} from 'react-icons/fc';
import {MdPool} from 'react-icons/md';
interface LogosProps {
    
}
 
const Logos: FunctionComponent<LogosProps> = () => {
    return (
    <div className="mt-10">
        <h4>Amenities</h4>
        <div>
        <FcWiFiLogo/>
        <MdPool/>
        </div>
    </div>
      );
}
 
export default Logos;