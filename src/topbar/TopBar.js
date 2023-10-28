import './topbar.css'

export default function TopBar() {
    return (
        <div className='top'>
            <div className='topL'>
                <img src='/assets/dumpling-logo.png' alt='' className='logo'/>
            </div>
            <div className='topC'>
                <ul className='topList'> 
                    <li className='ListItem'> UGLY DUMPLINGS </li>
                </ul>
            </div>
            <div className='topR'> 
            </div>
        </div>
    )
}