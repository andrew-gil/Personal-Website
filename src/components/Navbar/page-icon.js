import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInfoCircle, faHome, faAddressCard, faFile, faBars} from '@fortawesome/free-solid-svg-icons';

export const PageIcon = ({path}) => {
    if (path == "/") {
        return <FontAwesomeIcon icon = {faHome} color = "#4d4d4e" className = 'active-icon'/>;
    } else if (path == "/about") {
        return <FontAwesomeIcon icon = {faInfoCircle} color = "#4d4d4e" className = 'active-icon'/>;
    } else if (path == "/resume") {
        return <FontAwesomeIcon icon = {faFile} color = "#4d4d4e" className = 'active-icon'/>;
    } else if (path == "/contact") {
        return <FontAwesomeIcon icon = {faAddressCard} color = "#4d4d4e" className = 'active-icon'/>;
    }
}