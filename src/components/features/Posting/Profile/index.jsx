import styled from "@emotion/styled";
export default function PostingProfile({ nameStr, imgPath }) {
  return (
    <ProfileWrapper>
      <img src={imgPath} alt="PostingProfile" />
      <span>{nameStr}</span>
    </ProfileWrapper>
  );
}

const ProfileWrapper = styled.div`
  font-size: 12px;
  color: var(--fc--gray1);
  display: flex;
  align-items: center;
  gap: 4px;
`;