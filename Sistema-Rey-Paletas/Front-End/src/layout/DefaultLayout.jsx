import PropTypes from 'prop-types';
import { useState } from 'react';
import HeaderBar from '../components/HeaderBar/HeaderBar';
import SideBar from "../components/SideBar/SideBar";
import ButtonReturn from '../common/SideBarElements/ButtonReturn';

const DefaultLayout = ({ children }) => {
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);

    // Función para manejar el clic en ButtonReturn y ButtonMenu
    const toggleSideBar = () => {
        setIsSideBarVisible(prevState => !prevState);
    };

    return (
        <div className="w-full h-screen flex justify-end relative">
            <div className={`duration-100 w-[17rem] h-full lg:relative lg:w-[25rem] ${isSideBarVisible ? 'seeBar' : '-left-[110%] lg:left-0'} absolute overflow-hidden z-10`}>
                <SideBar>
                    <ButtonReturn onClick={toggleSideBar} />
                </SideBar>
            </div>
            <div className="w-full flex flex-col">
                <HeaderBar onButtonMenuClick={toggleSideBar} />
                <div className='w-full h-screen bg-white dark:bg-shark-950'>
                    {children}
                </div>
            </div>
        </div>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
