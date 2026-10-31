const fs = require('fs');
let content = fs.readFileSync('src/data/recruitingProgramsData.ts', 'utf8');

const titleMap = {
  'feather-s1': '[아볼로 북클럽] 깃털반 1기',
  'feather-s2': '[아볼로 북클럽] 깃털반 2기',
  'feather-s3': '[아볼로 북클럽] 깃털반 3기',
  'feather-s4': '[아볼로 북클럽] 깃털반 4기',
  'feather-s5': '[아볼로 북클럽] 깃털반 5기',
  'feather-s6': '[아볼로 북클럽] 깃털반 6기',
  'feather-s7': '[아볼로 북클럽] 깃털반 7기',
  'feather-s10': '[아볼로 북클럽] 깃털반 10기',
  'feather-junior': '[아볼로 북클럽] 주니어 깃털반 1기',
  'literature-tour-s1': '[아볼로 북클럽] 문학여행 1기',
  'literature-tour-s2': '[아볼로 북클럽] 문학여행 2기',
  'literature-tour-s3': '[아볼로 북클럽] 문학여행 3기',
  'literature-summer-honmono': '[아볼로 북클럽] 여름방학 문학여행 2026기',
  'philosophy-summer-kim': '[아볼로 북클럽] 여름방학 철학여행 2026기',
  'philosophy-tour-s6': '[아볼로 북클럽] 철학여행 6기',
  'philosophy-tour-s7': '[아볼로 북클럽] 철학여행 7기',
  'history-tour-s1': '[아볼로 북클럽] 역사탐구 1기',
  'han-byung-chul': '[아볼로 북클럽] 한병철 읽기 1기',
  'teen-bookclub': '[아볼로 북클럽] 청소년을 위한 아볼로 북클럽',
  'studium-small-salvation': '[아볼로 스투디움] 글쓰기 과정 1기',
  'studium-minister-s7': '[아볼로 스투디움] 논리적 글쓰기 7기',
  'studium-writing-discovery': '[아볼로 스투디움] 서평쓰기 과정 1기',
  'studium-theology-s1': '[아볼로 스투디움] 신학여행 1기',
  'studium-review-critique-s1': '[아볼로 스투디움] 아볼로 합평회 1기',
  'class-winter-bible-s3': '[아볼로 클래스] 겨울성경학교 시즌3',
  'class-summer-bible-romans-s2': '[아볼로 클래스] 여름성경학교 시즌2',
  'class-summer-bible-revelation': '[아볼로 클래스] 여름성경학교 시즌1',
  'class-seminar-lausanne': '[아볼로 클래스] 아볼로 세미나 시즌1',
  'class-philosophy-s1': '[아볼로 클래스] 철학스터디 시즌1',
  'class-philosophy-s2': '[아볼로 클래스] 철학스터디 시즌2',
  'class-philosophy-tour-s3': '[아볼로 클래스] 철학여행 시즌3',
  'class-philosophy-tour-s4': '[아볼로 클래스] 철학여행 시즌4',
  'class-philosophy-tour-s5': '[아볼로 클래스] 철학여행 시즌5',
  'class-philosophy-tour-s8': '[아볼로 클래스] 철학여행 시즌8',
  'class-spirit-s8': '[아볼로 클래스] 영성여행 시즌8',
  'class-spirit-s9': '[아볼로 클래스] 영성여행 시즌9',
  'class-qt30-2023': '[아볼로 클래스] 큐티30 시즌1',
  'class-qt60-s4': '[아볼로 클래스] 큐티60 시즌4',
  'class-qt40-s5': '[아볼로 클래스] 큐티40 시즌5'
};

for (const [id, newTitle] of Object.entries(titleMap)) {
  const regex = new RegExp(`(id:\\s*'${id}',[\\s\\S]*?title:\\s*')[^']+(')`);
  if (!regex.test(content)) {
    console.error('Failed to match for id: ' + id);
  } else {
    content = content.replace(regex, `$1${newTitle}$2`);
  }
}

fs.writeFileSync('src/data/recruitingProgramsData.ts', content, 'utf8');
console.log('Successfully updated titles in recruitingProgramsData.ts');
