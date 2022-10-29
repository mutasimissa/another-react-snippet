export const Error = () => {
  return (
    <div>
      <h1>Unhandled Error</h1>
      <button onClick={() => (window.location.href = "/")}>Home</button>
    </div>
  );
};
