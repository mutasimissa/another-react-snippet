export const TeamMemberName = ({ name }) => {
  return (
    <h3 className="member-name">{`${name.title} ${name.first} ${name.last}`}</h3>
  );
};
