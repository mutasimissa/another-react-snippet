import { TeamMemberCardAction } from ".";
import { TeamMemberAvatar } from ".";
import { TeamMemberLocation } from ".";
import { TeamMemberName } from ".";

export const TeamMemberListCard = (props) => {
  const { item } = props;
  return (
    <div className="member-list-card">
      <div className="card-overlay" />
      <TeamMemberAvatar avatar={item.picture} />
      <div className="card-content">
        <div>
          <TeamMemberName name={item.name} />
          <TeamMemberLocation location={item.location} />
        </div>
        <TeamMemberCardAction mail={item.email} phone={item.phone} />
      </div>
    </div>
  );
};
