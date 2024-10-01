import styled from "@emotion/styled";
// export default function PostingBadge({ badgeStr }) {
//   // 각 badgeStr 값에 대한 컴포넌트 매핑
//   const badgeComponents = {
//     HTML: PostingBadgeHTML,
//     CSS: PostingBadgeCSS,
//     JavaScript: PostingBadgeJS,
//     React: PostingBadgeReact,
//   };

//   // badgeStr에 해당하는 컴포넌트를 선택하고 렌더링
//   const BadgeComponent = badgeComponents[badgeStr] || null;
//   return BadgeComponent ? <BadgeComponent>{badgeStr}</BadgeComponent> : null;
// }

export default function PostingBadge({ badgeStr }) {
  // 각 badgeStr 값에 대한 컴포넌트 매핑
  const badgeClass = {
    HTML: "HTML",
    CSS: "CSS",
    JavaScript: "JS",
    React: "React",
  };

  // badgeStr에 해당하는 컴포넌트를 선택하고 렌더링
  const BadgeClass = badgeClass[badgeStr] || "";
  return <BadgeWrapper className={BadgeClass}>{badgeStr}</BadgeWrapper>;
}

const BadgeWrapper = styled.div`
  border-radius: 5px;
  font-size: 10px;
  padding: 6px;
  display: flex;
  justify-content: center;
  border: 1px solid var(--main);
  color: var(--main);
  margin-bottom: 12px;

  &.HTML {
    background-color: var(--badgeHTML);
  }
  &.CSS {
    background-color: var(--badgeCSS);
  }
  &.JS {
    background-color: var(--badgeJS);
  }
  &.React {
    background-color: var(--badgeReact);
  }
`;



// 첫번째 방법
// const PostingBadgeHTML = styled.div`
//   border-radius: 5px;
//   font-size: 10px;
//   padding: 6px;
//   display: flex;
//   justify-content: center;
//   background-color: var(--badgeHTML);
//   border: 1px solid var(--main);
//   color: var(--main);
//   margin-bottom: 12px;
// `;

// const PostingBadgeCSS = styled.div`
//   border-radius: 5px;
//   font-size: 10px;
//   padding: 6px;
//   display: flex;
//   justify-content: center;
//   background-color: var(--badgeCSS);
//   border: 1px solid var(--main);
//   color: var(--main);
//   margin-bottom: 12px;
// `;

// const PostingBadgeJS = styled.div`
//   border-radius: 5px;
//   font-size: 10px;
//   padding: 6px;
//   display: flex;
//   justify-content: center;
//   background-color: var(--badgeJS);
//   border: 1px solid var(--main);
//   color: var(--main);
//   margin-bottom: 12px;
// `;

// const PostingBadgeReact = styled.div`
//   border-radius: 5px;
//   font-size: 10px;
//   padding: 6px;
//   display: flex;
//   justify-content: center;
//   background-color: var(--badgeReact);
//   border: 1px solid var(--main);
//   color: var(--main);
//   margin-bottom: 12px;
// `;
