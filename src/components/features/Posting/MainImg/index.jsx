import styled from "@emotion/styled";

export default function PostingMainImg({ mainImgPath }) {
  return (
      <MainImgWrapper src={mainImgPath} alt="PostingMainImg" />
  );
}
const MainImgWrapper = styled.img`
  width: 100%;
  margin-bottom: 12px;
`;