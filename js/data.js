const Profile = {
  name: '임해빈',
  birthDate: '1990.04.04',
  phone: '01054089044',
  email: 'goguma-guma@hanmail.net',
  address: '인천 서구',
  school: [
    '2006.03~2009.02 인천여자상업고등학교 웹디자인과',
    '2009.03~2011.02 부천대학교 문화상품디자인과',
  ],
  edu: [
    '2011 그린컴퓨터아트학원 웹디자인&amp;쇼핑몰디자인 과정, 웹표준 취업전문반',
  ],
}

const Career = {
  list: [
    {
      company: '디케이테크인',
      team: '웹표준개발팀 사원',
      from: '2012.01.30',
      to: '2016.01.31',
      details: [
        '포털 Daum 사이트 운영 및 신규 서비스 UI개발',
        '어학사전, 지식, 부동산, 증권, 자동차, 광고/제휴 서비스 매니징 업무',
        '웹표준 레퍼런스 사이트 다룸 제작 참여',
        '뉴스/연예 개편, 루리웹, 검은사막 CBT, 브라질 월드컵, 카카오톡 선물하기 등',
      ]
    },
    {
      company: '아이패밀리SC',
      team: '디자인팀 사원 (계약직)',
      from: '2016.05.23',
      to: '2016.12.31',
      details: [
        '신규 브랜드 롬앤 화장품 사이트 UI개발',
        '아이웨딩, 에이미존 사이트 운영 및 신규 서비스 UI개발',
        '화장품 관련 정부 사업 지원',
      ]
    },
    {
      company: '사람인HR',
      team: 'UI개발1팀 대리',
      from: '2017.01.02',
      to: '2021.12.03',
      details: [
        '취업 플랫폼 사람인 사이트 운영 및 신규 서비스 UI개발',
        '개인 서비스 : 공고뷰, 이력서/입사지원서, 즉시지원, 관심기업 담당',
        '기업 서비스 : 인재선발솔루션 ‘MUST’, 인적성검사 ‘F.I.T’ 작업',
        '기타 서비스 : 채용솔루션 ‘등용문’, HR솔루션 ‘더플랩’ 사이트 작업',
      ]
    },
    {
      company: '삼성카드',
      team: '프리랜서',
      from: '2022.01.20',
      to: '2022.04.30',
      details: [
        'Vue.js 공통 컴포넌트 활용한 모바일 페이지 제작',
      ]
    },
    {
      company: '오스템임플란트',
      team: '프리랜서',
      from: '2022.06.02',
      to: '2022.10.31',
      details: [
        'Vue.js 컴포넌트 제작',
        'css 정리 및 UI 개선',
      ]
    },
  ],
  skills: ['HTML', 'CSS', 'SCSS', 'Javascript', 'jQuery', 'Vue.js', '웹표준', '웹접근성'],
  tools: ['Git', 'Jira', 'Confluence', 'PhotoShop', 'Zeplin', 'Figma', 'Swagger', 'Axure', 'VScode', 'PhpStorm']
}

const Project = {
  list: [
    {
      title: '더플랩인사이트 신규서비스',
      type: '반응형',
      period: '2021.06.07~12.01',
      persons: '3',
      keyword: ['Vue.js', 'SCSS', 'ES6', 'Storybook'],
      desc: [
        '아토믹 디자인 시스템을 활용한 컴포넌트 작업',
        '컴포넌트별 스토리북 생성하여 케이스별 화면 관리',
        '작업 단위별 코드리뷰 진행',
        'BEM 네이밍 방법론 사용',
        '모바일-태블릿-데스크탑 반응형 구현',
        'axios 사용한 API호출 및 연동 작업',
      ],
      img: 'insight_01.png',
      linkList: [
        { icon: 'rw', link: 'https://thepllab.com/' },
      ],
    },
    {
      title: '취업 문화 개선 프로젝트 시현하다 이벤트',
      type: 'PC, Mobile',
      period: '2021.02.23~03.02',
      persons: '1',
      keyword: ['HTML', 'CSS', 'jQuery', 'bxSlider', 'Swiper',],
      desc: [
        '스크롤 인터렉션',
        '이미지 변환 효과',
        '댓글 슬라이드 처리',
      ],
      img: 'sihyunhada_01.png',
      linkList: [
        { icon: 'pc', link: '/source/sihyunhada/pc/index.html' },
        { icon: 'm', link: '/source/sihyunhada/m/index.html' }
      ],
    },
    {
      title: '사람인 MY서비스 개편',
      type: 'PC',
      period: '2021.12.09~12.24',
      persons: '3',
      keyword: ['HTML', 'CSS', 'jQuery', 'bxSlider', 'Swiper',],
      desc: [
        '기업 알아보기 - 기업명 목록, 기업 컨텐츠 신규 서비스 작업',
        '입사지원 현황 - 개편되는 디자인 가이드에 맞춰 UI 변경'
      ],
      img: 'my_01.png',
      linkList: [
        {
          icon: 'pc layer',
          link: [
            { txt: '기업 알아보기', url: '/source/my/company.html' },
            { txt: '입사지원 현황', url: '/source/my/apply.html' }
          ]
        },
      ],
    },
    {
      title: '사람인 취준진담 서비스 개편',
      type: 'PC, Mobile',
      period: '2021.09.22~10.26',
      persons: '1',
      keyword: ['HTML', 'CSS', 'jQuery', 'bxSlider', 'Swiper',],
      desc: [
        '취업 관련 질의응답 서비스 UI 개편',
        '서비스 메인, 목록, 질문 작성, 질문 상세, MY페이지 작업',
      ],
      img: 'qna_01.png',
      linkList: [
        {
          icon: 'pc layer',
          link: [
            { txt: '취준진담 메인', url: '/source/qna/pc/ain.html', },
            { txt: '질문 검색', url: '/source/qna/pc/result.html' },
            { txt: '질문 상세 ', url: '/source/qna/pc/view.html' },
            { txt: '글쓰기 ', url: '/source/qna/pc/write.html' },
            { txt: 'MY ', url: '/source/qna/pc/my.html' }
          ]
        },
        {
          icon: 'm layer', link: [
            { txt: '취준진담 메인', url: '/source/qna/m/main.html' },
            { txt: '질문 검색', url: '/source/qna/m/result.html' },
            { txt: '질문 상세 ', url: '/source/qna/m/view.html' },
            { txt: 'MY ', url: '/source/qna/m/my.html' }
          ]
        },
      ],
    },
    {
      title: '사람인 미니고객센터 신규서비스',
      type: 'PC',
      period: '2020.08.03~08.19',
      persons: '1',
      keyword: ['HTML', 'CSS', 'jQuery'],
      desc: [
        '사람인 사이트 우측 하단 알림 서비스 내에 추가되는 고객센터',
        '개인, 기업회원 서비스에서 공통으로 사용될 수 있는 채팅 UI 작업',
        '채팅 애니메이션 가이드 제작',
      ],
      img: 'sticky_01.png',
      link: '/source/sticky/index.html',
      linkList: [
        { icon: 'pc', link: '/source/sticky/index.html' },
      ],
    },
    {
      title: '사람인 기업서비스 유사인재추천',
      type: 'PC',
      period: '2020.01.03~01.30',
      persons: '1',
      keyword: ['HTML', 'CSS', 'jQuery'],
      desc: [
        '기업 회원에게 지원자와 유사한 인재를 추천해주는 페이지',
        '스크롤 이벤트, 유사도 카운트 업, 막대 그래프, 키워드 애니메이션 적용',
      ],
      img: 'similar_01.png',
      linkList: [
        {
          icon: 'pc layer',
          link: [
            { txt: '유사인재 추천 레이어', url: '/source/similar/index.html' },
            { txt: '입사지원 제의 문자보내기', url: '/source/similar/sms.html' },
            { txt: '입사지원 제의 메일보내기 ', url: '/source/similar/mail.html' },
          ]
        },
      ],
    },

    {
      title: '채용 솔루션 MUST 신규서비스',
      type: 'PC, Mobile',
      period: '2019.08~09',
      persons: '6',
      keyword: ['HTML', 'CSS', 'ES6'],
      desc: [
        '기업 서비스 전체 개편 작업',
        '기업 화면과 연관된 개인 회원 서비스 담당',
        '서비스 소개페이지 작업',
        '기업 서비스용 Tooltip 플러그인 제작 및 적용',
      ],
      img: 'must_01.png',
      linkList: [
        {
          icon: 'pc layer',
          link: [
            { txt: 'PC 소개페이지', url: 'https://www.saramin.co.kr/zf_user/memcom/tutorial' },
            { txt: 'Mobile 소개페이지', url: 'https://m.saramin.co.kr/events/tutorial' },
            { txt: '상품 구매', url: '/source/must/order.html' },
            { txt: '상품 관리', url: '/source/must/manage.html' },
            { txt: '상품 업그레이드', url: '/source/must/upgrade.html' },
          ]
        },
      ],
    },
    {
      title: '사람인 큐레이션 서비스 개편',
      type: 'Mobile',
      period: '2019.01.15~01.18',
      persons: '1',
      keyword: ['HTML', 'CSS', 'jQuery'],
      desc: [
        '모바일 큐레이션 서비스 홈, 상세 페이지 작업',
        '큐레이션 테마 18종 베리에이션 작업',
      ],
      img: 'curation_01.png',
      link: 'https://m.saramin.co.kr/curation/home',
      linkList: [{ icon: 'm', link: 'https://m.saramin.co.kr/curation/home' },],
    },
    {
      title: '사람인 면접후기 공유 이벤트',
      type: 'PC, Mobile',
      period: '2018.11.07~11.30',
      persons: '1',
      keyword: ['HTML', 'CSS'],
      desc: [
        '면접 경험 등록 이벤트 경험 후기 목록, 작성 폼, 상세 페이지 작업',
        '후속 이벤트로 확장 가능하도록 입력 폼 조합과 네이밍에 신경써서 작업',
      ],
      img: 'review_01.png',
      linkList: [
        {
          icon: 'pc layer',
          link: [
            { txt: '면접후기 목록', url: '/source/review/pc/list.html' },
            { txt: '면접후기 작성', url: '/source/review/pc/write.html' }
          ]
        },
        {
          icon: 'm layer',
          link: [
            { txt: '면접후기 목록', url: '/source/review/m/list.html' },
            { txt: '면접후기 작성', url: '/source/review/m/write.html' },
            { txt: '면접후기 보기', url: '/source/review/m/view.html' }
          ]
        },
      ],

    },
    {
      title: '사람인 기업서비스 인재관리 개편',
      type: 'Mobile',
      period: '2018.09.04~09.28',
      persons: '1',
      keyword: ['HTML', 'CSS', 'Swiper'],
      desc: [
        '모바일 기업 인재관리 서비스 인재 목록, 검색, 저장 페이지',
        '상세검색 화면 공통화 작업',
      ],
      img: 'talent_01.png',
      linkList: [
        {
          icon: 'm layer',
          link: [
            { txt: '인재 목록', url: '/source/talent/list.html' },
            { txt: '인재 관리', url: '/source/talent/manage.html' },
            { txt: '인재 검색 ', url: '/source/talent/search.html' },
            { txt: '저장된 검색조건', url: '/source/talent/saved.html' },
          ]
        },
      ]
    },
    {
      title: '사람인 인성검사 신규서비스',
      type: 'Mobile',
      period: '2018.07.13~08.13',
      persons: '2',
      keyword: ['HTML', 'CSS', 'jQuery'],
      desc: [
        '모바일 인성검사 신규 서비스',
        '검사 화면, 서비스 소개페이지 작업',
        '이후 진행되는 적성검사 서비스 고려하여 확장성있게 작업',
      ],
      img: 'test_01.png',
      linkList: [
        {
          icon: 'm layer',
          link: [
            { txt: 'PC 소개페이지', url: '/source/test/intro/pc/index.html' },
            { txt: 'Mobile 소개페이지', url: '/source/test/intro/m/index.html' },
            { txt: '인성검사지', url: '/source/test/index.html' },
          ]
        },
      ],
    },
    {
      title: '사람인 관심기업 개편',
      type: 'PC',
      period: '2018.04.17~04.25',
      persons: '1',
      keyword: ['HTML', 'CSS', 'jQuery'],
      desc: [
        'MY서비스 관심기업 UI 개편',
        '관심기업 목록, 상세 페이지 작업',
      ],
      img: 'favor_01.png',
      linkList: [
        {
          icon: 'pc layer',
          link: [
            { txt: '관심기업 목록', url: '/source/favor/list.html' },
            { txt: '관심기업 상세 ', url: '/source/favor/view.html' },
          ]
        },
      ],
    },

    {
      title: '사람인 인공지능 홍보페이지',
      type: 'PC, Mobile',
      period: '2018.03.06~03.14',
      persons: '1',
      keyword: ['HTML', 'CSS', 'jQuery'],
      desc: [
        '아바타서치 서비스 홍보 페이지',
        '이미지 변환 애니메이션 적용',
      ],
      img: 'ai_01.png',
      linkList: [
        { icon: 'pc', link: '/source/ai/pc/index.html' },
        { icon: 'm', link: '/source/ai/m/index.html' },
      ],
    },
    {
      title: '사람인 공고 뷰 개편',
      type: 'PC',
      period: '2017.11.10~11.30',
      persons: '2',
      keyword: ['HTML', 'CSS'],
      desc: [
        '채용공고 이어보기 뷰, 팝업 페이지 작업',
      ],
      img: 'recruit_view_01.png',
      linkList: [{ icon: 'pc', link: '/source/rview/index.html' },],
    },
    {
      title: '사람인 기업서비스 공고기반 추천인재',
      type: 'PC',
      period: '2017.11.10~11.30',
      persons: '1',
      keyword: ['HTML', 'CSS', 'jQuery'],
      desc: ['채용공고 이어보기 뷰, 팝업 페이지 작업',],
      img: 'recommend_01.png',
      linkList: [{ icon: 'pc', link: '/source/recommend/index.html' },],
    },
    {
      title: '사람인 입사지원 레이어 개편',
      type: 'PC, Mobile',
      period: '2017.07.04~07.28',
      persons: '1',
      keyword: ['HTML', 'CSS'],
      desc: [
        '즉시지원하기 레이어 UI개편',
        '이력서 양식 선택, 파일 첨부, 개인정보 수정 등 입사지원 관련 프로세스 화면 작업',
      ],
      img: 'apply_01.png',
      linkList: [
        { icon: 'pc', link: '/source/apply/pc/index.html' },
        { icon: 'm', link: '/source/apply/m/index.html' },
      ],
    },
    {
      title: '사람인 연봉정보 서비스 개편',
      type: 'PC',
      period: '2017.02~04',
      persons: '1',
      keyword: ['HTML', 'CSS', 'jQuery', 'jQuery UI'],
      desc: [
        '연봉정보 UI개편 목록, 상세 페이지 작업',
        '상세 페이지 그래프 스크롤 인터렉션 구현',
        '연봉 구간 검색 range slider 적용',
      ],
      img: 'salary_01.png',
      linkList: [
        {
          icon: 'pc layer',
          link: [
            { txt: '연봉정보 목록', url: '/source/salary/list.html' },
            { txt: '연봉정보 상세', url: '/source/salary/view.html' }
          ]
        },
      ],
    },
  ]
};
