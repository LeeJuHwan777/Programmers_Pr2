import PostingMainImg from "../MainImg";
import PostingTitle from "../Title";
import PostingProfileDate from "../ProfileDate";
import BadgeItems from "../BadeItems";
import { PostingMainImgPath, PostingTitleStr, PostingNameStr, PostingProfileImgPath, PostingDateStr } from "../../../../constants/News/Posting";

export default function PostingCard() {
  return (
    <div>
      <PostingMainImg mainImgPath={PostingMainImgPath}/>
      <BadgeItems />
      <PostingTitle
        titleStr={PostingTitleStr}
      />
      <PostingProfileDate
        nameStr={PostingNameStr}
        imgPath={PostingProfileImgPath}
        dateStr={PostingDateStr}
      />
    </div>
  );
}