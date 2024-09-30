import styled from "@emotion/styled";
import "../Date/index.jsx";
import PostingDate from "../Date/index.jsx";
import PostingProfile from "../Profile/index.jsx";
export default function PostingProfileDate({ nameStr, imgPath, dateStr }) {
  return (
    <PostingProfileDateWrapper>
      <PostingProfile nameStr={nameStr} imgPath={imgPath}></PostingProfile>
      <PostingDate dateStr={dateStr}></PostingDate>
    </PostingProfileDateWrapper>
  );
}
const PostingProfileDateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
