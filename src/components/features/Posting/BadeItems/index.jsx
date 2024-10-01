import styled from "@emotion/styled";
import PostingBadge from "../Badge";

export default function BadgeItems () {
  return (
    <BadgeItemsWrapper>
      <PostingBadge badgeStr={"JavaScript"}/>
      <PostingBadge badgeStr={"React"}/>
      <PostingBadge badgeStr={"HTML"}/>
      <PostingBadge badgeStr={"CSS"}/>
    </BadgeItemsWrapper>
  );
};
const BadgeItemsWrapper = styled.div`
    display: flex;
    gap: 6px;
`;