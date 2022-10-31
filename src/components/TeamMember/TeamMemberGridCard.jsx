import { TeamMemberCardAction } from ".";
import { TeamMemberAvatar } from ".";
import { TeamMemberLocation } from ".";
import { TeamMemberName } from ".";

export const TeamMemberGridCard = (props) => {
  const { item } = props;
  return (
    <div className="member-grid-card">
      <div className="card-overlay" />
      <div className="card-content">
        <TeamMemberName name={item.name} />
        <TeamMemberAvatar avatar={item.picture} />
        <TeamMemberLocation location={item.location} />
        <TeamMemberCardAction mail={item.email} phone={item.phone} />
      </div>
    </div>
  );
};
