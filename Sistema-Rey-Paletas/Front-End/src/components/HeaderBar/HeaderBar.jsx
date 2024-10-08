import PropTypes from 'prop-types';
import ButtonMenu from '../../common/HeaderElements/ButtonMenu';
import LogoMin from '../../images/logo/logo-icon.svg';
import UserImg from '../../images/user/user-01.png';
import ButtonLigthOrDark from '../../common/HeaderElements/ButtonLigthOrDark';
import ButtonNotification from '../../common/HeaderElements/ButtonNotification';
import ButtonArrowDown from '../../common/HeaderElements/ButtonArrowDown';
import { useState } from 'react';
import { getGlobalVariable } from '../../cookies/cookieManajer';

export default function HeaderBar({ onButtonMenuClick }) {

    const [optionsVisible, setOptionsVisible] = useState(false);


    const toggleOptions = () => {
        setOptionsVisible(prevState => !prevState);
    }

    return (
        <header className='w-full h-auto p-4 gap-2 flex justify-between items-center dark:bg-big-stone-950 transition-all z-2 shadow-md'>
            <ButtonMenu onClick={onButtonMenuClick} />
            <div className="w-0 sm:w-5/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12"></div>
            <img src={LogoMin} alt="Imagen para el header" className='w-0 sm:w-auto lg:w-0' />
            <ButtonLigthOrDark />
            <ButtonNotification />
            <div className='w-0 lg:px-2 lg:w-auto overflow-hidden flex flex-col text-xs text-end'>
                <span className='text-black font-semibold dark:text-white'>{getGlobalVariable("name")}</span>
                <span className='text-black font-semibold dark:text-white'>{getGlobalVariable("secName")}</span>
                <span className='text-gray-700 dark:text-gray-400'>{getGlobalVariable("role") == "Employeed" ? "Empleado": "Administrador"}</span>
            </div>
            <div className='flex items-center gap-2 cursor-pointer' onClick={toggleOptions}>
                <img src={UserImg} className='w-11 h-11' alt="Imagen del usuario" />
                <ButtonArrowDown state={optionsVisible} />
            </div>
        </header>
    );
}

HeaderBar.propTypes = {
    onButtonMenuClick: PropTypes.func.isRequired,
};
