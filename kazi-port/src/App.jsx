import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Portfolio from "./pages/Portfolio";
import Search from "./pages/Search";
import Withdraw from './components/Withdraw'
import Dashboard from './components/Dashboard'



function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
      <Route path="/register" element={<MainLayout><Register /></MainLayout>} />
      <Route path="/portfolio/:username" element={<MainLayout><Portfolio /></MainLayout>} />
      <Route path="/checkout" element={<MainLayout><Withdraw /></MainLayout>} />
      <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />

      <Route
        path="*"
        element={
          <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-slate-900">404</h1>
              <p className="mt-3 text-slate-600">The page you are looking for does not exist.</p>
            </div>
          </div>
        }
      />
    </Routes>
  );
}

export default App;