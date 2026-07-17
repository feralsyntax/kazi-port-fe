import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Lock } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";

function loginRequest(email, password) {
  // Simulate an API request for login
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "user@example.com" && password === "password") {
        resolve({ email, password });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000);
  });
}

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  // States to manage API request status and display messages
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  // The function that intercepts the form and fires the request
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(""); // Reset previous errors before a new attempt

    try {
      // Call the login request using the form states
      const user = await loginRequest(formData.email, formData.password);
      console.info("Login Successful:", user);
      
      // Handle your post-login success here (e.g., save token, redirect to dashboard)
      
    } catch (err) {
      // Catch and display validation errors from the server
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false); // Enable the button again
    }
  };

  return (
    <div className="min-h-[calc(100vh-12rem)] bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        <Card className="w-full max-w-2xl p-8 sm:p-10">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00A884]">Welcome back</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Sign in to your KaziPort account.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Continue building a portfolio that reflects your academic and professional journey.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* Visual Error Message Display */}
            {error && (
              <div className="rounded-md bg-red-50 p-3 text-sm text-red-600 border border-red-200">
                {error}
              </div>
            )}

            <Input
              label="Email address"
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <div className="flex items-center justify-between text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-[#00A884]" />
                Secure sign in
              </div>
              <div className="flex items-center gap-2">
                <Lock size={16} className="text-[#00A884]" />
                Encrypted experience
              </div>
            </div>

            {/* Added dynamic text and disabled states to prevent double submission */}
            <Button type="submit" className="w-full" disabled={isLoading|| !formData.email || !formData.password}>
              {isLoading ? "Signing in..." : "Continue"}
              {!isLoading && <ArrowRight size={16} className="ml-2" />}
            </Button>
          </form>

          <p className="mt-6 text-sm text-slate-600">
            New here? <Link to="/register" className="font-semibold text-[#00A884]">Create an account</Link>
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Login;
