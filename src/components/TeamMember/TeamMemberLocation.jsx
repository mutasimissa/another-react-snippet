export const TeamMemberLocation = ({ location }) => {
  const { city } = location;
  return <p className="member-location">{city}</p>;
};
