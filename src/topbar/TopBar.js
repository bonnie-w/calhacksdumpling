import './topbar.css'
import logo from '../dumpling-logo.png';

export default function TopBar() {
    return (
        <div className='top'>
            <div className='topL'>
                <a href='index.html'><img src={logo} alt='' className='logo'></img></a>
            </div>
            <div className='topC'>
                <ul className='topList'> 
                    <li className='ListItem'> Ugly Dumplings </li>
                </ul>
            </div>
            <div className='topR'> 
            </div>
        </div>
    )
}