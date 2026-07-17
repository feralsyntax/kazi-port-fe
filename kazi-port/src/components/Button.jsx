function Button({ children, className = "", variant = "primary", type = "button", ...props }) {
  const variants = {
    primary: "bg-[#00A884] text-white shadow-[0_10px_25px_rgba(0,168,132,0.18)] hover:bg-[#008A6E] hover:shadow-[0_12px_30px_rgba(0,168,132,0.24)]",
    secondary: "border border-slate-200 bg-white text-[#1E293B] hover:border-[#00A884]/40 hover:text-[#00A884] hover:bg-[#F7FFFC]",
    ghost: "bg-transparent text-[#1E293B] hover:bg-[#F4F7FC]",
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#00A884] focus:ring-offset-2 ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
