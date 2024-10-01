import styled from "@emotion/styled";

export default function PostingMainImg({ mainImgPath }) {
  return (
      <MainImgWrapper src={mainImgPath} alt="PostingMainImg" />
  );
}
const MainImgWrapper = styled.img`
  max-width: 270px;
  margin-bottom: 12px;
`;