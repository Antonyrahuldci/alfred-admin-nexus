import React, { useState, useCallback } from "react";
import {
  AtSymbolIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import apiFunctions from "../api/apiFunctions";
import mainlogo from "../assets/Images/logosimbli.png";
// Alert wrapper
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Snackbar state
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");

  const navigate = useNavigate();

  // Show snackbar
  const showSnackbar = useCallback((message, severity = "info") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  }, []);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await apiFunctions.login({ email, password });
      if (response?.status === 200) {
        const token = response.data.token;
        const username = response.data.data.username;
        localStorage.setItem("access-token", token);
        localStorage.setItem("user", username);

        // if (onLoginSuccess) onLoginSuccess();

        showSnackbar("Login successful! Redirecting...", "success");

        setTimeout(() => {
          navigate("/overview", { replace: true });
        }, 1500);
      } else {
        throw new Error(response?.data?.message || "Login failed.");
      }
    } catch (err) {
      console.error("Login failed:", err);
      showSnackbar(err.message || "An unexpected error occurred.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 via-emerald-600 to-green-900 px-4 py-3 Login_Bg">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] p-5 Whole_Contens">
        {/* Header with Logo */}
        <div className="text-center mb-6">
          <img
            src={mainlogo}
            alt="Logo"
            className="mx-auto mb-4 mt-3 Main_logo"
            style={{ width: "140px", objectFit: "contain" }}
          />
          <h2 className="text-3xl font-bold Welcome_Back">Welcome Back <span className="Welcome_Admin">(Admin)</span> </h2>
          <p className="mt-0 text-sm Sign_In">
            Please sign in to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium Labels"
            >
              Email address
            </label>
            <div className="mt-2 relative input-wrappers">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none lock-icons">
                <AtSymbolIcon className="h-5 w-5 " />
              </span>
              <input
                type="email"
                id="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-3 rounded-lg Input_Field"
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium Labels"
            >
              Password
            </label>
            <div className="mt-2 relative input-wrappers">
              {/* Lock icon */}
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none lock-icons">
                <LockClosedIcon className="h-5 w-5 " />
              </span>

              {/* Password input */}
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-3 rounded-lg Input_Field" 
                placeholder="••••••••"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center  lock-icons"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-lg  
                       disabled:opacity-50 transition Sign_In_Btn"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{
            width: "100%",
            ...(snackbarSeverity === "success" && {
              backgroundColor: "#22c55e",
              color: "#fff",
            }),
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
