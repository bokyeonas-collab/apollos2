export interface Program {
  id: string;
  trackType: 'learning' | 'action';
  trackNumber: string;
  title: string;
  emojiIcon: string;
  subBadge?: string;
  oneLinerSlogan: string;
  shortDesc: string;
  fullDesc: string;
  schedule: string;
  duration: string;
  format: string;
  target: string;
  recommendations: string[];
  curriculum: string[];
  readingBooks: string[];
  iconName: string;
}

export const PROGRAMS: Program[] = [
  {
    id: 'bookclub',
    trackType: 'learning',
    trackNumber: '학습 트랙',
    title: '아볼로 북클럽',
    emojiIcon: '📖',
    subBadge: '3-8주 독서모임',
    oneLinerSlogan: '철학·신학·인문학·문학 등 시즌별 지정도서를 읽고 간단한 서평을 나누는 북클럽',
    shortDesc: '철학·신학·인문학·문학 등 시즌별 지정도서를 읽고 간단한 서평을 나누는 북클럽',
    fullDesc: '단순히 책을 요약하는 모임이 아닙니다. 텍스트가 오늘날 우리의 삶과 신앙, 한국 사회의 갈등 지점에 던지는 질문을 발굴하고, 서로 다른 세대와 입장의 멤버들이 치열하고 안전하게 대화합니다.',
    schedule: '격주 화/목 저녁 7:30 (온·오프라인 병행)',
    duration: '시즌별 3-8주 독서모임',
    format: '발제문 사전 공유 + 2시간 심층 토론',
    target: '고전을 혼자 읽기 버거웠던 분, 교회나 일상에서 사회적 고민을 털어놓기 어려웠던 분',
    recommendations: [
      '혼자 읽기에 버거운 텍스트를 함께 대화하며 재미있게 완독하고 싶은 분',
      '신앙과 일상의 접점을 책 속에서 찾고 싶은 분'
    ],
    readingBooks: [
      '한나 아렌트 『예루살렘의 아이히만』',
      '디트리히 본회퍼 『신도의 공동생활』',
      'C.S. 루이스 『순전한 기독교』',
      '마이클 샌델 『공정하다는 착각』'
    ],
    curriculum: [
      '1회차: 텍스트 개관 및 시대적 배경 탐구',
      '2회차: 핵심 쟁점 분석과 발제 토론',
      '3회차: 한국 사회 맥락과의 대화',
      '4회차: 나의 삶에 적용하는 최종 서평 완성'
    ],
    iconName: 'BookOpen'
  },
  {
    id: 'studium',
    trackType: 'learning',
    trackNumber: '학습 트랙',
    title: '아볼로 스투디움',
    emojiIcon: '✍️',
    subBadge: '12주 정규 과정',
    oneLinerSlogan: '인문·사회·신학 고전을 읽고 발제문을 쓰며, 튜터와 동료의 피드백을 통해 최종 서평을 완성하는 기독 인문학 글쓰기 학교',
    shortDesc: '인문·사회·신학 고전을 읽고 발제문을 쓰며, 튜터와 동료의 피드백을 통해 최종 서평을 완성하는 기독 인문학 글쓰기 학교',
    fullDesc: '내면의 생각을 논리적인 문장으로 정련하는 체계적인 아카데믹 글쓰기 과정입니다. 연구원 튜터의 밀착 첨삭과 동료 크리틱을 통해 한 학기 동안 3편의 완결된 비평문을 작성합니다.',
    schedule: '매주 토요일 오전 10:00 (오프라인 서대문 연구실)',
    duration: '12주 정규 과정',
    format: '강의 40분 + 크리틱 80분 + 개별 첨삭 피드백',
    target: '자신의 생각을 논리적인 글로 남기고 싶은 분, 신학적·인문학적 사유의 근육을 기르고 싶은 연구자/청년',
    recommendations: [
      '읽는 데서 끝나지 않고, ‘내 관점’이 오롯이 담긴 글을 써보고 싶은 분',
      '근대·현대 사상을 신앙의 눈으로 단단하게 통찰하고 싶은 분'
    ],
    readingBooks: [
      '움베르토 에코 『논문 작성법 강의』',
      '자크 엘륄 『세상 속의 그리스도인』',
      '라인홀드 니버 『도덕적 인간과 비도덕적 사회』'
    ],
    curriculum: [
      '기초 4주: 비판적 읽기와 질문 형성법',
      '심화 4주: 논증 구조 설계 및 1차 초고 집필',
      '완성 4주: 상호 피드백 크리틱 및 최종 원고 탈고'
    ],
    iconName: 'PenTool'
  },
  {
    id: 'oneday',
    trackType: 'learning',
    trackNumber: '학습 트랙',
    title: '아볼로 클래스',
    emojiIcon: '💡',
    subBadge: '시즌별 클래스',
    oneLinerSlogan: '성경학교, 특강, 계절 세미나 등 다양한 주제로 깊이 있게 탐구하는 배움의 장',
    shortDesc: '성경학교, 특강, 계절 세미나 등 다양한 주제로 깊이 있게 탐구하는 배움의 장',
    fullDesc: '정규 코스 참여가 부담스러웠던 분들을 위해 준비된 3시간 오픈 세미나입니다. 시대의 가장 뜨거운 키워드를 선정하여 전문가의 강연을 듣고 참여자 전원이 밀도 있게 질문합니다.',
    schedule: '매월 셋째 주 금요일 저녁 7:30 (온라인 Zoom)',
    duration: '1일 북클럽/워크숍 (3시간)',
    format: '기조 강연 + Q&A 라운드테이블',
    target: '아볼로의 모임을 가볍게 경험해보고 싶은 입문자, 특정 시사 이슈의 기독교적 해법을 고민하는 분',
    recommendations: [
      '다른 모임에 참여하기 전 아볼로의 분위기를 가볍게 경험해보고싶은 분',
      '교회 외에도 새로운 커뮤니티를 찾고 있는 분'
    ],
    readingBooks: [
      '시즌별 기획 주제 도서 1권 (발췌독 가이드 제공)'
    ],
    curriculum: [
      '1부: 이슈 브리핑 및 주제 도서 해제 (60분)',
      '2부: 소그룹 쟁점 토론 (60분)',
      '3부: 종합 정리 및 사유 나눔 (30분)'
    ],
    iconName: 'Compass'
  },
  {
    id: 'table',
    trackType: 'action',
    trackNumber: '활동 트랙',
    title: '아볼로 테이블',
    emojiIcon: '🔬',
    subBadge: '프로젝트성 모임',
    oneLinerSlogan: 'AI윤리·정치·젠더·노동 등 관심있는 사회 이슈를 자유롭게 공부하고 결과물을 남기는 프로젝트 모임',
    shortDesc: 'AI윤리·정치·젠더·노동 등 관심있는 사회 이슈를 자유롭게 공부하고 결과물을 남기는 프로젝트 모임',
    fullDesc: '추상적인 담론을 넘어 구체적인 현실의 문제를 프로젝트로 해결합니다. 멤버들이 직접 연구팀을 꾸려 데이터 조사, 현장 인터뷰, 정책 제안 리포트 발간까지 이어지는 실천적 연구 모임입니다.',
    schedule: '월 2회 정기 프로젝트 미팅 (온·오프라인 병행)',
    duration: '프로젝트성 모임 (시즌별 2-3개월)',
    format: '팀별 자율 연구 + 연구원 멘토링 + 결과 발표회',
    target: '연구를 통해 사회 변화를 도모하고 싶은 청년 활동가, 크리스천 직장인 및 연구자',
    recommendations: [
      '세상의 이슈를 신앙의 관점으로 해석해보고 싶은 분',
      '혐오와 갈등의 세상 속에서 화해의 길을 만들고 싶은 분'
    ],
    readingBooks: [
      '현안 관련 최신 저널 및 통계 데이터',
      '각 연구 주제별 필독 아티클 5편'
    ],
    curriculum: [
      '1단계: 연구 주제 선정 및 가설 설정',
      '2단계: 당사자 및 전문가 심층 인터뷰',
      '3단계: 복음주의적 대안 프레임워크 수립',
      '4단계: 이슈 페이퍼 발행 및 오픈 세미나 개최'
    ],
    iconName: 'Users'
  },
  {
    id: 'dmz',
    trackType: 'action',
    trackNumber: '활동 트랙',
    title: '아볼로 DMZ',
    emojiIcon: '🕊️',
    subBadge: '대화 모임(예정)',
    oneLinerSlogan: '세대, 성별, 신앙 유무 등 서로 다른 입장을 가진 사람들이 모여 특정 주제에 대해 대화나누는 라운드테이블',
    shortDesc: '세대, 성별, 신앙 유무 등 서로 다른 입장을 가진 사람들이 모여 특정 주제에 대해 대화나누는 라운드테이블',
    fullDesc: '진영 논리와 양극화가 심화된 시대, 서로 다른 진영의 목소리를 한 식탁에 초대합니다. 상대를 논박하거나 설득하는 것이 아니라, 상대방이 왜 그렇게 생각하게 되었는지 끝까지 경청하는 비폭력 대화의 장입니다.',
    schedule: '기수별 별도 공지 (인스타그램 공지 참조)',
    duration: '대화 모임(예정)',
    format: '퍼실리테이터 진행 + 경청 라운드 + 침묵과 성찰',
    target: '안전한 공간에서 내 솔직한 고민을 나누고 싶은 분, 진영 논리를 넘어 진짜 대화를 나누고 싶은 분',
    recommendations: [
      '안전한 공간에서 내 솔직한 고민을 나누고 싶은 분',
      "진영 논리나 편견을 넘어 '나와 다른 사람'과 진짜 대화해보고 싶은 분"
    ],
    readingBooks: [
      '파커 J. 파머 『모든 것의 가장자리에서』',
      '미로슬라브 볼프 『공공신학』',
      '마틴 부버 『나와 너』'
    ],
    curriculum: [
      '규칙: 상대의 발언을 중간에 자르지 않기 / 정답 단언 금지',
      '1라운드: 나의 삶에서 가장 아팠던 갈등의 순간',
      '2라운드: 반대편의 입장에서 세계를 바라보기',
      '3라운드: 화해를 위한 작은 한 걸음 제안'
    ],
    iconName: 'MessageCircle'
  },
  {
    id: 'view',
    trackType: 'action',
    trackNumber: '활동 트랙',
    title: '아볼로 VIEW',
    emojiIcon: '📑',
    subBadge: '정기 콘텐츠 발행',
    oneLinerSlogan: '아볼로의 시선이 담긴 연구진 칼럼, 우수 서평, 인터뷰 등을 엮어 온라인 아카이빙 콘텐츠 제작',
    shortDesc: '아볼로의 시선이 담긴 연구진 칼럼, 우수 서평, 인터뷰 등을 엮어 온라인 아카이빙 콘텐츠 제작',
    fullDesc: '아볼로에서 빚어진 치열한 사유와 문장들을 사회의 더 넓은 독자들과 나눕니다. 시대의 흐름을 읽는 인문·사회 비평과 사유의 조각들을 정기적인 온라인 아카이빙 콘텐츠로 제작하여 배포합니다.',
    schedule: '정기 발행 (아볼로 웹 및 SNS)',
    duration: '정기 콘텐츠 발행',
    format: '온라인 아카이빙 콘텐츠 및 칼럼 발행',
    target: '아볼로가 세상을 바라보는 관점을 필진으로 함께 표현하고 싶은 사람',
    recommendations: [
      '아볼로가 세상을 바라보는 관점을 필진으로 함께 표현하고 싶은 사람'
    ],
    readingBooks: [
      '아볼로 연구진 시대 칼럼',
      '동문 우수 서평 아카이브',
      '주제별 심층 인터뷰 기획'
    ],
    curriculum: [
      '필진 기획 회의 및 주제 발제',
      '초고 작성 및 연구진 크리틱',
      '원고 교정 및 온라인 아카이빙 발행'
    ],
    iconName: 'Mail'
  }
];
