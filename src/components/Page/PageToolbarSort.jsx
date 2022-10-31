import sortIcon from "../../assets/sorting-icon.svg";
export const PageToolbarSort = ({ clickHandler }) => {
  return (
    <div className="sort-icon-wrapper" onClick={clickHandler}>
      <img src={sortIcon} alt="icon" />
    </div>
  );
};
