export default function Container({ children, className }) {
  return (
    <>
      <div className={`bg-white border-2 border-slate-200 rounded-md p-2 ${className}`}>
        {children}
      </div>
    </>
  );
}
