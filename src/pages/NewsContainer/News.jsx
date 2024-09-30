import styled from "@emotion/styled";
import PostingProfileDate from "../../components/features/Posting/ProfileDate";
import "./News.css";

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
        <p>MZ세대를 홀린 인기 포스팅</p>
        <NewsComponent>
          <div className="posting-card">
            <PostingProfileDate
              nameStr={"이주환"}
              imgPath={"/News/Blog/postingProfile.png"}
              dateStr={"Sep 13, 2024"}
            ></PostingProfileDate>
          </div>

          <div className="posting-card">
            <p>내용</p>
          </div>

          <div className="posting-card">
            <p>내용</p>
          </div>

          <div className="posting-card">
            <p>내용</p>
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
  display: flex;
  gap: 3rem;
`;
