import styled from "@emotion/styled";

export default function NewsNavigation() {
  return (
    <CustomNavigation>
      <NewsNavigationWrapper className="swiper-button-prev">
        <img src="/News/Blog/prev.png" alt="이전" />
      </NewsNavigationWrapper>
      <NewsNavigationWrapper className="swiper-button-next">
        <img src="/News/Blog/next.png" alt="다음" />
      </NewsNavigationWrapper>
    </CustomNavigation>
  );
}
const NewsNavigationWrapper = styled.button`
  border: none;
  background-color: var(--main);
  margin: 38px 75px 0 0;
  cursor: pointer;
`;

const CustomNavigation = styled.div``;