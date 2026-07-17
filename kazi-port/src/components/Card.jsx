function Card({ children, className = "" }) {
  return (
    <div className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(11,42,74,0.06)] ${className}`.trim()}>
      {children}
    </div>
  );
}

export default Card;
