import CommonForm from '@/components/common/form';
import { registerFormControls } from '@/config';
import { setUser } from '@/store/auth-slice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';


const initialState = {
  UserName: '',
  email: '',
  password: ''
}

const AuthRegister = () => {

  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  function onSubmit(e) {
    console.log("Stored users:", localStorage.getItem("users"));
    console.log("Redux state after dispatch:", formData);
    console.log("Buttin triggered");
    e.preventDefault();

    if (!formData.UserName || !formData.email || !formData.password) {
      toast.error("All fields are required");
      return;
    }

    const existingUser = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = existingUser.find((user) => user.email === formData.email);

    if (userExists) {
      toast.error("User already exist");
      return;
    }

    existingUser.push(formData);
    localStorage.setItem("users", JSON.stringify(existingUser));

    // dispatch(setUser(formData));

    navigate('/auth/login');

  }


  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">
          Already have an account
          <Link className="font-medium ml-2 text-primary hover:underline" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
      {
        <CommonForm
          formControls={registerFormControls}
          buttonText={"Sign Up"}
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit} />
      }
    </div>
  )
}

export default AuthRegister
