import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from "./Module";
import PrivateRoute from './Route/privateroute';
import PublicRoute from './Route/publicroute';
import { Counter,SelfCounter } from './Component';
import { AboutUsPage, DashboardPage, LoginPage, ProfilePage, LoginUser, Registration, WelcomePage ,FormDialog} from './page';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/header" element={<Header />} />
                <Route exact path="" element={<DashboardPage />} />
                <Route exact path="/about" element={<AboutUsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/modal" element={<FormDialog />} />
                <Route path="/selfcounter" element={<SelfCounter />} />
                <Route path="/welcome" element={<PrivateRoute><WelcomePage/></PrivateRoute>} />
                <Route path="/loginuser" element={<PublicRoute><LoginUser/></PublicRoute>} />
                <Route path="/registration" element={<PublicRoute><Registration/></PublicRoute>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;