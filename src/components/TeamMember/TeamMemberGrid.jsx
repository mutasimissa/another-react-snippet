import { TeamMemberGridCard } from ".";

export const TeamMemberGrid = (props) => {
  const { data } = props;
  return (
    <div className="grid-view-wrapper">
      {data.map((item, index) => {
        return <TeamMemberGridCard key={index} item={item} />;
      })}
    </div>
  );
};