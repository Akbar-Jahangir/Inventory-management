import { useState } from "react";
import { Input } from "./Input/Input";
import Button from "./Button/Button";
import { GoogleSvg, LogoSvg } from "./IconsSvgs";
import { useNavigate } from "react-router";
import { createUser } from "../store/AuthSlice/signUpSlice/signUpSlice";
import { uid } from "uid";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Signup: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isName, setIsName] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isConfirmPassword, setIsConfirmPassword] = useState<boolean>(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validate name
    if (!name || name.trim() === "") {
      setIsName(false);
      return;
    } else {
      setIsName(true);
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Please enter your email");
      return;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError("");
    }

    // Validate password
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!password) {
      setPasswordError("Please enter your password");
      return;
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters, include a capital letter, and a special character"
      );
      return;
    } else {
      setPasswordError("");
    }

    // Validate confirm password
    if (confirmPassword !== password) {
      setIsConfirmPassword(false);
      return;
    } else {
      setIsConfirmPassword(true);
    }
    const userId = uid();
    dispatch(createUser({ name, email, password, userId }));

    navigate("/inventory");
  };

  return (
    <div
      className="w-[90%] h-[90vh] overflow-y-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      <div
        className="h-fit flex flex-col items-center dark:text-white text-gray space-y-3
       dark:bg-[#1E1E1E] dark:rounded-lg dark:p-4"
      >
        <LogoSvg width="48px" height="48px" />

        <h2 className="font-semibold text-3xl ">Create an account</h2>
        <p>Start your 30-day free trial.</p>

        <form onSubmit={handleSubmit} className="w-[100%] space-y-3 h-fit">
          <Input
            label="Name*"
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          {!isName && <p className="error">Please enter your name</p>}

          <Input
            label="Email*"
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error">{emailError}</p>}

          <Input
            label="Password*"
            type="password"
            name="password"
            value={password}
            placeholder="Create a password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error">{passwordError}</p>}

          <Input
            label="Confirm Password*"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {!isConfirmPassword && (
            <p className="error">Passwords do not match</p>
          )}

          <Button type="submit" label="Get started" btnClass=" w-[100%] py-[8px] px-[14px] border rounded-md text-white bg-primary border-none" />
         

          <p className="text-center py-4">
            Already have an account?{" "}
            <NavLink to={'/inventory'}>
            <span className="text-[#0F50AA] font-semibold">Log in</span>
            </NavLink>
           
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
