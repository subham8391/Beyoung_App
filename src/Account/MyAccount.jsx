import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { AccountTabs } from '../ConstentData'
import Auth from '../Authenticion/auth';
import './account.css'
function MyAccount() {

    const [activeTab, setActiveTab] = useState('profile');
    const [userName, setUserName] = useState('');
    useEffect(() => {
        const storedUserName = sessionStorage.getItem('userInfoN');
        // Update the state with the retrieved name & email
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);
    // get the first later of User 
    const getFirstLetter = () => {
        if (userName) {
            const nameArray = userName.split(' ');
            if (nameArray.length >= 2) {
                const [firstName, lastName] = nameArray;
                return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
            } else {
                return userName.charAt(0).toUpperCase();
            }
        }
        return '';
    };
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const path = location.pathname;
        const segments = path.split('/');
        const lastSegment = segments[segments.length - 1];
        setActiveTab(lastSegment)
    }, [location]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        navigate(`/myaccount/${tabName}`); 
    };

    const handleLogout = () => {
        Auth.logout();
        navigate('/');
    };

    return (
        <>
            <div className="myaccount-section">
                <div className="myaccount-container">
                    <div className='tab-header'>
                        <div className="account-head">
                            <div className="profile-picture">
                                <div className="profile-letter">{getFirstLetter()}</div>
                            </div>
                            <p className='u-name'>{userName}</p>
                        </div>
                        <div className="account-bottom">
                            {AccountTabs.map((tab) => (
                                <div
                                    key={tab.tabName}
                                    className={`tab ${activeTab === tab.tabName ? 'active' : ''}`}
                                    onClick={() => handleTabClick(tab.tabName)}
                                >
                                    {tab.label}
                                </div>
                            ))}
                            <div className="log-out-btn" onClick={handleLogout}>Logout</div>
                        </div>
                    </div>
                    <div className='tab-content'>
                        {/* Render the content based on the active tab */}
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyAccount