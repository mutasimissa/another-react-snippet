import mailIcon from "../../assets/mail-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";

export const TeamMemberCardAction = (props) => {
  const { phone, mail } = props;
  return (
    <div className="card-action-wrapper">
      <a className="card-icon" href={`tel:${phone}`}>
        <img src={phoneIcon} alt="icon" />
      </a>
      <a className="card-icon" href={`mailto:${mail}`}>
        <img src={mailIcon} alt="icon" />
      </a>
    </div>
  );
};
