import styled from "@emotion/styled";
export default function PostingDate({ dateStr }) {
  return <DateWrapper>{dateStr}</DateWrapper>;
}
const DateWrapper = styled.span`
  font-size: 12px;
  color: var(--fc--gray1);
`;
