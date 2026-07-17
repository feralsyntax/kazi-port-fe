import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";

// Simulate an API request for registration
function registerRequest(email, university, course, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Basic mock condition: fail if the email is already taken
      if (email === "taken@example.com") {
        reject(new Error("This email is already registered."));
      } else {
        resolve({ email, university, course });
      }
    }, 1000);
  });
}

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    university: "",
    course: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    // Client-side password validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsLoading(true);

    try {
      // Fire network simulation
      const newUser = await registerRequest(
        formData.email,
        formData.university,
        formData.course,
        formData.password
      );
      console.info("Registration Successful:", newUser);
      
      // Handle your post-registration logic here (e.g., auto-login or redirect)

    } catch (err) {
      setError(err.message || "Something went wrong during sign up.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-12rem)] bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        <Card className="w-full max-w-2xl p-8 sm:p-10">
          <div className="max-w-xl">
            {/* The Badge transformed to your brand theme */}
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#00A884]">
              Join KaziPort
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Create Account
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Build your verified digital career passport in minutes.
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
              label="University"
              id="university"
              name="university"
              type="text"
              placeholder="e.g., Kabarak University"
              value={formData.university}
              onChange={handleChange}
              required
            />

            <Input
              label="Course"
              id="course"
              name="course"
              type="text"
              placeholder="e.g., Computer Science"
              value={formData.course}
              onChange={handleChange}
              required
            />

            <Input
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Min 8 characters"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <Input
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Re-enter password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            {/* Premium Button with Disabled and Loading States */}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Sign Up"}
              {!isLoading && <ArrowRight size={16} className="ml-2" />}
            </Button>
          </form>

          <p className="mt-6 text-sm text-slate-600">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-[#00A884]">
              Login
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Register;
