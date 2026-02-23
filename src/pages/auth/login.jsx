import CommonForm from '@/components/common/form';
import { loginFormControls } from '@/config';
import { setUser } from '@/store/auth-slice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';


const initialState = {
  email: '',
  password: ''
}

const AuthLogin = () => {

  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  function onSubmit(e) {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      console.log("Stored users:", localStorage.getItem("users"));
      console.log("Redux state after dispatch:", formData);
      toast.error("All fields are required!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const validUser = users.find((user) =>
      user.email === formData.email &&
      user.password === formData.password
    );

    if (!validUser) {
      toast.error("Invalid email or password");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(validUser));
    dispatch(setUser(validUser));

    toast.success("Login successful!");

    navigate('/user/home');
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account
          <Link className="font-medium ml-2 text-primary hover:underline" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
      {
        <CommonForm
          formControls={loginFormControls}
          buttonText={"Sign In"}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit} />
      }
    </div>
  )
}

export default AuthLogin
