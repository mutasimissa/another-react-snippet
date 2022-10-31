import searchIcon from "../../assets/search-icon.svg";

export const PageToolbarSearch = (props) => {
  const { val, changeHandler } = props;
  return (
    <>
    <div className="search-input-wrapper">
      <div className="search-icon-wrapper">
        <img src={searchIcon} alt="icon" />
      </div>
      <input type="text" value={val} onChange={changeHandler} />
    </div>
    </>
  );
};
