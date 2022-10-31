export const Page = (props) => {
  return (
    <div className="page-wrapper">
      <h1 className="page-title">{props.title}</h1>
      <div className="page-content-wrapper">{props.children}</div>
    </div>
  );
};
