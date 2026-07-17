function Button({ children, className = "", variant = "primary", type = "button", ...props }) {
  const variants = {
    primary: "bg-[#044335] text-white hover:bg-[#008A6E]",
    secondary: "border border-slate-200 bg-white text-[#1E293B] hover:border-[#00A884]/40 hover:text-[#00A884]",
    ghost: "bg-transparent text-[#1E293B] hover:bg-[#F4F7FC]",
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#00A884] focus:ring-offset-2 ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
