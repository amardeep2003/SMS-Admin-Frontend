// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import ForgotPassword from "./pages/ForgotPassword";
import Trainers from "./pages/Trainers";
import Batches from "./pages/Batches";
import Affiliates from "./pages/Affiliates";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/students" element={<Students />} />

          <Route path="/courses" element={<Courses />} />

          <Route path="/trainers" element={<Trainers />} />

          <Route path="/batches" element={<Batches />} />

          <Route path="/affiliate" element={<Affiliates />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
