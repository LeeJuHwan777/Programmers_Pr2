import PostingMainImg from "../MainImg";
import PostingTitle from "../Title";
import PostingProfileDate from "../ProfileDate";
import BadgeItems from "../BadeItems";

export default function PostingCard() {
  return (
    <div>
      <PostingMainImg mainImgPath={"/News/Blog/img.png"}/>
      <BadgeItems />
      <PostingTitle
        titleStr={
          "Launching Oxy-UI: A Powerful and Modern UI Library for Your WebProjects"
        }
      />
      <PostingProfileDate
        nameStr={"이주환"}
        imgPath={"/News/Blog/postingProfile.png"}
        dateStr={"Sep 13, 2024"}
      />
    </div>
  );
}
