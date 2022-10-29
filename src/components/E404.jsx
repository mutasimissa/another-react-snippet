export const E404 = () => {
  return (
    <div>
      <h1>404 Error</h1>
      <button onClick={() => (window.location.href = "/")}>Home</button>
    </div>
  );
};
