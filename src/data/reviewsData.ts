export interface MemberReview {
  id: string;
  name: string;
  program: string;
  body: string;
  memberLabel?: string;
  activityDate?: string;
  role?: string;
  avatarUrl?: string;
  avatarSeed?: string;
  color?: string;
  highlight?: string;
}

export const REVIEWS: MemberReview[] = [
  {
    id: 'rev-1',
    name: '한*경',
    program: '아볼로 북클럽 깃털반',
    body: '아이가 현장학습 결과지에 한껏 공들여 멋지게 글 쓰는 모습을 보며, ‘아, 이제 배움의 길에 제대로 한 걸음 내딛고 있구나’ 실감했습니다.',
  },
  {
    id: 'rev-2',
    name: '신*미',
    program: '아볼로 북클럽 깃털반',
    body: '어릴 적엔 재미로, 어른이 되고는 그저 정보 습득용으로만 읽던 책인데, 깃털반을 통해 다시 읽고 쓰는 것에 대한 설렘과 기대가 생겼어요.',
  },
  {
    id: 'rev-3',
    name: '윤*원',
    program: '아볼로 스투디움 4기',
    body: '서로의 글을 편견 없이 바라봐 주는, 참 안전하고 든든한 공간이었습니다.',
  },
  {
    id: 'rev-4',
    name: '정*호',
    program: '아볼로 스투디움 9기',
    body: '혼자 끙끙 앓았다면 도저히 풀어내지 못했을 난제였는데, 함께하니 마침내 풀렸습니다.',
  },
  {
    id: 'rev-5',
    name: '양*기',
    program: '아볼로 스투디움 3기',
    body: '자칫 나만의 독단에 갇힐 뻔했던 저에게, 가장 솔직하고도 안전한 피드백을 건네주는 소중한 사람들을 만났습니다.',
  },
  {
    id: 'rev-6',
    name: '윤*구',
    program: '아볼로 스투디움 6기',
    body: '아볼로에서 성급한 확신 대신 낯설고 불편한 혼란을 먼저 마주했지만, 역설적으로 세상을 버텨낼 단단한 용기를 얻었습니다.',
  },
  {
    id: 'rev-7',
    name: '이*영',
    program: '아볼로 스투디움 7기',
    body: '두꺼운 고전 책을 품에 안고 다닐 때나 책꽂이에 꽂아둘 때, ‘내가 진짜 이런 깊은 책을 읽다니!’ 싶어 괜스레 어깨가 으쓱해졌습니다.',
  },
  {
    id: 'rev-8',
    name: '이*현',
    program: '아볼로 스투디움 8기',
    body: '매 모임마다 온기가 넘치는 곳이었어요. 혼자가 아닌 진정한 ‘우리’가 필요한 분들께 꼭 추천하고 싶습니다.',
  },
  {
    id: 'rev-9',
    name: '이*섭',
    program: '아볼로 스투디움 1기',
    body: '있어 보이는 말로 글을 채우고 혼자 만족하곤 했는데, 이제야 글의 진짜 논지를 읽어내고 내 언어로 풀어내는 법을 배웠습니다.',
  },
];
