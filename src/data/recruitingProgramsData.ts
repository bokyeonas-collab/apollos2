export interface CurriculumItem {
  step: string;
  type: string;
  topic: string;
  desc: string;
  question?: string;
}

export interface DistinctFeature {
  num: string;
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface BookDetailItem {
  title: string;
  author?: string;
  publisher?: string;
  coverImage?: string;
  desc?: string;
}

export interface GuideDetailItem {
  name: string;
  role?: string;
  bullets?: string[];
  desc?: string;
  photoUrl?: string;
}

export interface RecruitingProgram {
  id: string;
  title: string;
  badge: '모집 마감' | '모집 중';
  category: '아볼로 북클럽' | '아볼로 스투디움' | '아볼로 클래스';
  isOpen: boolean;
  posterImage: string;
  bookTitle: string;
  bookAuthor: string;
  introCopy: string;
  schedule: string;
  method?: string;
  dates?: string[];
  guides: string;
  fee: string;
  bankAccount: string;
  deadline: string;
  inquiry: string;
  applyLink?: string;
  books?: BookDetailItem[];
  guidesList?: GuideDetailItem[];
  whyBook?: {
    leadQuote?: string;
    reality: string;
    possibilityQuote?: string;
    possibilityDesc?: string;
    gain?: string;
  };
  distinctFeatures?: DistinctFeature[];
  curriculum?: CurriculumItem[];
  recommendations?: string[];
  faq?: FaqItem[];
  fullContent?: string;
  note: string;
}

export const RECRUITING_PROGRAMS: RecruitingProgram[] = [
  // =========================================================================
  // 1. 아볼로 북클럽 시리즈
  // =========================================================================
  {
    id: 'feather-s1',
    title: '[아볼로 북클럽] 깃털반 1기',
    badge: '모집 마감',
    category: '아볼로 북클럽',
    isOpen: false,
    posterImage: '/assets/aistudio/____________________________1___ebfbfc43.jpg',
    bookTitle: '한없이 가벼운 인문 고전',
    bookAuthor: '아볼로 북클럽 선정 도서',
    introCopy: '한없이 가벼운 마음으로 시작하는 독서와 대화의 시간, 아볼로 북클럽 깃털반 1기.',
    schedule: '매주 목요일 오전 10시 - 12시 (총 8회)',
    method: '온·오프라인 병행 (아볼로 사무실 & Zoom)',
    guides: '이강일 소장 (한국복음주의운동연구소)',
    fee: '모집 마감 (시즌별 별도 안내)',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '두꺼운 고전 읽기에 매번 좌절했던 분',
      '부담 없이 가벼운 분량으로 꾸준한 독서 습관을 들이고 싶은 분',
      '정답 없는 안전한 식탁에서 타인의 시선을 듣고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'feather-s2',
    title: '[아볼로 북클럽] 깃털반 2기',
    badge: '모집 마감',
    category: '아볼로 북클럽',
    isOpen: false,
    posterImage: '/assets/aistudio/____________________________2___461fae4e.png',
    bookTitle: '한없이 가벼운 인문 사상선',
    bookAuthor: '아볼로 북클럽 선정 도서',
    introCopy: '가벼운 날갯짓으로 일상의 사유를 시작하는 아침 독서 모임, 깃털반 2기.',
    schedule: '매주 목요일 오전 10시 - 12시 (총 8회)',
    method: '온·오프라인 병행 (아볼로 사무실 & Zoom)',
    guides: '이강일 소장 (한국복음주의운동연구소)',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '아침 시간을 지적이고 상쾌하게 깨우고 싶은 분',
      '신앙과 인문학의 접점을 편안한 분위기에서 탐색하고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'feather-s3',
    title: '[아볼로 북클럽] 깃털반 3기',
    badge: '모집 마감',
    category: '아볼로 북클럽',
    isOpen: false,
    posterImage: '/assets/aistudio/____________________________3___c411aad5.png',
    bookTitle: '세계현대사와 포스트휴먼 입문',
    bookAuthor: '아볼로 북클럽 강독 교재',
    introCopy: '목요일 아침, 사연 많은 세계현대사를 돌아보고 포스트휴먼 시대를 살펴봅니다.',
    schedule: '3/17 ~ 5/19 매주 (목) 오전 10시 - 12시 (총 10회)',
    method: '온·오프라인 병행 (아볼로 사무실 & Zoom)',
    guides: '이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '급변하는 기술 문명과 현대사의 흐름을 인문학적 시선으로 조망하고 싶은 분',
      '책과 함께하는 상쾌한 아침 루틴을 만들고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'feather-s4',
    title: '[아볼로 북클럽] 깃털반 4기',
    badge: '모집 마감',
    category: '아볼로 북클럽',
    isOpen: false,
    posterImage: '/assets/aistudio/____________________________4___acd5ede2.png',
    bookTitle: '한국현대사와 한국기독교사 백년',
    bookAuthor: '아볼로 북클럽 강독 교재',
    introCopy: '가을 아침, 굴곡진 한국현대사와 한국기독교사 백년의 발자취를 돌아봅니다.',
    schedule: '10/13(목) ~ 12/15(목) 매주 (목) 오전 10 - 12시, 총 10회',
    method: '온·오프라인 병행 (아볼로 사무실 서강빌딩 & Zoom)',
    guides: '이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '한국 교회가 사회 속에서 겪어온 역사적 궤적을 객관적으로 알고 싶은 분',
      '신앙의 역사 속에서 오늘의 길을 묻고자 하는 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'feather-s5',
    title: '[아볼로 북클럽] 깃털반 5기',
    badge: '모집 마감',
    category: '아볼로 북클럽',
    isOpen: false,
    posterImage: '/assets/aistudio/____________________________5___034e6d2a.jpg',
    bookTitle: '믿음을 묻는 딸에게 아빠가 · 리추얼의 종말 · 그리고 저너머에',
    bookAuthor: '정한욱, 한병철, 스캇 펙',
    introCopy: '“질주하던 말에서 내린 인디언은 자기 영혼을 기다립니다.” 깃털반도 함께 읽으며 영혼을 기다립니다.',
    schedule: '5월 12일 ~ 7월 21일 / 매주 금요일 오전 10-12시 (총 10회)',
    method: '온·오프라인 병행',
    guides: '이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '바쁜 일상에 쫓겨 잃어버린 내면의 고요와 균형을 회복하고 싶은 분',
      '가족, 리추얼, 신앙의 본질을 세 권의 책을 통해 입체적으로 탐색하고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'feather-s6',
    title: '[아볼로 북클럽] 깃털반 6기',
    badge: '모집 마감',
    category: '아볼로 북클럽',
    isOpen: false,
    posterImage: '/assets/aistudio/_________________________________6_ce95aae9.jpg',
    bookTitle: '고백록 (Confessiones)',
    bookAuthor: '아우구스티누스',
    introCopy: '“어디선가 ‘들고 읽어라’라는 노랫소리에 성경을 읽고 회심한 아우구스티누스. 우리도 이제 그의 고백록을 들고 읽을 때가 충분히 되었습니다.”',
    schedule: '매주 목요일 오전 10시 - 12시 (총 8회)',
    method: '온·오프라인 병행 (아볼로 사무실 & Zoom)',
    guides: '이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '기독교 최대의 고전 『고백록』을 포기하지 않고 끝까지 완독하고 싶은 분',
      '신앙의 회의와 방황, 은혜의 체험을 솔직하게 털어놓고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'feather-s7',
    title: '[아볼로 북클럽] 깃털반 7기',
    badge: '모집 마감',
    category: '아볼로 북클럽',
    isOpen: false,
    posterImage: '/assets/aistudio/____________________________7___3dcb5b4f.jpg',
    bookTitle: '가부장제와 사랑의 윤리 인문선',
    bookAuthor: '아볼로 북클럽 선정 도서',
    introCopy: '인간의 사랑이 가부장제를 벗어나면 어떻게 될까요. 상쾌하고, 우아한 아침 독서, 깃털반 시즌7을 시작합니다.',
    schedule: '매주 목요일 오전 10시 - 12시 (총 8회)',
    method: '온·오프라인 병행',
    guides: '이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '오늘날 관계와 사랑, 가족의 의미를 젠더와 신학적 관점에서 질문하고 싶은 분',
      '안전하고 열린 공론장에서 따뜻하게 토론하고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'feather-s10',
    title: '[아볼로 북클럽] 깃털반 10기',
    badge: '모집 마감',
    category: '아볼로 북클럽',
    isOpen: false,
    posterImage: '/assets/aistudio/_________________________________10_ba2abd44.jpg',
    bookTitle: '박태웅의 AI강의 2026 · 팔레스타인 100년 전쟁',
    bookAuthor: '박태웅 (한빛비즈), 라시드 칼리디 (열린책들)',
    introCopy: '우리를 도발하는 최신 이슈, ‘인공지능’과 ‘팔레스타인’을 공부합니다.',
    schedule: '5/7(목) ~ 6/24(수), 매회 오전 10시 - 12시 (온라인 Zoom)',
    method: '온라인 Zoom 중심',
    guides: '이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '생성형 AI가 몰고 올 미래 사회와 윤리적 물음을 짚어보고 싶은 분',
      '팔레스타인 분쟁의 역사적 맥락과 평화·화해의 가능성을 공부하고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'feather-junior',
    title: '[아볼로 북클럽] 주니어 깃털반 1기',
    badge: '모집 마감',
    category: '아볼로 북클럽',
    isOpen: false,
    posterImage: '/assets/aistudio/____________________________________e3d13acd.png',
    bookTitle: '청소년 자기생각 퍼올리기 인문 문학',
    bookAuthor: '아볼로 북클럽 주니어 선정 도서',
    introCopy: '남의 이야기를 들을 때, 떠오르는 느낌에서 시작하는 ‘자기생각’. 그 자기생각을 퍼올리는 읽고 쓰는 모임에 초대합니다.',
    schedule: '1/8(토) ~ 2/26(토) 매주 토 오후 2-4시 (총 8회)',
    method: '대면: 아볼로 사무실 (서울 마포구)',
    guides: '이강일 소장 & 전문 튜터진',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '자기 생각과 감정을 글로 표현하는 즐거움을 경험하고 싶은 청소년',
      '독후감 숙제를 넘어 책을 통한 나만의 시선을 만들고 싶은 중고등학생'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'literature-tour-s1',
    title: '[아볼로 북클럽] 문학여행 1기',
    badge: '모집 마감',
    category: '아볼로 북클럽',
    isOpen: false,
    posterImage: '/assets/aistudio/______________________________1___cd76c646.jpg',
    bookTitle: '물고기는 존재하지 않는다 · 우리가 빛의 속도로 갈 수 없다면',
    bookAuthor: '룰루 밀러, 김초엽',
    introCopy: '간절히 기다려 온 가을밤, 아볼로 북클럽의 문학여행단과 두런두런 이야기 여행을 떠나볼까요.',
    schedule: '가을 시즌 금요일 저녁 8시 - 10시 (총 6회)',
    method: '온라인 Zoom 및 대면 병행',
    guides: '김서진 방송작가, 이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '지친 일상에 문학의 따스한 문장으로 온기를 더하고 싶은 분',
      '과학과 문학이 만나는 매혹적인 서사를 함께 읽고 나누고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'literature-tour-s2',
    title: '[아볼로 북클럽] 문학여행 2기',
    badge: '모집 마감',
    category: '아볼로 북클럽',
    isOpen: false,
    posterImage: '/assets/aistudio/______________________________2___8cb27ac6.jpg',
    bookTitle: '혼모노 · 소년이 온다',
    bookAuthor: '성해나, 한강 (2024 노벨문학상 수상 작가)',
    introCopy: '“마음에 바람이 부는 그곳으로 문학여행을 떠납니다.” 성해나의 혼모노와 한강의 소년이 온다를 함께 읽습니다.',
    schedule: '10월 24일(금) ~ 11월 28일(금) 매주 금 저녁 8시 - 10시 (총 6회)',
    method: '온라인 Zoom 및 대면 병행',
    guides: '김서진 방송작가, 이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '한국 현대 소설의 가장 뜨거운 문장들을 깊이 있게 음미하고 싶은 분',
      '시대의 상처와 기억을 문학을 통해 정직하게 마주하고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'literature-tour-s3',
    title: '[아볼로 북클럽] 문학여행 3기',
    badge: '모집 마감',
    category: '아볼로 북클럽',
    isOpen: false,
    posterImage: '/images/recruiting_iliad_odyssey.png',
    bookTitle: '일리아스 & 오디세이아',
    bookAuthor: '호메로스 (임명현 편역, 돋을새김)',
    introCopy: '이름만 알고 평생 못 읽을 줄 알았던 고전문학의 끝판왕, [일리아스 & 오디세이아] 함께 읽어요! 3,000년 전 그리스인들의 이야기는 놀랍도록 오늘날 우리의 삶과 똑같습니다.',
    schedule: '10월 30일(금) ~ 12월 18일(금), 매주 금요일 저녁 8시 ~ 10시 (총 8주)',
    method: '온라인 5회(Zoom) + 오프라인 3회(서울 마포구 동교로 136 서강빌딩 502호)',
    guides: '이강일 소장 (한국복음주의운동연구소)',
    fee: '10만원',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '2026년 10월 23일(금)까지',
    inquiry: '인스타그램 @the_apollos__',
    books: [
      {
        title: '일리아스 & 오디세이아',
        author: '호메로스 (임명현 편역)',
        publisher: '돋을새김',
        coverImage: '/assets/aistudio/___________2701b5d8.jpg',
        desc: '고전문학의 끝판왕. 3,000년 전 그리스인들의 대서사시를 통해 인간의 방황과 귀향을 마주합니다.'
      }
    ],
    guidesList: [
      {
        name: '이강일 소장',
        role: '한국복음주의운동연구소 소장',
        bullets: [
          '서울 장신대 객원 교수 / 종교학 박사 / 前 IVF 간사',
          '지난 10년간 북클럽과 스투디움을 이끌어 온 든든한 고전 길잡이'
        ],
        desc: '고전 원전의 문맥을 짚어주고, 참여자들의 일상과 신앙의 질문을 안전하게 엮어냅니다.'
      }
    ],
    recommendations: [
      '방대한 고전 대서사시를 이번 기회에 반드시 완독하고 싶은 분',
      '분노와 공감, 방황과 귀향… 인간의 정처 없는 삶을 내 언어로 답하고 싶은 분',
      '남의 요약이나 영상 대신, 내 눈으로 직접 읽고 서평 1편을 쓰고 싶은 분',
      '그리스 로마 신화에 대한 사전 지식 없이도 부담 없이 고전에 입문하고 싶은 분'
    ],
    curriculum: [
      {
        step: '1주차 | 10/30(금)',
        type: '대면 강의',
        topic: '그리스 신화 입문',
        desc: '전체 신화의 계보와 시대적 배경을 간단히 짚고 출발하여 부담 없는 읽기의 기초를 다집니다.'
      },
      {
        step: '2주차 | 11/06(금)',
        type: '온라인 Zoom',
        topic: '일리아스 1',
        desc: '아킬레우스의 분노와 트로이 전쟁의 비극적 서막 강독 및 토론.'
      },
      {
        step: '3주차 | 11/13(금)',
        type: '온라인 Zoom',
        topic: '일리아스 2',
        desc: '영웅들의 대결과 죽음, 인간 운명의 부조리를 정면으로 탐구합니다.'
      },
      {
        step: '4주차 | 11/20(금)',
        type: '온라인 Zoom',
        topic: '일리아스 3',
        desc: '적을 품는 슬픔과 화해, 일리아스의 클라이맥스를 깊이 읽습니다.'
      },
      {
        step: '5주차 | 11/27(금)',
        type: '대면 모임',
        topic: '오디세이아 1',
        desc: '오디세우스의 10년 귀향 여정과 모험의 시작을 나누는 대면 독서 모임.'
      },
      {
        step: '6주차 | 12/04(금)',
        type: '온라인 Zoom',
        topic: '오디세이아 2',
        desc: '괴물과 유혹을 통과하는 오디세우스의 내면적 성장과 고뇌 탐색.'
      },
      {
        step: '7주차 | 12/11(금)',
        type: '온라인 Zoom',
        topic: '오디세이아 3',
        desc: '고향 이타케로의 귀환과 정의의 회복에 대한 심층 발제 토론.'
      },
      {
        step: '8주차 | 12/18(금)',
        type: '대면 마무리',
        topic: '소감문 or 서평 나누기',
        desc: '8주간의 완독 여정을 돌아보며 나만의 관점이 담긴 완결된 서평을 동료들과 나눕니다.'
      }
    ],
    faq: [
      {
        q: '책을 다 못 읽은 주가 생기면 모임에 참여하기 어렵나요?',
        a: '그렇지 않습니다. 다 읽지 못하셨더라도 길잡이와 동료들의 대화를 들으며 전체 흐름을 충분히 따라갈 수 있습니다. 포기하지 않고 자리에 참여하는 것 자체가 북클럽을 완주하는 가장 큰 힘이 됩니다💪'
      },
      {
        q: '대면 모임(1·5·8주차) 장소는 어디인가요?',
        a: '서울시 마포구 동교로 136 서강빌딩 502호 (한국복음주의운동연구소)에서 진행됩니다. (지하철 홍대입구역 및 합정역 인근)'
      },
      {
        q: '기독교인이 아니거나 신앙이 없어도 참여할 수 있나요?',
        a: '물론입니다. 특정 교리나 종교적 신념을 주입하는 자리가 아닙니다. 인문 고전을 통해 인간의 삶과 시대를 깊이 있게 탐구하고 싶은 분이라면 누구나 환영합니다!!'
      }
    ],
    fullContent: `이름만 알고 평생 못 읽을 줄 알았던 고전문학의 끝판왕, [일리아스 & 오디세이아] 함께 읽어요!

분노와 공감, 방황과 귀향… 3,000년 전 그리스인들의 이야기는 놀랍도록 오늘날 우리의 정처없는 삶과 똑같습니다. 남의 해석 대신 이번엔 내 눈으로 직접 읽고 내 언어로 답해봐요.`,
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'literature-summer-honmono',
    title: '[아볼로 북클럽] 여름방학 문학여행 2026기',
    badge: '모집 마감',
    category: '아볼로 북클럽',
    isOpen: false,
    posterImage: '/assets/aistudio/______________________________2026_____________7575eb77.jpg',
    bookTitle: '혼모노',
    bookAuthor: '성해나',
    introCopy: '생각하기를 포기할 때, 잃어버리는 것은 무엇인가. 성해나의 문장을 따라가다 뜻밖에 마주하는 우리의 생각들을 나눕니다.',
    schedule: '8월 3일(월), 5일(수), 10일(월) (총 3회, 오전 10-12시)',
    method: '온라인 Zoom 모임',
    guides: '김서진 작가, 이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '방학 동안 가볍고 밀도 높은 단편소설 강독을 경험하고 싶은 분',
      '젊은 작가상의 날카로운 문제의식을 함께 토론하고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'philosophy-summer-kim',
    title: '[아볼로 북클럽] 여름방학 철학여행 2026기',
    badge: '모집 마감',
    category: '아볼로 북클럽',
    isOpen: false,
    posterImage: '/assets/aistudio/______________________________2026_____________1b758dee.jpg',
    bookTitle: '그리스도인은 왜 인문학을 공부해야 하는가?',
    bookAuthor: '김용규',
    introCopy: '“지성없는 신앙은 맹목이고, 신앙없는 지성은 방황이다.” 서양철학부터 AI문제까지 짚어보며, 신앙의 분별력을 키웁니다.',
    schedule: '8월 3일(월), 5일(수), 10일(월) (총 3회, 저녁 8-10시)',
    method: '온라인 Zoom 모임',
    guides: '이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '신앙생활 중 마주하는 지적 회의와 의문을 정직하게 해소하고 싶은 분',
      '인문학적 교양과 기독교 전통의 풍성한 대화를 경험하고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'philosophy-tour-s6',
    title: '[아볼로 북클럽] 철학여행 6기',
    badge: '모집 마감',
    category: '아볼로 북클럽',
    isOpen: false,
    posterImage: '/assets/aistudio/______________________________6___6ebde067.png',
    bookTitle: '현대프랑스철학사',
    bookAuthor: '창비 편집부',
    introCopy: '한겨울 후기구조주의로 떠나는 아볼로 북클럽 철학여행단 6기. 푸코, 들뢰즈, 데리다의 탈근대 철학을 탐독합니다.',
    schedule: '1/10 ~ 3/28(화) (총 10회) 매주 (화) 저녁 8 - 10시',
    method: '온라인 Zoom 중심',
    guides: '이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '현대 프랑스 사상의 핵심 줄기를 체계적으로 정리하고 싶은 분',
      '절대적 도그마를 넘어 다원화된 세계를 비판적으로 사유하고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'philosophy-tour-s7',
    title: '[아볼로 북클럽] 철학여행 7기',
    badge: '모집 마감',
    category: '아볼로 북클럽',
    isOpen: false,
    posterImage: '/assets/aistudio/______________________________7___983a75bd.jpg',
    bookTitle: '존재론과 형이상학 원전선',
    bookAuthor: '아볼로 철학여행단 선정 도서',
    introCopy: '‘진짜있음’을 찾아가는 아볼로 북클럽 철학여행단 7기. 실재와 본질에 대한 고전적 물음을 던집니다.',
    schedule: '총 10회 모임 (온라인 Zoom 및 대면 병행)',
    method: '온·오프라인 병행',
    guides: '이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '일상의 겉모습 너머 참된 실재와 가치를 탐구하고자 하는 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'history-tour-s1',
    title: '[아볼로 북클럽] 역사탐구 1기',
    badge: '모집 마감',
    category: '아볼로 북클럽',
    isOpen: false,
    posterImage: '/assets/aistudio/_____________________________1___f31d8f04.jpg',
    bookTitle: '대한민국 파시즘과 민주주의 역사 텍스트',
    bookAuthor: '아볼로 북클럽 선정 도서',
    introCopy: '“우리는 정말 자유롭고 평등한 사회를 원하는가?” 대한민국 파시즘과 민주주의의 여정을 살펴보는 역사탐구단 1기.',
    schedule: '총 8회 모임 (온·오프라인 병행)',
    method: '온·오프라인 병행',
    guides: '이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '한국 현대 정치사와 민주주의의 기원을 깊이 이해하고 싶은 분',
      '신앙인의 시민적 책임과 공공성을 성찰하고자 하는 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'han-byung-chul',
    title: '[아볼로 북클럽] 한병철 읽기 1기',
    badge: '모집 마감',
    category: '아볼로 북클럽',
    isOpen: false,
    posterImage: '/assets/aistudio/_____________________________189b6936.png',
    bookTitle: '피로사회 · 고통 없는 사회',
    bookAuthor: '한병철 (문학과지성사, 김영사)',
    introCopy: '일상을 철학으로 풀어내는 독일의 철학자 한병철 읽기. 성과사회의 자기착취와 고통 회피의 시대를 진단합니다.',
    schedule: '총 6회 모임 (격주 금요일 저녁)',
    method: '온라인 Zoom 및 대면 병행',
    guides: '이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '끝없는 경쟁과 자기착취 속에서 번아웃을 겪고 계신 현대인',
      '동시대 가장 날카로운 문화비평 철학자의 저작을 함께 강독하고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'teen-bookclub',
    title: '[아볼로 북클럽] 청소년 아볼로 북클럽',
    badge: '모집 중',
    category: '아볼로 북클럽',
    isOpen: true,
    posterImage: '/images/recruiting_teen_bookclub.png',
    bookTitle: '오디세이아 · 누가복음 · 혼모노 · 이것이 인간인가',
    bookAuthor: '호메로스, 성경, 성해나, 프리모 레비',
    introCopy: '읽기에서 멈추지 않고, ‘내 언어로 쓰는 법’까지! 좋은 생각을 많이 해도 글로 정리해내지 못하면 흩어집니다. 남의 문장이 아닌, ’진짜 내 문장‘으로 생각하는 법을 가르칩니다.',
    schedule: '2026년 11월 7일 ~ 2027년 1월 23일 (격주 토요일 오후 2시 - 4시, 총 6회)',
    method: '한국복음주의운동연구소 (서울 마포구 동교로 136 서강빌딩 502호)',
    guides: '이강일 간사 (복연 소장 / 종교학 박사), 황규태 연구원 (서강대 철학 석사)',
    fee: '36만 원 (강독 세미나, 발제 지도 및 전문 튜터의 1:1 서평 피드백 포함)',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 중 (선착순 마감)',
    inquiry: '인스타그램 @the_apollos__',
    applyLink: 'https://forms.gle/Qb6akEuHTrYZsfta8',
    books: [
      {
        title: '오디세이아',
        author: '호메로스',
        publisher: '도서출판 숲 / 돋을새김',
        coverImage: '/assets/aistudio/___________2701b5d8.jpg',
        desc: '인간의 방황과 귀향, 시련 속에서 지혜를 찾아가는 고대 그리스 서사시의 정수'
      },
      {
        title: '누가복음',
        author: '사도 누가 (신약성서)',
        publisher: '대한성서공회 / 신약성경',
        desc: '소외된 이들을 향한 시선과 예수의 하나님 나라 복음을 텍스트 그대로 정독'
      },
      {
        title: '혼모노',
        author: '성해나',
        publisher: '창비',
        coverImage: '/assets/aistudio/________64fe4d69.jpg',
        desc: '오늘날 젊은 세대의 날카로운 현실 인식과 내면의 욕망을 마주하는 현대 한국 소설'
      },
      {
        title: '이것이 인간인가',
        author: '프리모 레비',
        publisher: '돌베개',
        desc: '아우슈비츠의 비극 속에서도 무너지지 않은 인간의 존엄성과 사유의 책임'
      }
    ],
    guidesList: [
      {
        name: '이강일 간사',
        role: '한국복음주의운동연구소 소장',
        bullets: [
          '서울 장신대 객원 교수 / 종교학 박사 / 前 IVF 간사',
          '청년·청소년들과 20여년간 인문·신학 고전을 읽으며 시대의 질문을 함께 해왔습니다.'
        ]
      },
      {
        name: '황규태 연구원',
        role: '서강대 철학과 석사 (철학적 해석학 전공)',
        bullets: [
          '위기 청소년들과 함께 살며, 글쓰기와 더불어 자신과 세상을 이해하는 법을 가르치고 있습니다.'
        ]
      }
    ],
    recommendations: [
      '중3, 고1 및 청소년 (이외 연령도 환영합니다!)',
      '좋은 생각을 많이 해도 글로 정리해내지 못해 흩어지는 분',
      '남의 문장이 아닌 ‘진짜 내 문장’으로 논리적으로 생각하고 쓰는 법을 배우고 싶은 청소년',
      '‘정해진 답’이 있는 학업용 질문 대신, 내 호기심이 이끄는 대로 고전과 현대 문학을 깊이 읽고 싶은 학생'
    ],
    curriculum: [
      {
        step: '1회 | 11/07(토)',
        type: 'OT & 입문',
        topic: '읽고 쓰는 통쾌함에 대하여',
        desc: ''
      },
      {
        step: '2회 | 11/21(토)',
        type: '고전',
        topic: '호메로스 『오디세이아』',
        desc: ''
      },
      {
        step: '3회 | 12/05(토)',
        type: '고전/성서',
        topic: '『누가복음』',
        desc: ''
      },
      {
        step: '4회 | 12/19(토)',
        type: '현대문학',
        topic: '성해나 『혼모노』',
        desc: ''
      },
      {
        step: '5회 | 01/09(토)',
        type: '역사/증언',
        topic: '프리모 레비 『이것이 인간인가』',
        desc: ''
      },
      {
        step: '6회 | 01/23(토)',
        type: '수료/발표',
        topic: '서평 발표회',
        desc: ''
      }
    ],
    faq: [
      {
        q: '서평이나 논술을 따로 배워본 적이 없어도 되나요?',
        a: '네. 튜터가 글의 뼈대를 잡는 법부터 문장을 다듬는 법까지 단계별로 지도하며 1:1 맞춤 피드백을 진행합니다.'
      },
      {
        q: '책을 끝까지 다 못 읽고 참석해도 되나요?',
        a: '다 읽지 못했더라도 괜찮습니다. 현장에서 튜터와 함께 텍스트를 분석하고 대화하며 핵심 맥락을 충분히 따라갈 수 있습니다.'
      }
    ],
    fullContent: `읽기에서 멈추지 않고, ‘내 언어로 쓰는 법’까지!
좋은 생각을 많이 해도 글로 정리해내지 못하면 흩어집니다.

아볼로에서는 읽고 토론한 내용을 바탕으로, 직접 논리를 세워 나의 생각이 담긴 글을 씁니다.
남의 문장이 아닌, ’진짜 내 문장‘으로 생각하는 법을 가르칩니다.

’정해진 답‘이 있는 학업용 질문 대신, 내 호기심이 이끄는 대로 3,000년 전 고전부터 오늘의 현대 문학까지 넘나들며 나만의 서평을 완성하는 여정에 청소년 여러분을 초대합니다!`,
    note: '현재 신청 및 접수가 진행 중인 프로그램입니다.'
  },

  // =========================================================================
  // 2. 아볼로 스투디움 시리즈
  // =========================================================================
  {
    id: 'studium-small-salvation',
    title: '[아볼로 스투디움] 글쓰기 과정 1기',
    badge: '모집 마감',
    category: '아볼로 스투디움',
    isOpen: false,
    posterImage: '/assets/aistudio/________________________________c33099b1.jpg',
    bookTitle: '나를 위한 작은 구원',
    bookAuthor: '고아롬',
    introCopy: '혼란스러운 삶 속에 나를 알아가는 글쓰기. 에세이 『나를 위한 작은 구원』의 저자 고아롬 작가와 함께합니다.',
    schedule: '총 6주 글쓰기 워크숍 및 서평 첨삭',
    method: '온·오프라인 병행 (아볼로 사무실 & Zoom)',
    guides: '고아롬 작가 (에세이스트)',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '마음속 복잡한 감정과 기억을 정돈된 글과 에세이로 풀어내고 싶은 분',
      '전문 작가의 1:1 맞춤형 글쓰기 피드백을 경험하고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'studium-minister-s7',
    title: '[아볼로 스투디움] 논리적 글쓰기 7기',
    badge: '모집 마감',
    category: '아볼로 스투디움',
    isOpen: false,
    posterImage: '/assets/aistudio/__________________________________7___d853967f.jpg',
    bookTitle: '효과적 메시지 전달을 위한 논리적 글쓰기',
    bookAuthor: '아볼로 스투디움 연구팀',
    introCopy: '효과적인 메시지 전달과 설득력 있는 강론을 위한 사역자 전용 논리적 글쓰기 집중 훈련.',
    schedule: '2025년 3월 5일(수) ~ 6월 4일(수) 오전 10-12시 ZOOM(대면 병행)',
    method: 'Zoom 온라인 (대면 병행)',
    guides: '이강일 소장 & 스투디움 전문 튜터진',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '교회 청년 및 성도들에게 상식과 공감의 언어로 설교·강의를 전달하고 싶은 사역자',
      '주장과 근거가 뚜렷한 논리적 서평 및 논설 작성 역량을 기르고 싶은 목회자'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'studium-writing-discovery',
    title: '[아볼로 스투디움] 서평쓰기 과정 1기',
    badge: '모집 마감',
    category: '아볼로 스투디움',
    isOpen: false,
    posterImage: '/assets/aistudio/__________________________________2c98858a.png',
    bookTitle: '서평 쓰기와 비판적 읽기 교재',
    bookAuthor: '아볼로 스투디움 튜터진',
    introCopy: '“내 생각을 발견하는 쓰기의 희열.” 정독과 1:1 맞춤 서평 피드백을 통해 나만의 사유를 구축합니다.',
    schedule: '01.12 ~ 03.23 매주 목요일 저녁 (총 10회)',
    method: '온라인 Zoom 및 아볼로 사무실 대면 모임',
    guides: '이강일 소장, 이원재 목사 외 튜터진',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '남의 말과 요약이 아닌, 내 언어로 서평 한 편을 끝까지 완성해보고 싶은 분',
      '매주 글에 대한 밀도 높은 1:1 첨삭 피드백을 받고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'studium-theology-s1',
    title: '[아볼로 스투디움] 신학여행 1기',
    badge: '모집 마감',
    category: '아볼로 스투디움',
    isOpen: false,
    posterImage: '/assets/aistudio/______________________________1___c6c18379.jpg',
    bookTitle: '하나님나라 복음과 제자도',
    bookAuthor: '노종문',
    introCopy: '“복음은 ‘하나님 나라는 이미 와 있다!’이다. ‘이미와 아직, 그 어딘가’가 아니다.” 저자 노종문 목사가 복음을 새롭게 안내합니다.',
    schedule: '총 8회 모임 (온라인 Zoom)',
    method: '온라인 Zoom 강의 및 소그룹 토론',
    guides: '노종문 목사 (예일대 신약학 STM, 전 좋은나무 편집장)',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '하나님나라 복음의 성경적이고 실천적인 의미를 근본부터 다시 배우고 싶은 분',
      '일상과 제자도의 연결 고리를 단단하게 정립하고 싶은 청년'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'studium-review-critique-s1',
    title: '[아볼로 스투디움] 아볼로 합평회 1기',
    badge: '모집 마감',
    category: '아볼로 스투디움',
    isOpen: false,
    posterImage: '/assets/aistudio/___________________________0dc11611.jpg',
    bookTitle: '동문 및 회원 창작 서평·에세이 합평집',
    bookAuthor: '아볼로 스투디움 동문',
    introCopy: '‘느낀 건 안전, 배운 건 용기였어요.’ 글쓰기를 다시 시작하고 싶은 분, 아볼로 스투디움 합평이 그리운 동문을 초대합니다.',
    schedule: '5월 17일(수) 저녁 9시 온라인 설명회 후 격주 진행',
    method: '온라인 Zoom 및 오프라인 합평 모임',
    guides: '스투디움 튜터진',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '스투디움 수료 후 글쓰기를 꾸준히 이어가며 동료들의 안전한 피드백을 받고 싶은 분',
      '기고문, 서평, 에세이를 함께 퇴고하며 글의 완성도를 높이고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },

  // =========================================================================
  // 3. 아볼로 클래스 시리즈
  // =========================================================================
  {
    id: 'class-bible-john-s5',
    title: '[아볼로 클래스] 성경학교 시즌5 (요한복음)',
    badge: '모집 중',
    category: '아볼로 클래스',
    isOpen: true,
    posterImage: '/assets/aistudio/1_516d2a7d.png',
    bookTitle: '요한복음',
    bookAuthor: '튜터 노종문 목사',
    introCopy: '요한복음, 길들여지지 않는 복음. 성경 원문 분석을 통해 예수의 생생한 음성을 듣고 맞춤 공부를 진행합니다.',
    schedule: '11/3 (화) - 12/8 (화) (총 6주), 저녁 8시 - 9시 30분',
    method: '온라인 (Zoom)',
    guides: '노종문 목사 (’하나님나라 복음과 제자도‘ 저자, 기윤실 좋은나무 편집주간, 예일대 신약학 STM)',
    fee: '8만 원',
    bankAccount: '신청 링크(구글 폼)를 통해 입금 및 등록 안내',
    deadline: '10월 30일(금)까지',
    inquiry: '인스타그램 @the_apollos__',
    applyLink: 'https://forms.gle/9NTvnW7Vi1mxmUyr8',
    books: [
      {
        title: '요한복음',
        author: '사도 요한 (신약성서)',
        publisher: '대한성서공회 / 신약성경',
        coverImage: '/assets/aistudio/1_516d2a7d.png',
        desc: '성경 원문 분석을 통해 예수의 생생한 음성을 듣고, 예수의 하나님 나라 약속에 비추어 오늘날 우리의 이슈를 조명합니다.'
      }
    ],
    guidesList: [
      {
        name: '노종문 목사',
        role: '튜터',
        bullets: [
          '〈하나님나라 복음과 제자도〉 저자',
          '기윤실 좋은나무 편집주간',
          '예일대 신약학 STM'
        ],
        desc: '신약학 전문성과 하나님 나라 복음의 실천적 관점으로 요한복음 원문을 함께 강독하고 깊이 있는 대화를 나눕니다.'
      }
    ],
    recommendations: [
      '성경 원문 분석을 통해 예수의 생생한 음성을 듣고 싶은 분',
      '‘강의-질문-대화’를 통한 맞춤 공부를 경험하고 싶은 분',
      '예수의 하나님 나라 약속에 비추어 오늘날 우리의 이슈를 조명해보고 싶은 분'
    ],
    curriculum: [
      {
        step: '1주차 | 11/3(화)',
        type: '강의 & 대화',
        topic: '요한복음을 어떻게 읽을 것인가',
        desc: ''
      },
      {
        step: '2주차 | 11/10(화)',
        type: '강의 & 대화',
        topic: '위로부터 오신 분의 표적들',
        desc: ''
      },
      {
        step: '3주차 | 11/17(화)',
        type: '강의 & 대화',
        topic: '위로부터 부어지는 생명',
        desc: ''
      },
      {
        step: '4주차 | 11/24(화)',
        type: '강의 & 대화',
        topic: '보는 자와 보지 못하는 자',
        desc: ''
      },
      {
        step: '5주차 | 12/1(화)',
        type: '강의 & 대화',
        topic: '제자들에게 전하는 하나님 나라의 비밀',
        desc: ''
      },
      {
        step: '6주차 | 12/8(화)',
        type: '강의 & 대화',
        topic: '수난과 부활 이야기, 그리고 아침 식사',
        desc: ''
      }
    ],
    faq: [
      {
        q: '요한복음을 잘 모르면 모임에 참여하기 어렵나요?',
        a: '그렇지 않습니다! 튜터의 강의와 동료들의 대화를 들으며 충분히 차근차근 따라갈 수 있습니다.'
      },
      {
        q: '배경지식이 없어도 괜찮나요?',
        a: '네! 오히려 강의를 천천히 따라가다 보면 자연스럽게 시대적 맥락까지 살필 수 있습니다.'
      }
    ],
    fullContent: `시즌마다 찾아오는 아볼로 성경학교! 이번에는 요한복음입니다.

성경 원문 분석을 통해 예수의 생생한 음성을 듣고, ’강의-질문-대화‘를 통한 맞춤 공부를 진행합니다.

예수의 하나님 나라 약속에 비추어 오늘날 우리의 이슈를 조명해봅니다.`,
    note: '현재 모집이 진행 중인 프로그램입니다.'
  },
  {
    id: 'class-winter-bible-s3',
    title: '[아볼로 클래스] 겨울성경학교 시즌3',
    badge: '모집 마감',
    category: '아볼로 클래스',
    isOpen: false,
    posterImage: '/assets/aistudio/______________________________3_f2b0813d.jpg',
    bookTitle: '신약성서 마태복음 (산상수훈 5-7장)',
    bookAuthor: '신약성서 마태복음',
    introCopy: '원수를 사랑하라! 예수님은 우리에게 어떤 기대를 하신 걸까요? 2026년 새해, 산상수훈 공부로 흐트러진 나의 신앙생활을 리셋해봅니다.',
    schedule: '새해 집중 과정 (총 6주, 온라인 및 대면 병행)',
    method: '온·오프라인 병행',
    guides: '이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '산상수훈의 파격적인 윤리와 하나님 나라의 복음을 본문 그대로 정독하고 싶은 분',
      '새해를 말씀에 대한 깊은 사유와 공부로 시작하고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'class-summer-bible-romans-s2',
    title: '[아볼로 클래스] 여름성경학교 시즌2',
    badge: '모집 마감',
    category: '아볼로 클래스',
    isOpen: false,
    posterImage: '/assets/aistudio/______________________________2_440f1039.jpg',
    bookTitle: '신약성서 로마서',
    bookAuthor: '사도 바울',
    introCopy: 'Q. 로마서의 주제가 과연 ‘형벌대속’일까? 하나님 나라를 믿으라는 예수님, 예수님을 믿으라는 바울?? 하나라도 궁금하다면 함께 로마서를 읽어볼까요.',
    schedule: '8/6(수) ~ 9/10(수) (총 6주, 저녁 8시 30분 - 10시)',
    method: '온라인 Zoom 강의 및 질의응답',
    guides: '노종문 목사 (예일대 신약학 STM)',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '교리에 갇힌 로마서가 아니라 사도 바울의 생생한 목소리를 듣고 싶은 분',
      '성서 본문에 대해 품고 있던 날카로운 물음표를 안전하게 던지고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'class-summer-bible-revelation',
    title: '[아볼로 클래스] 여름성경학교 시즌1',
    badge: '모집 마감',
    category: '아볼로 클래스',
    isOpen: false,
    posterImage: '/assets/aistudio/_________________________305d9276.jpg',
    bookTitle: '요한계시록, 오늘을 위한 미래',
    bookAuthor: '딘 플레밍 (노종문 역)',
    introCopy: '선교적 관점으로 요한계시록을 풀어낸 딘 플레밍의 저작을 중심으로, 번역자인 노종문 목사와 함께 공부합니다.',
    schedule: '여름 집중 과정 (총 4회, 온라인 Zoom)',
    method: '온라인 Zoom 강의',
    guides: '노종문 목사',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '종말의 공포가 아닌 세상 한가운데서 교회가 품어야 할 소망의 메시지로 계시록을 읽고 싶은 분',
      '신약학자의 해설과 함께 성서의 상징 언어를 차근차근 해독하고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'class-seminar-lausanne',
    title: '[아볼로 클래스] 아볼로 세미나 시즌1',
    badge: '모집 마감',
    category: '아볼로 클래스',
    isOpen: false,
    posterImage: '/assets/aistudio/_______________3fa30e70.jpg',
    bookTitle: '로잔 서약 및 한국복음주의 지성사 사료집',
    bookAuthor: '한국복음주의운동연구소 연구자료집',
    introCopy: '로잔운동이 한국에 옵니다. 로잔의 지향을 다시 살피면서 한국복음주의운동 너머를 바라보겠습니다.',
    schedule: '기획 공개 세미나 (온·오프라인 병행)',
    method: '서울 마포 연구소 대면 & 온라인 실시간 중계',
    guides: '이강일 소장 및 복연 초청 연구진',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '한국 교회와 세계 복음주의 운동의 역사적 흐름을 객관적으로 알고 싶은 분',
      '전도와 사회적 책임의 총체적 선교를 고민하는 사역자 및 평신도'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'class-philosophy-s1',
    title: '[아볼로 클래스] 철학스터디 시즌1',
    badge: '모집 마감',
    category: '아볼로 클래스',
    isOpen: false,
    posterImage: '/assets/aistudio/______________________________1___84306bed.jpg',
    bookTitle: '미치게 친절한 철학 · 포스트모더니즘의 이해',
    bookAuthor: '아볼로 클래스 강독 교재',
    introCopy: '온라인으로 만나는 기초 철학 입문. 사유의 뼈대를 세우고 현대 철학의 기본 개념을 닦습니다.',
    schedule: '8/4 ~ 8/27 매주 온라인 Zoom (총 8회)',
    method: '온라인 Zoom 중심',
    guides: '이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '철학을 처음 접하지만 어디서부터 읽어야 할지 막막했던 분',
      '어려운 철학 용어를 일상의 언어로 쉽게 풀어내고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'class-philosophy-s2',
    title: '[아볼로 클래스] 철학스터디 시즌2',
    badge: '모집 마감',
    category: '아볼로 클래스',
    isOpen: false,
    posterImage: '/assets/aistudio/______________________________2___a4ed2cc7.jpg',
    bookTitle: '잃어버린 내 생각을 찾아 떠나는 생각여행',
    bookAuthor: '현대 철학 텍스트',
    introCopy: '잃어버린 ‘내 생각’을 찾아 떠나는 생각여행. 아볼로 철학스터디 2기.',
    schedule: '총 6회 모임 (온라인 Zoom)',
    method: '온라인 Zoom',
    guides: '이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '남의 의견에 휘둘리지 않고 나만의 독립적인 사유를 정립하고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'class-philosophy-tour-s3',
    title: '[아볼로 클래스] 철학여행 시즌3',
    badge: '모집 마감',
    category: '아볼로 클래스',
    isOpen: false,
    posterImage: '/assets/aistudio/______________________________3___7f7bea38.jpg',
    bookTitle: '독일과 프랑스로 떠나는 현대철학 여행',
    bookAuthor: '아볼로 클래스 강독 교재',
    introCopy: '독일과 프랑스로 떠나는 현대철학 여행. “나도 한번 가보자!”',
    schedule: '가을 시즌 총 8회 모임',
    method: '온·오프라인 병행',
    guides: '이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '유럽 대륙 철학의 양대 산맥인 독일 관념론과 프랑스 현대 사상을 쉽게 꿰뚫고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'class-philosophy-tour-s4',
    title: '[아볼로 클래스] 철학여행 시즌4',
    badge: '모집 마감',
    category: '아볼로 클래스',
    isOpen: false,
    posterImage: '/assets/aistudio/______________________________4___c6757942.jpg',
    bookTitle: '과거와 미래 사이 · 책임과 판단',
    bookAuthor: '한나 아렌트',
    introCopy: '한나 아렌트로 가는 아볼로 철학여행팀 4기. 사유의 부재가 낳은 악의 평범성과 판단력의 무게를 성찰합니다.',
    schedule: '11/1 ~ 12/27(8주) 매주 월요일 저녁 8시 반 - 10시 반 (Zoom)',
    method: '온라인 Zoom 중심',
    guides: '이원재 목사 (스투디움 튜터)',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '사유하지 않는 시민이 어떻게 악에 가담하는지 통찰하고 싶은 분',
      '신앙인으로서 정치적·윤리적 판단의 기준을 바로 세우고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'class-philosophy-tour-s5',
    title: '[아볼로 클래스] 철학여행 시즌5',
    badge: '모집 마감',
    category: '아볼로 클래스',
    isOpen: false,
    posterImage: '/assets/aistudio/______________________________1___42c652ba.png',
    bookTitle: '푸코, 바르트, 레비스트로스, 라캉 쉽게 읽기',
    bookAuthor: '우치다 타츠루',
    introCopy: '구조주의 철학자를 만나는 아볼로 철학여행팀 5기. 푸코, 바르트, 레비스트로스, 라캉을 우치다 타츠루의 명쾌한 해설로 읽습니다.',
    schedule: '10/17 ~ 12/17 매주 월요일 저녁 8시 - 10시 (총 10회)',
    method: '온라인 Zoom 중심',
    guides: '이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '구조주의 핵심 사상가 4인의 언어를 부담 없이 명쾌하게 정리하고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'class-philosophy-tour-s8',
    title: '[아볼로 클래스] 철학여행 시즌8',
    badge: '모집 마감',
    category: '아볼로 클래스',
    isOpen: false,
    posterImage: '/assets/aistudio/______________________________8___9506f3bd.jpg',
    bookTitle: '진리와 방법 · 해석학 텍스트',
    bookAuthor: '가다머, 리쾨르 외',
    introCopy: '생각이 다른 사람과 어디까지 소통할 수 있을까? 철학적 해석학을 만나면 새로운 소통 가능성이 열립니다.',
    schedule: '총 8회 모임 (온라인 Zoom)',
    method: '온라인 Zoom',
    guides: '이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '극단적인 양극화와 갈등 속에서 타자와 진정한 대화를 이루고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'class-spirit-s8',
    title: '[아볼로 클래스] 영성여행 시즌8',
    badge: '모집 마감',
    category: '아볼로 클래스',
    isOpen: false,
    posterImage: '/assets/aistudio/_________________________8_cf095514.jpg',
    bookTitle: '분별력 (Discernment)',
    bookAuthor: '헨리 나웬',
    introCopy: '선택의 기로에 선 당신과 주의 뜻을 헤아려 봅니다. 헨리 나웬의 ‘분별력’과 성경을 읽으며 4주간의 분별의 여정을 걷습니다.',
    schedule: '4주 집중 모임 (온라인 Zoom)',
    method: '온라인 Zoom',
    guides: '이강일 소장',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '진로와 삶의 중요한 갈림길에서 하나님의 뜻을 차분하게 분별하고 싶은 분',
      '헨리 나웬의 따스한 영성 깊은 글을 함께 묵상하고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'class-spirit-s9',
    title: '[아볼로 클래스] 영성여행 시즌9',
    badge: '모집 마감',
    category: '아볼로 클래스',
    isOpen: false,
    posterImage: '/assets/aistudio/_________________________9_388bedda.jpg',
    bookTitle: '소음 너머 고요와 함께하는 말씀 묵상',
    bookAuthor: '아볼로 영성 크루',
    introCopy: '소음 너머 고요와 함께 [큐티40]을 시작합니다. 세상의 분주함을 내려놓고 말씀 앞에서의 쉼을 누립니다.',
    schedule: '10월 20일 ~ 12월 12일 (40일간)',
    method: '온라인 매일 묵상 나눔 & 정기 주간 모임',
    guides: '아볼로 영성 길잡이',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '형식적인 큐티를 넘어 삶과 호흡하는 깊은 묵상을 회복하고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'class-qt30-2023',
    title: '[아볼로 클래스] 큐티30 시즌1',
    badge: '모집 마감',
    category: '아볼로 클래스',
    isOpen: false,
    posterImage: '/assets/aistudio/____________________485c1f60.jpg',
    bookTitle: '마음과 마음이 만나는 새해 묵상집',
    bookAuthor: '아볼로 영성 크루',
    introCopy: '2023년 새해, 한 달 간 주님과 인격적 교감 속에 동행할 큐티 크루를 찾습니다.',
    schedule: '새해 1개월간 동행 묵상',
    method: '온라인 데일리 묵상',
    guides: '아볼로 영성 길잡이',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '새해 첫 달을 말씀과 기도로 거룩하게 구별하여 시작하고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'class-qt60-s4',
    title: '[아볼로 클래스] 큐티60 시즌4',
    badge: '모집 마감',
    category: '아볼로 클래스',
    isOpen: false,
    posterImage: '/assets/aistudio/_________________________4_bda31332.jpg',
    bookTitle: '마음의 수다를 멈추는 60일 묵상',
    bookAuthor: '아볼로 영성 크루',
    introCopy: '“마음의 수다를 멈추고.” 두 달 동안 오직 주님과 교감하기 원하는 큐티60 크루 모임.',
    schedule: '5월 16일(화) ~ 7월 18일(화) (총 2개월간)',
    method: '온라인 매일 묵상 & 주간 피드백',
    guides: '아볼로 영성 길잡이',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '내면의 소음과 불안을 내려놓고 고요한 묵상 습관을 다지고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  },
  {
    id: 'class-qt40-s5',
    title: '[아볼로 클래스] 큐티40 시즌5',
    badge: '모집 마감',
    category: '아볼로 클래스',
    isOpen: false,
    posterImage: '/assets/aistudio/_________________________5_f46c6512.jpg',
    bookTitle: '마음을 고요히 하는 가을 묵상',
    bookAuthor: '아볼로 영성 크루',
    introCopy: '마음의 수다를 멈추고, 주님과 깊이 대화하기 원하는 분들과 함께하는 큐티40 시즌5.',
    schedule: '10월 16일(월) ~ 12월 29일(금)',
    method: '온라인 데일리 묵상 및 주간 나눔',
    guides: '아볼로 영성 길잡이',
    fee: '모집 마감',
    bankAccount: '국민은행 032901-04-330330 (한국복음주의운동연구소)',
    deadline: '모집 종료',
    inquiry: '인스타그램 @the_apollos__',
    recommendations: [
      '연말을 앞두고 내면의 영적 리듬을 단단하게 회복하고 싶은 분'
    ],
    note: '본 프로그램은 진행이 완료된 회차로 현재 모집이 마감되었습니다.'
  }
];
