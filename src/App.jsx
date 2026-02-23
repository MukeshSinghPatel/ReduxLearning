import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin-view/layout"
import AdminDashboard from "./pages/admin-view/Dashboard"
import UserLayout from "./components/user-view/layout"
import UserHome from "./pages/user-view/Home"
import SuccessPage from "./pages/user-view/Success"
import CheckAuth from "./components/common/CheckAuth"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { setUser } from "./store/auth-slice"
import Comapny from "./pages/user-view/Comapny"
import ViewJobs from "./pages/user-view/Jobs"

function App() {
  
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));

    if (storedUser) {
      dispatch(setUser(storedUser));
    }
  }, []);

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>

        <Route path="/user" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <UserLayout />
          </CheckAuth>
        }>
          <Route path="home" element={<UserHome />} />
          <Route path="success" element={<SuccessPage />} />
          <Route path="companies" element={<Comapny />} />
          <Route path="jobs" element={<ViewJobs />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
