import styled from "@emotion/styled";

export default function PostingBadge({ badgeStr }) {
  return <PostingBadgeHTML>{badgeStr}</PostingBadgeHTML>;
}
const PostingBadgeHTML = styled.div`
  border-radius: 5px;
  font-size: 14px;
  padding: 6px;
  display: flex;
  justify-content: center;
  background-color: var(--badgeHTML);
  border: 1px solid var(--main);
  width: 25%;
  margin-bottom: 12px;
`;

// const PostingBadgeCSS = styled.div`
//   font-size: 10px;
//   padding: 6px;
//   display: flex;
//   justify-content: center;
//   background-color: yellow;
//   border: 1px solid white;
//   width: 25%;
// `;

// const PostingBadgeJS = styled.div`
//   font-size: 10px;
//   padding: 6px;
//   display: flex;
//   justify-content: center;
//   background-color: yellow;
//   border: 1px solid white;
//   width: 25%;
// `;

// const PostingBadgeReact = styled.div`
//   font-size: 10px;
//   padding: 6px;
//   display: flex;
//   justify-content: center;
//   background-color: yellow;
//   border: 1px solid white;
//   width: 25%;
// `;
