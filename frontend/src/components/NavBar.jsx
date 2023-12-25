import styles from '../css/NavBar.module.css';
import Logo from '../assets/images/Qfuel.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useGetUser, useUserLoading } from '../hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchLogout } from '../api/auth/logout';
import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBar = () => {
    const user = useGetUser()
    const queryClient = useQueryClient()
    const navigator = useNavigate()
    const userLoading = useUserLoading()
    const [display, setdisplay] = useState('-100%')


    const LogoutMutation = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => fetchLogout(),
        onSuccess: (data) => {
            if (data?.status !== "ok") {
                console.log('Something Wrong')
            }
            queryClient.invalidateQueries({ queryKey: ['refresh'] })
            navigator('/')
        }
    })
    const displayToggle = () => {
        setdisplay(display === '-100%' ? '0' : '-100%')
    }
    const handleLogout = () => {
        LogoutMutation.mutate()
    }
    const classNameCheck = (isActive) => {
        return styles.NavLink + " " + (isActive ? styles.active : "")
    }
    return (
        <nav className={styles.NavBarBox} >
            <NavLink className={styles.LogoBox} to='/'>
                <div className={styles.imageBox}>
                    <img src={Logo} alt="" height={"100%"} />
                </div>
                <div className={styles.title}>Qfuel</div>
            </NavLink>
            <div className={styles.LinksBox}>
                <div className={styles.Links} style={{ right: display }}>
                    <div className={styles.closeArrow} onClick={displayToggle}><FaArrowRight /></div>
                    {user ?
                        <>
                            <NavLink to='/' className={({ isActive }) => classNameCheck(isActive)}>Home</NavLink>
                            <NavLink to='/profile' className={({ isActive }) => classNameCheck(isActive)}>Profile</NavLink>
                            <button to='/logout' disabled={LogoutMutation.isPending || userLoading}
                                className={styles.LogoutBTN} onClick={handleLogout}>
                                {(LogoutMutation.isPending || userLoading) ? "Loading" : "Logout"}
                            </button>
                        </>
                        :
                        <>
                            <NavLink to='/' className={({ isActive }) => classNameCheck(isActive)}>Welcome Page</NavLink>
                            <NavLink to='/login' className={({ isActive }) => classNameCheck(isActive)}>Login</NavLink>
                            <NavLink to='/register' className={({ isActive }) => classNameCheck(isActive)}>register</NavLink>
                        </>
                    }
                </div>
                <div className={styles.openeArrow} onClick={displayToggle}><GiHamburgerMenu /> </div>
            </div>
        </nav>
    )
}
