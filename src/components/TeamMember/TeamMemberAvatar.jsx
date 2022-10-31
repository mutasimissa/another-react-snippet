export const TeamMemberAvatar = ({ avatar }) => {
  const { medium } = avatar;
  return (
    <div className="member-avatar">
      <img src={medium} alt="member" />
    </div>
  );
};
