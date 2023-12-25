import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../HomePage';
import { LoginAndRegister } from '../LoginAndRegister';
import { ProfilePage } from '../ProfilePage';
import { useGetUser, useUserLoading } from '../../hooks';
import { UserPage } from '../UserPage';
import { PageNotFound } from '../PageNotFound';
import { NavBar } from '../../components/NavBar';
import { LoadingComponent } from '../../components/LoadingComponent';

export const DefaultLayout = () => {
    const user = useGetUser()
    const userLoading = useUserLoading()
    return (
        <div className='FullBox'>
            <NavBar />
            {userLoading ? <LoadingComponent /> :
                <Routes>
                    <Route path='/' element={user ? <UserPage /> : <HomePage />} />
                    <Route path='/login' element={<LoginAndRegister type={'login'} />} />
                    <Route path='/register' element={<LoginAndRegister type={'register'} />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='/*' element={<PageNotFound />} />
                </Routes>}
        </div>
    )
}
