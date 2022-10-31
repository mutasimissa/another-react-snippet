import { TeamMemberListCard } from ".";

export const TeamMemberList = (props) => {
  const { data } = props;
  return (
    <div className="list-view-wrapper">
      {data.map((item, index) => {
        return <TeamMemberListCard key={index} item={item} />;
      })}
    </div>
  );
};
