function Card({ children, className = "" }) {
  return (
    <div className={`rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur ${className}`.trim()}>
      {children}
    </div>
  );
}

export default Card;
