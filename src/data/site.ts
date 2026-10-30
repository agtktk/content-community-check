export const site={
  "name": "정보이용료 커뮤니티 읽기",
  "description": "디시 등 커뮤니티 글에서 확인 가능한 정보와 개인 경험·광고를 구분합니다.",
  "editor": "결제노트 편집",
  "updatedAt": "2026-10-30",
  "keyword": "정보이용료현금화방법디시",
  "slug": "dcinside-claims-check",
  "tag": "커뮤니티 정보 검증",
  "number": "07",
  "answer": "정보이용료현금화방법디시 검색 결과의 게시글은 작성자의 주장으로 읽어야 합니다. 게시 시점, 실제 결제 서비스, 원문 근거와 광고성 연결을 따로 확인하고 다른 사람의 경험을 본인 회선의 조건으로 옮겨 적용하지 마세요.",
  "intro": "디시 등 커뮤니티 글에서 확인 가능한 정보와 개인 경험·광고를 구분합니다.",
  "steps": [
    {
      "name": "게시 날짜와 적용 조건 확인",
      "description": "오래된 화면이나 다른 통신사 사례가 현재 본인에게 적용되는지 살펴봅니다. 작성자가 사용한 기기와 결제 서비스가 제시되지 않았다면 그 부분은 미확인입니다. 좋아요 수나 반복된 댓글이 정책 근거를 대신하지 않습니다."
    },
    {
      "name": "근거와 추천 링크 구분",
      "description": "공식 정책을 인용했다면 해당 기관 원문에서 문맥을 확인합니다. 상담 유도와 할인 비율이 포함된 글은 어떤 조건이 빠졌는지 질문하세요. 이 사이트는 특정 게시글이나 커뮤니티 작성자의 신원·후기를 인증하지 않습니다."
    },
    {
      "name": "질문을 올릴 때 정보 최소화",
      "description": "오류 문구와 문제 상황을 설명하되 계정, 전화번호와 주문 식별 정보를 공개하지 않습니다. 비공개 메시지로 비밀번호를 요청하는 상대에게 자료를 보내지 마세요. 실제 해결 여부는 본인 주문과 명세서에서 확인합니다."
    }
  ],
  "accent": "#43315d" ,
  contact: {
    name: '누티켓', phone: '010-8111-1555', kakaoId: 'N1348',
    kakaoUrl: 'https://qr.kakao.com/talk/MBsKvshDmtamG2EuQNKdmPuGFJQ-',
    sourceUrl: 'https://xn--od1b246c0uc.kr', verifiedAt: '2026-10-03'
  }
} as const;
export const topics=[{id:'basics',name:"커뮤니티 정보 검증",number:'01',description:"디시 등 커뮤니티 글에서 확인 가능한 정보와 개인 경험·광고를 구분합니다."}] as const;
export const phoneHref='tel:'+site.contact.phone.replaceAll('-','');
