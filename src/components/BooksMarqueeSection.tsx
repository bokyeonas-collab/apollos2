interface BookItem {
  title: string;
  coverUrl: string;
}

const BOOKS: BookItem[] = [
  {
    title: '고통은 나눌 수 있는가',
    coverUrl: '/assets/aistudio/___________________________6ba289fe.jpg'
  },
  {
    title: '그리스도인은 왜 인문학을 공부해야 하는가?',
    coverUrl: '/assets/aistudio/_________________________________________________427bab1a.jpg'
  },
  {
    title: '그리스인 조르바',
    coverUrl: '/assets/aistudio/_________________5a15cf75.jpg'
  },
  {
    title: '기억 전쟁',
    coverUrl: '/assets/aistudio/____________187e4d08.jpg'
  },
  {
    title: '대한민국은 왜? 1945~2015',
    coverUrl: '/assets/aistudio/__________________531f0045.jpg'
  },
  {
    title: '도덕적 인간과 비도덕적 사회',
    coverUrl: '/assets/aistudio/__________________________________8840d8d5.jpg'
  },
  {
    title: '사랑은 왜 끝나나',
    coverUrl: '/assets/aistudio/____________________94978b75.jpg'
  },
  {
    title: '선량한 차별주의자',
    coverUrl: '/assets/aistudio/______________________fb0d1cc6.jpg'
  },
  {
    title: '소년이 온다',
    coverUrl: '/assets/aistudio/______________6e0ea456.jpg'
  },
  {
    title: '순전한 기독교',
    coverUrl: '/assets/aistudio/__________________77602287.jpeg'
  },
  {
    title: '신을 기다리며',
    coverUrl: '/assets/aistudio/________________e174ec7d.jpg'
  },
  {
    title: '신학이란 무엇인가 Reader',
    coverUrl: '/assets/aistudio/_______________________d7641a97.jpeg'
  },
  {
    title: '예루살렘의 아이히만',
    coverUrl: '/assets/aistudio/_______________________da456f4c.jpg'
  },
  {
    title: '오디세이아',
    coverUrl: '/assets/aistudio/___________2701b5d8.jpg'
  },
  {
    title: '왜 자유주의는 실패했는가',
    coverUrl: '/assets/aistudio/_____________________________76341703.jpg'
  },
  {
    title: '타인의 고통',
    coverUrl: '/assets/aistudio/______________00e4b74a.jpg'
  },
  {
    title: '투명사회',
    coverUrl: '/assets/aistudio/__________f80d93ad.jpeg'
  },
  {
    title: '팔레스타인 100년 전쟁',
    coverUrl: '/assets/aistudio/_____________100___________963c47b9.jpg'
  },
  {
    title: '페미니즘과 기독교의 맥락들',
    coverUrl: '/assets/aistudio/__________________________________e5c915a4.jpeg'
  },
  {
    title: '호모 데우스',
    coverUrl: '/assets/aistudio/___________31199fd7.jpg'
  },
  {
    title: '거꾸로 읽는 세계사',
    coverUrl: '/assets/aistudio/_____________________ae0f8857.jpeg'
  },
  {
    title: '혼모노',
    coverUrl: '/assets/aistudio/________64fe4d69.jpg'
  },
  {
    title: '공정하다는 착각',
    coverUrl: '/assets/aistudio/_____________________bf3fa2e1.png'
  }
];

export default function BooksMarqueeSection() {
  // Duplicate the list to create a seamless infinite scrolling effect
  const marqueeList = [...BOOKS, ...BOOKS];

  return (
    <section className="py-10 md:py-12 bg-white border-b border-[#E8E4DA] overflow-hidden relative">
      {/* 1~3: Deleted text header (span, h3, p) per user request */}

      {/* Marquee Banner Container */}
      <div className="relative w-full overflow-hidden py-4 group">
        {/* Left & Right Soft Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex gap-7 items-center w-max animate-infinite-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {marqueeList.map((book, idx) => (
            <div
              key={`${book.title}-${idx}`}
              className="shrink-0 flex flex-col items-center group/book transition-transform duration-300 hover:-translate-y-2"
            >
              <div
                className="overflow-hidden bg-white transition-all duration-300 group-hover/book:shadow-xl"
                style={{
                  width: '120px',
                  borderRadius: '4px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
                }}
              >
                <img
                  src={book.coverUrl}
                  alt={`${book.title} 표지`}
                  className="w-[120px] h-[170px] object-cover block"
                  loading="lazy"
                />
              </div>
              <span className="text-[0.78rem] text-[#55534E] font-medium mt-2.5 max-w-[120px] text-center truncate block">
                {book.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes infiniteMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-marquee {
          animation: infiniteMarquee 42s linear infinite;
        }
      `}</style>
    </section>
  );
}
