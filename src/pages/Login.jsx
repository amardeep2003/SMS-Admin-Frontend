// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { FaEye, FaEyeSlash, FaUserGraduate } from "react-icons/fa";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaUserGraduate } from "react-icons/fa";
import { useNavigate, Navigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { useAuth } from "../context/AuthContext";
import { loginAdmin } from "../services/authApi";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");

if (token) {
  return <Navigate to="/dashboard" replace />;
}

  // const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await loginAdmin(data);

      // Save Token
      localStorage.setItem("accessToken", response.data.accessToken);

      // Save Admin
      localStorage.setItem("admin", JSON.stringify(response.data.admin));

      toast.success(response.data.message);

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="row w-100 justify-content-center">
        <div className="col-md-5 col-lg-4">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <div className="text-center mb-4">
                <FaUserGraduate size={60} className="text-primary mb-3" />

                <h2 className="fw-bold">Student Management</h2>

                <p className="text-muted">Admin Login</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email */}

                <div className="mb-3">
                  <label className="form-label">Email</label>

                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Enter Email"
                    {...register("email", {
                      required: "Email is required",

                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,

                        message: "Invalid Email",
                      },
                    })}
                  />

                  <div className="invalid-feedback">
                    {errors.email?.message}
                  </div>
                </div>

                {/* Password */}

                <div className="mb-4">
                  <label className="form-label">Password</label>

                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Password"
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

                  <div className="text-danger small mt-1">
                    {errors.password?.message}
                  </div>
                </div>

                {/* Button */}

                <button
                  className="btn btn-primary w-100"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
