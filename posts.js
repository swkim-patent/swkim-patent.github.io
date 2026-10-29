/*
  sewonlog 글 목록
  ------------------------------------------------------------
  새 글은 아래 형식으로 맨 위에 추가합니다. (날짜순 정렬은 자동)

  {
    id: "영문-소문자-주소",          // 글 주소: sewonlog.com/#/post/이 값
    date: "2026-10-30",              // YYYY-MM-DD
    category: "travel",              // patent(업무 칼럼) · trip(출장) · travel(여행)
                                     // food(음식) · golf(골프) · daily(일상)
    title:   "제목",                 // 언어별로 쓰려면 { ko:"…", en:"…", ja:"…" }
    summary: "목록에 보이는 한두 줄 요약",
    place:   "장소 (생략 가능)",
    cover:   "images/사진.jpg",      // 대표 사진 (생략하면 색 배경)
    body: `
      <p>본문 문단</p>
      <img src="images/사진.jpg" alt="">
    `
  },
*/
window.POSTS = [
  {
    id: "hello-sewonlog",
    date: "2026-10-29",
    category: "daily",
    title: {
      ko: "sewonlog를 시작합니다",
      en: "Starting sewonlog",
      ja: "sewonlogを始めます"
    },
    summary: {
      ko: "일과 일상을 함께 기록하는 공간을 열었습니다.",
      en: "A new place to keep a record of work and life.",
      ja: "仕事と日常をともに記録する場所を開きました。"
    },
    body: {
      ko: `
        <p>변리사로 일한 지 꽤 오랜 시간이 흘렀습니다. 그동안 수많은 발명과 출장길, 그리고 그 사이사이의 일상이 있었지만 따로 기록해 두지는 못했습니다.</p>
        <p>이곳 sewonlog에는 특허 업무를 하며 느낀 점과 함께 출장과 여행, 맛있는 음식, 골프 같은 일상의 이야기를 천천히 남겨 보려 합니다.</p>
        <p>찾아 주셔서 감사합니다.</p>`,
      en: `
        <p>It has been quite some time since I started working as a patent attorney. Over the years there have been countless inventions, business trips and everyday moments in between, but I never kept a record of them.</p>
        <p>Here at sewonlog, I plan to slowly collect thoughts from patent practice along with stories of business trips, travel, good food, golf and daily life.</p>
        <p>Thank you for visiting.</p>`,
      ja: `
        <p>弁理士として働き始めてから、ずいぶん長い時間が経ちました。その間、数多くの発明や出張、そしてその合間の日常がありましたが、記録として残すことはありませんでした。</p>
        <p>このsewonlogでは、特許業務を通じて感じたことに加え、出張や旅行、おいしい食事、ゴルフなど日常のお話を少しずつ残していきたいと思います。</p>
        <p>ご訪問いただきありがとうございます。</p>`
    }
  }
];
