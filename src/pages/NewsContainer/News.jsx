import styled from "@emotion/styled";
import "./News.css";
import PostingCard from "../../components/features/Posting/PostingCard";

export default function News() {
  return (
    <NewsWrapper>
      <div className="job">
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
      </div>

      <div className="posting">
        <span>MZ세대를 홀린 인기 포스팅</span>
        <NewsComponent>
          <div className="posting-card">
            <PostingCard />
          </div>
        </NewsComponent>
      </div>

      <div className="repository">
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
      </div>
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
  gap: 3rem;
`;
