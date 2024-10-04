import styled from "@emotion/styled";
import "./News.css";
// import PostingSwiper from "../../components/common/Swiper/Posting";
// import PostingCard from "../../components/features/Posting/PostingCard";
import PostingSwiper from "../../components/common/Swiper/Posting";

export default function News() {
  return (
    <NewsWrapper>
      {/* <div className="job">
        <p>어머, 이건 꼭 봐야돼! 채용 정보</p>
        <NewsComponent>
          <div className="job-card">
            <p>내용</p>
          </div>

          <div className="job-card">
            <p>내용</p>
          </div>

          <div className="job-card">
            <p>내용</p>
          </div>
        </NewsComponent>
      </div> */}

      <div className="posting">
        <span>MZ세대를 홀린 인기 포스팅</span>
        <NewsComponent>
          <PostingCardWrapper>
            <PostingSwiper />
          </PostingCardWrapper>

          {/* <PostingCardWrapper>
            <PostingCard />
          </PostingCardWrapper>

          <PostingCardWrapper>
            <PostingCard />
          </PostingCardWrapper> */}
        </NewsComponent>
      </div>

      {/* <div className="repository">
        <p>매력적인 리포지토리</p>
        <NewsComponent>
          <div className="repository-card">
            <p>내용</p>
          </div>
          <div className="repository-card">
            <p>내용</p>
          </div>
          <div className="repository-card">
            <p>내용</p>
          </div>
          <div className="repository-card">
            <p>내용</p>
          </div>
        </NewsComponent>
      </div> */}
    </NewsWrapper>
  );
}
const NewsWrapper = styled.div`
  width: 95%;
  padding: 1rem;
`;

const NewsComponent = styled.div`
  width: 100%;
  display: flex;
  gap: 51px;
`;

const PostingCardWrapper = styled.div`
  padding: 12px;
  margin-top: 16px;
  // max-width: 320px;
  width: 100%;
  border: 1px solid var(--postingCard);
  border-radius: 10px;
`;
