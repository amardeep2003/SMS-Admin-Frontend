import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail, MdLockOutline } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import logo from "../assets/images/logicgyan-icon.webp";
import companyName from "../assets/images/logicgyan.webp";
import avatar from "../assets/images/hacker.png";

import { loginAdmin } from "../services/authApi";

import "../assets/images/css/login.css";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    document.title = "Login | LogicGyan Admin";
  }, []);

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await loginAdmin(data);

      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("admin", JSON.stringify(response.data.admin));

      toast.success(response.data.message || "Login Successful");

      navigate("/dashboard", {
        replace: true,
      });
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Unable to login. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* Left Side */}

      <div className="login-right">
        <div className="login-box">
          <div className="company-header">
            <img src={logo} alt="LogicGyan Logo" className="company-logo" />

            <img src={companyName} alt="LogicGyan" className="company-name" />
          </div>

          <h2 className="login-title">Welcome Back!</h2>

          <p className="login-subtitle">
            Sign in to access your Student Management Dashboard.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}

            <div className="mb-4">
              <label className="form-label">Email Address</label>

              <div className="input-group">
                <span className="input-group-text">
                  <MdEmail />
                </span>

                <input
                  type="email"
                  autoComplete="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",

                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                />
              </div>

              <div className="text-danger mt-1">{errors.email?.message}</div>
            </div>

            {/* Password */}

            <div className="mb-2">
              <label className="form-label">Password</label>

              <div className="input-group">
                <span className="input-group-text">
                  <MdLockOutline />
                </span>

                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />

                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="text-danger mt-1">{errors.password?.message}</div>
            </div>

            {/* Forgot Password */}

            <div className="text-end mb-4">
              <a href="#" className="text-decoration-none">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}

            <button
              type="submit"
              className="btn-login w-100"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Right Side */}

      <div className="login-left">
        <div>
          <h1 className="right-title">
            Empowering Careers
            <br />
            with Practical
            <br />
            Skill Training
          </h1>

          <p className="right-desc">
            LogicGyan empowers students with industry-ready skills through
            Vocational Training (VT), Long-Term (LT) Programs, Internships, and
            Real-Time Projects. Our mission is to bridge the gap between
            academic learning and industry requirements.
          </p>

          <div className="review">
            <img src={avatar} alt="Rock Amar" />

            <div>
              <div className="review-name">Rock Amar</div>

              <div className="review-role">
                MERN Stack Developer
                <br />
                at Logixhunt
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
