import PostingBadge from "../Badge";
import PostingProfileDate from "../ProfileDate";
import PostingTitle from "../Title";

export default function PostingCard() {
  return (
    <div>
      <PostingBadge badgeStr={"HTML"} />
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
