import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  sendForgotOtp,
  verifyForgotOtp,
  resetPassword,
} from "../services/authApi";

import logo from "../assets/images/logicgyan-icon.webp";
import companyName from "../assets/images/logicgyan.webp";

import "../assets/images/css/login.css";

function ForgotPassword() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [timer, setTimer] = useState(0);

  const [token, setToken] = useState("");

  const [phone, setPhone] = useState("");

  const [otp, setOtp] = useState("");

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    document.title = "Forgot Password | LogicGyan Admin";
  }, []);

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // ============================
  // SEND OTP
  // ============================

  const handleSendOtp = async () => {
    if (!phone.trim()) {
      return toast.error("Phone number is required");
    }

    try {
      setLoading(true);

      const res = await sendForgotOtp({
        phone,
      });

      setToken(res.data.token);

      toast.success(res.data.message);

      setTimer(60);

      setStep(2);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // ============================
  // VERIFY OTP
  // ============================

  const handleVerifyOtp = async () => {
    if (!otp.trim()) {
      return toast.error("Enter OTP");
    }

    try {
      setLoading(true);

      const res = await verifyForgotOtp(
        {
          phone,
          otp,
        },
        token,
      );

      toast.success(res.data.message);

      setStep(3);
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // ============================
  // RESET PASSWORD
  // ============================

  const handleResetPassword = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);

      const res = await resetPassword(
        {
          phone,
          newPassword: formData.newPassword,
          confirmPassword: formData.confirmPassword,
        },
        token,
      );

      toast.success(res.data.message);

      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-right">
        <div className="login-box">
          <div className="company-header">
            <img src={logo} alt="logo" className="company-logo" />

            <img src={companyName} alt="LogicGyan" className="company-name" />
          </div>

          <h2 className="login-title">Forgot Password</h2>

          <p className="login-subtitle">
            Reset your account password securely.
          </p>

          {/* STEP 1 */}

          {step === 1 && (
            <>
              <div className="mb-4">
                <label className="form-label">Phone Number</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <button
                className="btn-login w-100"
                onClick={handleSendOtp}
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </button>
            </>
          )}

          {/* STEP 2 */}

          {step === 2 && (
            <>
              <div className="mb-3">
                <label className="form-label">OTP</label>

                <input
                  className="form-control"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>

              <button
                className="btn-login w-100"
                onClick={handleVerifyOtp}
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>

              <div className="text-center mt-3">
                {timer > 0 ? (
                  <small>Resend OTP in {timer}s</small>
                ) : (
                  <button className="btn btn-link" onClick={handleSendOtp}>
                    Resend OTP
                  </button>
                )}
              </div>
            </>
          )}

          {/* STEP 3 */}

          {step === 3 && (
            <>
              <div className="mb-3">
                <label className="form-label">New Password</label>

                <input
                  type="password"
                  className="form-control"
                  value={formData.newPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      newPassword: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Confirm Password</label>

                <input
                  type="password"
                  className="form-control"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>

              <button
                className="btn-login w-100"
                onClick={handleResetPassword}
                disabled={loading}
              >
                {loading ? "Updating..." : "Reset Password"}
              </button>
            </>
          )}

          <div className="text-center mt-4">
            <button className="btn btn-link" onClick={() => navigate("/")}>
              Back to Login
            </button>
          </div>
        </div>
      </div>

      <div className="login-left">
        <div>
          <h1 className="right-title">
            Secure Password
            <br />
            Recovery
          </h1>

          <p className="right-desc">
            Verify your registered mobile number using OTP and create a new
            password securely.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
