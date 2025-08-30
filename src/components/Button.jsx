export default function Button({ children, type, className = "", onClick, disabled }) {
  return (
    <button
      className={`p-2 bg-slate-300 hover:bg-green-300 transition-color duration-500 ease-in-out cursor-pointer ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
