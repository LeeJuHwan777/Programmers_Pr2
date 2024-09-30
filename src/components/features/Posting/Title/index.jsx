import styled from "@emotion/styled";
export default function PostingTitle ({ titleStr }) {
  return (
    <TitleWrapper>{titleStr}</TitleWrapper>
  );
};

const TitleWrapper = styled.h2`
    padding: 6px;
    margin-bottom: 15px;
    font-size: 18px;
`;