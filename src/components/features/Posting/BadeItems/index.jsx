import styled from "@emotion/styled";
import PostingBadge from "../Badge";

export default function BadgeItems({ badges }) {
  return (
    <BadgeItemsWrapper>
      {badges.map((badge, index) => (
        <PostingBadge key={index} badgeStr={badge} />
      ))}
    </BadgeItemsWrapper>
  );
};
const BadgeItemsWrapper = styled.div`
    display: flex;
    gap: 6px;
`;