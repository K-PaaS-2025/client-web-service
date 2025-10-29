"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts'
import { Users, PawPrint, Heart, TrendingUp } from "lucide-react"
import WordCloud from "@/components/charts/WordCloud"
import SunburstChart from "@/components/charts/SunburstChart"
import Navigation from "@/components/navigation"
import SeoulMap from "@/components/SeoulMap"

// Mock data
const monthlyRegistrations = [
  { month: '1월', dogs: 8, seniors: 6, matches: 5 },
  { month: '2월', dogs: 12, seniors: 8, matches: 7 },
  { month: '3월', dogs: 15, seniors: 12, matches: 9 },
  { month: '4월', dogs: 18, seniors: 14, matches: 11 },
  { month: '5월', dogs: 22, seniors: 16, matches: 13 },
  { month: '6월', dogs: 24, seniors: 18, matches: 15 }
]

const dogBreeds = [
  { name: '골든 리트리버', value: 8, color: '#D97706' },
  { name: '믹스', value: 6, color: '#F59E0B' },
  { name: '시바견', value: 4, color: '#FCD34D' },
  { name: '말티즈', value: 3, color: '#FDE68A' },
  { name: '기타', value: 3, color: '#FEF3C7' }
]

const ageDistribution = [
  { ageGroup: '60-65세', count: 5 },
  { ageGroup: '66-70세', count: 8 },
  { ageGroup: '71-75세', count: 6 },
  { ageGroup: '76-80세', count: 4 },
  { ageGroup: '81세+', count: 2 }
]

const matchingSuccess = [
  { week: '1주차', applications: 12, matches: 8, successRate: 67 },
  { week: '2주차', applications: 15, matches: 11, successRate: 73 },
  { week: '3주차', applications: 18, matches: 14, successRate: 78 },
  { week: '4주차', applications: 20, matches: 16, successRate: 80 }
]

const regionData = [
  { region: '강남구', dogs: 8, seniors: 6 },
  { region: '마포구', dogs: 6, seniors: 5 },
  { region: '종로구', dogs: 4, seniors: 3 },
  { region: '서초구', dogs: 3, seniors: 2 },
  { region: '용산구', dogs: 3, seniors: 2 }
]

// Advanced chart data - Pet care and elderly support keywords
const consultationKeywords = [
  // Core relationship keywords
  { text: '강아지', value: 2450 },
  { text: '고독', value: 2380 },
  { text: '고립', value: 2350 },
  { text: '헬스케어', value: 2320 },
  { text: '반려동물', value: 2290 },
  { text: '시니어', value: 2260 },
  { text: '외로움', value: 2230 },
  { text: '정서적지원', value: 2200 },
  { text: '사회적고립', value: 2170 },
  { text: '동반자', value: 2140 },

  // Pet types and characteristics
  { text: '골든리트리버', value: 1850 },
  { text: '푸들', value: 1820 },
  { text: '말티즈', value: 1790 },
  { text: '치와와', value: 1760 },
  { text: '시바견', value: 1730 },
  { text: '비글', value: 1700 },
  { text: '포메라니안', value: 1670 },
  { text: '요크셔테리어', value: 1640 },
  { text: '코기', value: 1610 },
  { text: '불독', value: 1580 },
  { text: '진돗개', value: 1550 },
  { text: '믹스견', value: 1520 },
  { text: '소형견', value: 1490 },
  { text: '중형견', value: 1460 },
  { text: '대형견', value: 1430 },
  { text: '노견', value: 1400 },
  { text: '퍼피', value: 1370 },
  { text: '성견', value: 1340 },

  // Loneliness and isolation terms
  { text: '혼자살기', value: 1310 },
  { text: '독거노인', value: 1280 },
  { text: '사회적단절', value: 1250 },
  { text: '정서적공허감', value: 1220 },
  { text: '고독사예방', value: 1190 },
  { text: '사회적연결', value: 1160 },
  { text: '인간관계', value: 1130 },
  { text: '커뮤니티', value: 1100 },
  { text: '소통부족', value: 1070 },
  { text: '우울감', value: 1040 },
  { text: '무력감', value: 1010 },
  { text: '소외감', value: 980 },
  { text: '불안감', value: 950 },
  { text: '절망감', value: 920 },
  { text: '스트레스', value: 890 },
  { text: '정신건강', value: 860 },
  { text: '심리적안정', value: 830 },
  { text: '정서적안정', value: 800 },

  // Healthcare and wellness
  { text: '건강관리', value: 770 },
  { text: '의료서비스', value: 740 },
  { text: '예방의학', value: 710 },
  { text: '정기검진', value: 680 },
  { text: '건강검진', value: 650 },
  { text: '만성질환', value: 620 },
  { text: '당뇨병', value: 590 },
  { text: '고혈압', value: 560 },
  { text: '관절염', value: 530 },
  { text: '치매예방', value: 500 },
  { text: '인지기능', value: 470 },
  { text: '기억력', value: 440 },
  { text: '집중력', value: 410 },
  { text: '신체활동', value: 380 },
  { text: '운동치료', value: 350 },
  { text: '물리치료', value: 320 },
  { text: '재활치료', value: 290 },
  { text: '약물관리', value: 260 },
  { text: '복용법', value: 230 },
  { text: '부작용', value: 200 },

  // Daily care and activities
  { text: '일상생활지원', value: 785 },
  { text: '산책', value: 755 },
  { text: '놀이활동', value: 725 },
  { text: '사회화', value: 695 },
  { text: '훈련', value: 665 },
  { text: '기본예절', value: 635 },
  { text: '배변훈련', value: 605 },
  { text: '목줄훈련', value: 575 },
  { text: '사람친화', value: 545 },
  { text: '다른동물과의관계', value: 515 },
  { text: '집안규칙', value: 485 },
  { text: '식사관리', value: 455 },
  { text: '영양균형', value: 425 },
  { text: '체중조절', value: 395 },
  { text: '털관리', value: 365 },
  { text: '목욕', value: 335 },
  { text: '브러싱', value: 305 },
  { text: '발톱깎기', value: 275 },
  { text: '귀청소', value: 245 },
  { text: '치아관리', value: 215 },

  // Emotional and psychological benefits
  { text: '정서적유대감', value: 825 },
  { text: '애착형성', value: 795 },
  { text: '책임감', value: 765 },
  { text: '생활의활력', value: 735 },
  { text: '목적의식', value: 705 },
  { text: '자존감향상', value: 675 },
  { text: '행복감', value: 645 },
  { text: '만족감', value: 615 },
  { text: '성취감', value: 585 },
  { text: '안정감', value: 555 },
  { text: '평온함', value: 525 },
  { text: '위안', value: 495 },
  { text: '치유', value: 465 },
  { text: '힐링', value: 435 },
  { text: '마음의평화', value: 405 },
  { text: '감정조절', value: 375 },
  { text: '스트레스해소', value: 345 },
  { text: '긴장완화', value: 315 },
  { text: '심리적지지', value: 285 },
  { text: '정서적회복', value: 255 },

  // Social and community aspects
  { text: '사회참여', value: 835 },
  { text: '커뮤니티활동', value: 805 },
  { text: '이웃과의교류', value: 775 },
  { text: '동물매개치료', value: 745 },
  { text: '펫테라피', value: 715 },
  { text: '집단활동', value: 685 },
  { text: '자원봉사', value: 655 },
  { text: '사회봉사', value: 625 },
  { text: '세대간교류', value: 595 },
  { text: '가족같은관계', value: 565 },
  { text: '상호부조', value: 535 },
  { text: '협력관계', value: 505 },
  { text: '네트워킹', value: 475 },
  { text: '정보공유', value: 445 },
  { text: '경험공유', value: 415 },
  { text: '조언구하기', value: 385 },
  { text: '도움요청', value: 355 },
  { text: '지역사회', value: 325 },
  { text: '동네', value: 295 },
  { text: '이웃사랑', value: 265 },

  // Health monitoring and care
  { text: '건강모니터링', value: 845 },
  { text: '활력징후', value: 815 },
  { text: '체온체크', value: 785 },
  { text: '혈압측정', value: 755 },
  { text: '맥박확인', value: 725 },
  { text: '호흡관찰', value: 695 },
  { text: '식욕변화', value: 665 },
  { text: '행동변화', value: 635 },
  { text: '이상징후', value: 605 },
  { text: '응급상황', value: 575 },
  { text: '응급처치', value: 545 },
  { text: '병원방문', value: 515 },
  { text: '수의사상담', value: 485 },
  { text: '의료진협력', value: 455 },
  { text: '치료계획', value: 425 },
  { text: '회복과정', value: 395 },
  { text: '재활프로그램', value: 365 },
  { text: '후속관리', value: 335 },
  { text: '지속관찰', value: 305 },
  { text: '케어플랜', value: 275 },

  // Technology and innovation
  { text: '스마트케어', value: 855 },
  { text: 'IoT기기', value: 825 },
  { text: '원격모니터링', value: 795 },
  { text: '웨어러블기기', value: 765 },
  { text: '모바일앱', value: 735 },
  { text: '텔레헬스', value: 705 },
  { text: '디지털헬스', value: 675 },
  { text: '인공지능', value: 645 },
  { text: 'AI상담', value: 615 },
  { text: '빅데이터', value: 585 },
  { text: '데이터분석', value: 555 },
  { text: '예측모델', value: 525 },
  { text: '맞춤서비스', value: 495 },
  { text: '개인화', value: 465 },
  { text: '자동화', value: 435 },
  { text: '스마트홈', value: 405 },
  { text: '음성인식', value: 375 },
  { text: '화상통화', value: 345 },
  { text: '원격진료', value: 315 },
  { text: '온라인상담', value: 285 },

  // Support systems and services
  { text: '지원체계', value: 865 },
  { text: '돌봄서비스', value: 835 },
  { text: '케어매니지먼트', value: 805 },
  { text: '사례관리', value: 775 },
  { text: '통합서비스', value: 745 },
  { text: '원스톱서비스', value: 715 },
  { text: '24시간케어', value: 685 },
  { text: '응급지원', value: 655 },
  { text: '생활지원', value: 625 },
  { text: '가사도움', value: 595 },
  { text: '식사배달', value: 565 },
  { text: '장보기지원', value: 535 },
  { text: '교통지원', value: 505 },
  { text: '병원동행', value: 475 },
  { text: '행정업무지원', value: 445 },
  { text: '법률상담', value: 415 },
  { text: '재정관리', value: 385 },
  { text: '보험업무', value: 355 },
  { text: '복지혜택', value: 325 },
  { text: '정부지원', value: 295 },

  // Quality of life
  { text: '삶의질', value: 875 },
  { text: '웰빙', value: 845 },
  { text: '건강수명', value: 815 },
  { text: '활동적노화', value: 785 },
  { text: '성공적노화', value: 755 },
  { text: '생활만족도', value: 725 },
  { text: '행복지수', value: 695 },
  { text: '자립생활', value: 665 },
  { text: '독립성', value: 635 },
  { text: '자율성', value: 605 },
  { text: '선택권', value: 575 },
  { text: '존엄성', value: 545 },
  { text: '자아실현', value: 515 },
  { text: '개인성장', value: 485 },
  { text: '평생학습', value: 455 },
  { text: '취미활동', value: 425 },
  { text: '문화생활', value: 395 },
  { text: '여가시간', value: 365 },
  { text: '휴식', value: 335 },
  { text: '재충전', value: 305 }
].concat(
  // Additional context-appropriate keywords
  [
    // More pet care terms
    { text: '애완동물', value: 275 },
    { text: '펫샵', value: 245 },
    { text: '동물병원', value: 215 },
    { text: '수의학', value: 185 },
    { text: '동물행동학', value: 155 },
    { text: '펫보험', value: 125 },
    { text: '펫호텔', value: 95 },
    { text: '펫시터', value: 65 },
    { text: '도그워킹', value: 35 },
    { text: '펫택시', value: 25 },

    // Senior care terms
    { text: '노인장기요양보험', value: 270 },
    { text: '실버타운', value: 240 },
    { text: '요양원', value: 210 },
    { text: '데이케어센터', value: 180 },
    { text: '경로당', value: 150 },
    { text: '노인복지관', value: 120 },
    { text: '실버케어', value: 90 },
    { text: '에이징케어', value: 60 },
    { text: '노령화사회', value: 30 },
    { text: '고령친화', value: 20 },

    // Emotional wellness
    { text: '멘탈헬스', value: 265 },
    { text: '마인드풀니스', value: 235 },
    { text: '명상', value: 205 },
    { text: '심리상담', value: 175 },
    { text: '정신과치료', value: 145 },
    { text: '항우울제', value: 115 },
    { text: '인지행동치료', value: 85 },
    { text: '그룹테라피', value: 55 },
    { text: '예술치료', value: 45 },
    { text: '음악치료', value: 15 }
  ]
).concat(
  // Generate remaining keywords to reach 2000
  Array.from({ length: 1700 }, (_, i) => {
    const themes = ['케어', '지원', '관리', '치료', '예방', '건강', '생활', '활동', '서비스', '프로그램'];
    const descriptors = ['스마트', '디지털', '맞춤형', '전문', '통합', '개인', '가족', '지역', '사회', '의료'];
    const theme = themes[i % themes.length];
    const descriptor = descriptors[Math.floor(i / themes.length) % descriptors.length];

    return {
      text: `${descriptor}${theme}${i + 201}`,
      value: Math.max(1, Math.floor(Math.random() * 300))
    }
  })
)

const consultationFlow = {
  name: '반려동물 케어 매칭',
  children: [
    {
      name: '상담신청',
      children: [
        {
          name: '온라인신청',
          children: [
            { name: '웹사이트 접속', value: 45 },
            { name: '모바일앱', value: 38 },
            { name: '소셜미디어', value: 22 }
          ]
        },
        {
          name: '전화상담',
          children: [
            { name: '콜센터 직통', value: 28 },
            { name: '지역센터', value: 18 },
            { name: '응급상담', value: 12 }
          ]
        },
        {
          name: '방문상담',
          children: [
            { name: '복지관 방문', value: 15 },
            { name: '가정방문', value: 12 },
            { name: '병원 연계', value: 8 }
          ]
        }
      ]
    },
    {
      name: '사전평가',
      children: [
        {
          name: '시니어평가',
          children: [
            { name: '신체능력', value: 32 },
            { name: '정신건강', value: 28 },
            { name: '사회적지지', value: 24 },
            { name: '경제상황', value: 18 },
            { name: '주거환경', value: 15 }
          ]
        },
        {
          name: '펫평가',
          children: [
            { name: '성격검사', value: 35 },
            { name: '건강검진', value: 30 },
            { name: '행동평가', value: 25 },
            { name: '훈련수준', value: 20 },
            { name: '사회화정도', value: 16 }
          ]
        },
        {
          name: '환경평가',
          children: [
            { name: '주거공간', value: 22 },
            { name: '안전성', value: 18 },
            { name: '접근성', value: 15 },
            { name: '지역자원', value: 12 }
          ]
        }
      ]
    },
    {
      name: '매칭과정',
      children: [
        {
          name: 'AI매칭',
          children: [
            { name: '데이터분석', value: 42 },
            { name: '알고리즘처리', value: 35 },
            { name: '후보군선별', value: 28 },
            { name: '적합도계산', value: 22 }
          ]
        },
        {
          name: '전문가검토',
          children: [
            { name: '수의사검토', value: 30 },
            { name: '사회복지사검토', value: 25 },
            { name: '행동전문가검토', value: 20 },
            { name: '종합판정', value: 18 }
          ]
        },
        {
          name: '시범매칭',
          children: [
            { name: '첫만남', value: 35 },
            { name: '적응기간', value: 28 },
            { name: '관찰평가', value: 22 },
            { name: '피드백수집', value: 18 }
          ]
        }
      ]
    },
    {
      name: '서비스제공',
      children: [
        {
          name: '기본케어',
          children: [
            { name: '일상돌봄', value: 45 },
            { name: '산책서비스', value: 38 },
            { name: '식사관리', value: 32 },
            { name: '위생관리', value: 28 }
          ]
        },
        {
          name: '전문케어',
          children: [
            { name: '의료지원', value: 35 },
            { name: '응급처치', value: 28 },
            { name: '재활치료', value: 22 },
            { name: '특수케어', value: 18 }
          ]
        },
        {
          name: '정서지원',
          children: [
            { name: '동반활동', value: 40 },
            { name: '상담서비스', value: 32 },
            { name: '사회활동', value: 25 },
            { name: '가족상담', value: 20 }
          ]
        },
        {
          name: '교육지원',
          children: [
            { name: '펫케어교육', value: 30 },
            { name: '응급처치교육', value: 25 },
            { name: '행동교정교육', value: 20 },
            { name: '건강관리교육', value: 18 }
          ]
        }
      ]
    },
    {
      name: '사후관리',
      children: [
        {
          name: '모니터링',
          children: [
            { name: '정기방문', value: 35 },
            { name: '전화체크', value: 28 },
            { name: '온라인모니터링', value: 22 },
            { name: '응급대응', value: 18 }
          ]
        },
        {
          name: '평가개선',
          children: [
            { name: '만족도조사', value: 30 },
            { name: '서비스개선', value: 25 },
            { name: '관계조정', value: 20 },
            { name: '추가지원', value: 15 }
          ]
        },
        {
          name: '지속지원',
          children: [
            { name: '장기케어', value: 28 },
            { name: '가족지원', value: 22 },
            { name: '지역연계', value: 18 },
            { name: '사회복귀', value: 15 }
          ]
        }
      ]
    }
  ]
}

const networkData = {
  nodes: [
    // 시니어 노드들
    { id: 'senior1', name: '김철수 (75세)', type: 'senior' as const, value: 5, region: '강남구', health: '양호' },
    { id: 'senior2', name: '박영희 (68세)', type: 'senior' as const, value: 4, region: '마포구', health: '보통' },
    { id: 'senior3', name: '이순자 (82세)', type: 'senior' as const, value: 3, region: '종로구', health: '양호' },
    { id: 'senior4', name: '정병호 (71세)', type: 'senior' as const, value: 4, region: '서초구', health: '우수' },
    { id: 'senior5', name: '최미영 (66세)', type: 'senior' as const, value: 5, region: '용산구', health: '양호' },

    // 강아지 노드들
    { id: 'dog1', name: '골디 (골든리트리버)', type: 'dog' as const, value: 5, age: '3세', temperament: '온순' },
    { id: 'dog2', name: '바둑이 (믹스)', type: 'dog' as const, value: 3, age: '5세', temperament: '활발' },
    { id: 'dog3', name: '초코 (푸들)', type: 'dog' as const, value: 4, age: '2세', temperament: '영리' },
    { id: 'dog4', name: '루피 (시바견)', type: 'dog' as const, value: 4, age: '4세', temperament: '독립적' },
    { id: 'dog5', name: '코코 (말티즈)', type: 'dog' as const, value: 3, age: '6세', temperament: '애교' },
    { id: 'dog6', name: '두부 (진돗개)', type: 'dog' as const, value: 5, age: '3세', temperament: '충실' },

    // 매칭 성공 노드들
    { id: 'match1', name: '성공매칭 A', type: 'match' as const, value: 5, status: '완료', duration: '6개월' },
    { id: 'match2', name: '성공매칭 B', type: 'match' as const, value: 4, status: '완료', duration: '4개월' },
    { id: 'match3', name: '성공매칭 C', type: 'match' as const, value: 5, status: '완료', duration: '8개월' },
    { id: 'match4', name: '진행매칭 D', type: 'match' as const, value: 3, status: '진행중', duration: '2개월' },

    // 케어 전문가 노드들
    { id: 'expert1', name: '수의사 김동물', type: 'expert' as const, value: 4, specialty: '내과' },
    { id: 'expert2', name: '훈련사 이훈련', type: 'expert' as const, value: 3, specialty: '행동교정' },
    { id: 'expert3', name: '상담사 박상담', type: 'expert' as const, value: 4, specialty: '심리케어' }
  ],
  links: [
    // 성공적인 매칭 관계들
    { source: 'senior1', target: 'match1', value: 5, type: '완료매칭' },
    { source: 'dog1', target: 'match1', value: 5, type: '완료매칭' },
    { source: 'senior2', target: 'match2', value: 4, type: '완료매칭' },
    { source: 'dog3', target: 'match2', value: 4, type: '완료매칭' },
    { source: 'senior4', target: 'match3', value: 5, type: '완료매칭' },
    { source: 'dog6', target: 'match3', value: 5, type: '완료매칭' },
    { source: 'senior3', target: 'match4', value: 3, type: '진행매칭' },
    { source: 'dog4', target: 'match4', value: 3, type: '진행매칭' },

    // 전문가 지원 관계들
    { source: 'expert1', target: 'match1', value: 3, type: '의료지원' },
    { source: 'expert2', target: 'match2', value: 3, type: '훈련지원' },
    { source: 'expert3', target: 'match3', value: 4, type: '상담지원' },
    { source: 'expert1', target: 'match4', value: 2, type: '의료지원' },

    // 대기 중인 연결들
    { source: 'senior5', target: 'dog2', value: 2, type: '검토중' },
    { source: 'senior5', target: 'dog5', value: 3, type: '검토중' },
    { source: 'expert2', target: 'dog2', value: 2, type: '훈련필요' },
    { source: 'expert3', target: 'senior5', value: 3, type: '상담진행' }
  ]
}

// User Journey Data for Pet Care Matching Service
const userJourneyData = [
  // Initial entry points
  ["splash-login", "1247"],
  ["splash-signup", "892"],
  ["splash-end", "156"],

  // Login flows
  ["login-home", "1089"],
  ["login-dashboard", "158"],
  ["login-login", "67"], // retry
  ["login-end", "45"],

  // Signup flows
  ["signup-login", "634"],
  ["signup-home", "198"],
  ["signup-signup", "43"], // retry
  ["signup-end", "17"],

  // Home page flows
  ["home-dogregister", "456"],
  ["home-seniorregister", "389"],
  ["home-matching", "267"],
  ["home-dashboard", "198"],
  ["home-home", "123"], // refresh
  ["home-end", "89"],

  // Dog registration flows
  ["dogregister-home", "298"],
  ["dogregister-seniorregister", "87"],
  ["dogregister-matching", "45"],
  ["dogregister-dogregister", "26"], // retry/edit
  ["dogregister-end", "12"],

  // Senior registration flows
  ["seniorregister-home", "234"],
  ["seniorregister-dogregister", "76"],
  ["seniorregister-matching", "54"],
  ["seniorregister-seniorregister", "25"], // retry/edit
  ["seniorregister-end", "8"],

  // Matching page flows
  ["matching-recommend", "187"],
  ["matching-home", "45"],
  ["matching-dogregister", "23"],
  ["matching-seniorregister", "12"],
  ["matching-end", "6"],

  // Recommendation flows
  ["recommend-accept", "134"],
  ["recommend-reject", "32"],
  ["recommend-home", "21"],
  ["recommend-end", "8"],

  // Accept flows
  ["accept-success", "128"],
  ["accept-home", "6"],
  ["accept-end", "2"],

  // Success flows
  ["success-home", "89"],
  ["success-dashboard", "23"],
  ["success-end", "16"],

  // Dashboard flows
  ["dashboard-home", "167"],
  ["dashboard-analytics", "89"],
  ["dashboard-reports", "45"],
  ["dashboard-settings", "23"],
  ["dashboard-end", "12"],

  // Deep navigation patterns
  ["home-dogregister-home", "89"],
  ["home-dogregister-matching", "67"],
  ["home-seniorregister-home", "78"],
  ["home-seniorregister-matching", "54"],
  ["matching-recommend-accept", "123"],
  ["matching-recommend-reject", "34"],
  ["dogregister-home-matching", "45"],
  ["seniorregister-home-matching", "38"],

  // Extended user sessions
  ["home-dogregister-seniorregister", "23"],
  ["home-seniorregister-dogregister", "19"],
  ["dogregister-seniorregister-matching", "15"],
  ["seniorregister-dogregister-matching", "12"],

  // Return user patterns
  ["home-dashboard-home", "56"],
  ["dashboard-home-dogregister", "34"],
  ["dashboard-home-seniorregister", "28"],
  ["dashboard-home-matching", "21"],

  // Complex matching flows
  ["matching-recommend-reject-recommend", "18"],
  ["recommend-reject-home-matching", "15"],
  ["home-matching-recommend-accept", "67"],
  ["home-matching-recommend-reject", "23"],

  // Error recovery patterns
  ["login-login-home", "34"],
  ["signup-signup-home", "21"],
  ["dogregister-dogregister-home", "15"],
  ["seniorregister-seniorregister-home", "12"],

  // Exit patterns
  ["dogregister-end", "45"],
  ["seniorregister-end", "32"],
  ["matching-end", "28"],
  ["recommend-end", "21"],
  ["dashboard-end", "18"]
]

// Conversion Funnel Data
const conversionFunnelData = [
  { stage: "방문자", count: 2295, percentage: 100, color: "#3B82F6" },
  { stage: "회원가입", count: 1722, percentage: 75, color: "#10B981" },
  { stage: "홈 진입", count: 1487, percentage: 65, color: "#F59E0B" },
  { stage: "등록 시작", count: 845, percentage: 37, color: "#EF4444" },
  { stage: "매칭 요청", count: 321, percentage: 14, color: "#8B5CF6" },
  { stage: "추천 확인", count: 195, percentage: 8.5, color: "#EC4899" },
  { stage: "매칭 성공", count: 134, percentage: 5.8, color: "#059669" }
]

// User Behavior Analytics
const userBehaviorAnalytics = {
  sessionDuration: "12분 34초",
  averagePageDepth: 4.2,
  deviceTypes: {
    mobile: 68,
    desktop: 24,
    tablet: 8
  },
  timeOfDay: {
    "오전": 15,
    "오후": 45,
    "저녁": 32,
    "밤": 8
  },
  sessionDurationBreakdown: {
    "0-1분": 234,
    "1-3분": 456,
    "3-5분": 389,
    "5-10분": 298,
    "10-15분": 167,
    "15분+": 89
  },
  pageDepthBreakdown: {
    "1페이지": 312,
    "2-3페이지": 567,
    "4-6페이지": 423,
    "7-10페이지": 289,
    "10페이지+": 134
  },
  deviceType: {
    "모바일": 1234,
    "데스크톱": 867,
    "태블릿": 194
  },
  timeOfDay: {
    "오전(6-12시)": 456,
    "오후(12-18시)": 789,
    "저녁(18-24시)": 623,
    "새벽(0-6시)": 127
  }
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950 dark:via-orange-950 dark:to-yellow-950">
      <Navigation showDateInfo={true} />

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">총 등록 강아지</CardTitle>
              <PawPrint className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-800">99</div>
              <p className="text-xs text-green-600">+15% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">총 등록 시니어</CardTitle>
              <Users className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-800">74</div>
              <p className="text-xs text-green-600">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">성공 매칭</CardTitle>
              <Heart className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-800">59</div>
              <p className="text-xs text-green-600">+22% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">매칭 성공률</CardTitle>
              <TrendingUp className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-800">79.7%</div>
              <p className="text-xs text-green-600">+5.2% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
            <TabsTrigger value="overview">전체 현황</TabsTrigger>
            <TabsTrigger value="demographics">인구 통계</TabsTrigger>
            <TabsTrigger value="performance">성과 분석</TabsTrigger>
            <TabsTrigger value="regional">지역별 분석</TabsTrigger>
            <TabsTrigger value="advanced">고급 분석</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Monthly Registrations */}
              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 dark:text-amber-100">월별 등록 현황</CardTitle>
                  <CardDescription>강아지, 시니어, 매칭 수의 월별 추이</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyRegistrations}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#FDE68A" />
                        <XAxis dataKey="month" stroke="#92400E" />
                        <YAxis stroke="#92400E" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#FFF7ED',
                            border: '1px solid #F59E0B',
                            borderRadius: '8px'
                          }}
                        />
                        <Legend />
                        <Bar dataKey="dogs" fill="#D97706" name="강아지" />
                        <Bar dataKey="seniors" fill="#F59E0B" name="시니어" />
                        <Bar dataKey="matches" fill="#92400E" name="매칭" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Dog Breeds Distribution */}
              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 dark:text-amber-100">강아지 품종 분포</CardTitle>
                  <CardDescription>등록된 강아지들의 품종별 분포도</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={dogBreeds}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {dogBreeds.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#FFF7ED',
                            border: '1px solid #F59E0B',
                            borderRadius: '8px'
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="demographics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Age Distribution */}
              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 dark:text-amber-100">시니어 연령 분포</CardTitle>
                  <CardDescription>등록된 시니어분들의 연령대별 분포</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={ageDistribution}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#FDE68A" />
                        <XAxis dataKey="ageGroup" stroke="#92400E" />
                        <YAxis stroke="#92400E" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#FFF7ED',
                            border: '1px solid #F59E0B',
                            borderRadius: '8px'
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="count"
                          stroke="#D97706"
                          fill="#FDE68A"
                          name="인원수"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 dark:text-amber-100">인구통계 요약</CardTitle>
                  <CardDescription>주요 통계 정보</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-800">71.2세</div>
                      <div className="text-sm text-amber-600">평균 연령</div>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-800">4.8세</div>
                      <div className="text-sm text-amber-600">강아지 평균 나이</div>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-800">67%</div>
                      <div className="text-sm text-amber-600">여성 비율</div>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-800">12km</div>
                      <div className="text-sm text-amber-600">평균 거리</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            {/* Performance Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-green-900 dark:text-green-100">평균 성공률</CardTitle>
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-800 dark:text-green-200">74.5%</div>
                  <p className="text-xs text-green-600 dark:text-green-400">+8.2% 상승</p>
                  <div className="mt-2 h-2 bg-green-100 dark:bg-green-800 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '74.5%' }}></div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 border-blue-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-blue-900 dark:text-blue-100">총 매칭 신청</CardTitle>
                  <Users className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-800 dark:text-blue-200">65건</div>
                  <p className="text-xs text-blue-600 dark:text-blue-400">이번 달 누적</p>
                  <div className="mt-2 flex space-x-1">
                    {[12, 15, 18, 20].map((value, index) => (
                      <div
                        key={index}
                        className="flex-1 bg-blue-200 dark:bg-blue-700 rounded"
                        style={{ height: `${value}px` }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950 border-purple-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-purple-900 dark:text-purple-100">성공 매칭</CardTitle>
                  <Heart className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-800 dark:text-purple-200">49건</div>
                  <p className="text-xs text-purple-600 dark:text-purple-400">목표 대비 122%</p>
                  <div className="mt-2 h-2 bg-purple-100 dark:bg-purple-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" style={{ width: '122%', maxWidth: '100%' }}></div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Performance Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 dark:text-amber-100">매칭 성공률 추이</CardTitle>
                  <CardDescription>주간별 매칭 신청 대비 성공률 분석</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={matchingSuccess}>
                        <defs>
                          <linearGradient id="successGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                          </linearGradient>
                          <linearGradient id="applicationGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.1}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#FDE68A" opacity={0.3} />
                        <XAxis
                          dataKey="week"
                          stroke="#92400E"
                          tick={{ fontSize: 12 }}
                          axisLine={{ stroke: '#D97706', strokeWidth: 2 }}
                        />
                        <YAxis
                          stroke="#92400E"
                          tick={{ fontSize: 12 }}
                          axisLine={{ stroke: '#D97706', strokeWidth: 2 }}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#FFFBEB',
                            border: '2px solid #F59E0B',
                            borderRadius: '12px',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                          }}
                          labelStyle={{ color: '#92400E', fontWeight: 'bold' }}
                        />
                        <Legend
                          wrapperStyle={{ paddingTop: '20px' }}
                          iconType="circle"
                        />
                        <Line
                          type="monotone"
                          dataKey="applications"
                          stroke="#F59E0B"
                          strokeWidth={3}
                          name="매칭 신청"
                          dot={{ fill: '#F59E0B', strokeWidth: 2, r: 6 }}
                          activeDot={{ r: 8, stroke: '#F59E0B', strokeWidth: 2, fill: '#FFFFFF' }}
                        />
                        <Line
                          type="monotone"
                          dataKey="matches"
                          stroke="#10B981"
                          strokeWidth={3}
                          name="매칭 성공"
                          dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                          activeDot={{ r: 8, stroke: '#10B981', strokeWidth: 2, fill: '#FFFFFF' }}
                        />
                        <Line
                          type="monotone"
                          dataKey="successRate"
                          stroke="#DC2626"
                          strokeWidth={4}
                          strokeDasharray="5 5"
                          name="성공률 (%)"
                          dot={{ fill: '#DC2626', strokeWidth: 2, r: 8 }}
                          activeDot={{ r: 10, stroke: '#DC2626', strokeWidth: 3, fill: '#FFFFFF' }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Performance Insights */}
              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 dark:text-amber-100">성과 인사이트</CardTitle>
                  <CardDescription>주요 성과 지표 및 개선점 분석</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-green-900 dark:text-green-100">최고 성공률</span>
                      </div>
                      <span className="text-lg font-bold text-green-700 dark:text-green-300">80%</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium text-blue-900 dark:text-blue-100">평균 처리 시간</span>
                      </div>
                      <span className="text-lg font-bold text-blue-700 dark:text-blue-300">5.2일</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm font-medium text-yellow-900 dark:text-yellow-100">대기 중인 신청</span>
                      </div>
                      <span className="text-lg font-bold text-yellow-700 dark:text-yellow-300">16건</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-amber-200">
                    <h4 className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-3">개선 권장사항</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-amber-500 rounded-full mt-2"></div>
                        <span>시니어 대상 사전 상담 프로세스 강화</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-amber-500 rounded-full mt-2"></div>
                        <span>강아지 성향 분석 알고리즘 개선</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-amber-500 rounded-full mt-2"></div>
                        <span>매칭 후 만족도 추적 시스템 도입</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="regional" className="space-y-6">
            {/* Regional Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950 border-indigo-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-indigo-900 dark:text-indigo-100">활성 지역</CardTitle>
                  <div className="h-4 w-4 bg-indigo-600 rounded-full"></div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-indigo-800 dark:text-indigo-200">5개구</div>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400">서울시 주요 구역</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 border-emerald-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-emerald-900 dark:text-emerald-100">최고 지역</CardTitle>
                  <div className="h-4 w-4 bg-emerald-600 rounded-full"></div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-emerald-800 dark:text-emerald-200">강남구</div>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400">8마리 등록</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 border-orange-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-orange-900 dark:text-orange-100">평균 매칭률</CardTitle>
                  <div className="h-4 w-4 bg-orange-600 rounded-full"></div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-800 dark:text-orange-200">82%</div>
                  <p className="text-xs text-orange-600 dark:text-orange-400">지역별 평균</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-purple-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-purple-900 dark:text-purple-100">확장 예정</CardTitle>
                  <div className="h-4 w-4 bg-purple-600 rounded-full"></div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-800 dark:text-purple-200">3개구</div>
                  <p className="text-xs text-purple-600 dark:text-purple-400">2024년 하반기</p>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Regional Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Enhanced Regional Visualization */}
              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 dark:text-amber-100">지역별 등록 현황</CardTitle>
                  <CardDescription>서울시 주요 구별 강아지 및 시니어 등록 현황 (인터랙티브 지도형 차트)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {regionData.map((region, index) => {
                      const total = region.dogs + region.seniors
                      const dogsPercentage = (region.dogs / Math.max(...regionData.map(r => r.dogs))) * 100
                      const seniorsPercentage = (region.seniors / Math.max(...regionData.map(r => r.seniors))) * 100
                      const densityLevel = total >= 10 ? 'high' : total >= 6 ? 'medium' : 'low'

                      return (
                        <div
                          key={index}
                          className={`relative p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                            densityLevel === 'high' ? 'bg-red-50 border-red-200 hover:bg-red-100' :
                            densityLevel === 'medium' ? 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100' :
                            'bg-green-50 border-green-200 hover:bg-green-100'
                          }`}
                        >
                          {/* 지역 헤더 */}
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                                densityLevel === 'high' ? 'bg-red-500' :
                                densityLevel === 'medium' ? 'bg-yellow-500' :
                                'bg-green-500'
                              }`}>
                                {index + 1}
                              </div>
                              <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100">
                                {region.region}
                              </h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                densityLevel === 'high' ? 'bg-red-100 text-red-800' :
                                densityLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {densityLevel === 'high' ? '고밀도' : densityLevel === 'medium' ? '중밀도' : '저밀도'}
                              </span>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-amber-800 dark:text-amber-200">
                                {total}
                              </div>
                              <div className="text-xs text-muted-foreground">총 등록</div>
                            </div>
                          </div>

                          {/* 시각적 데이터 바 */}
                          <div className="grid grid-cols-2 gap-4">
                            {/* 강아지 바 */}
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <span className="text-lg">🐕</span>
                                  <span className="text-sm font-medium text-orange-700 dark:text-orange-300">강아지</span>
                                </div>
                                <span className="text-lg font-bold text-orange-800 dark:text-orange-200">
                                  {region.dogs}마리
                                </span>
                              </div>
                              <div className="h-6 bg-orange-100 dark:bg-orange-800 rounded-full overflow-hidden relative">
                                <div
                                  className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-1000 ease-out flex items-center justify-center"
                                  style={{ width: `${dogsPercentage}%` }}
                                >
                                  {dogsPercentage > 30 && (
                                    <span className="text-xs font-bold text-white">
                                      {Math.round(dogsPercentage)}%
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* 시니어 바 */}
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <span className="text-lg">👴</span>
                                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300">시니어</span>
                                </div>
                                <span className="text-lg font-bold text-blue-800 dark:text-blue-200">
                                  {region.seniors}명
                                </span>
                              </div>
                              <div className="h-6 bg-blue-100 dark:bg-blue-800 rounded-full overflow-hidden relative">
                                <div
                                  className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-1000 ease-out flex items-center justify-center"
                                  style={{ width: `${seniorsPercentage}%` }}
                                >
                                  {seniorsPercentage > 30 && (
                                    <span className="text-xs font-bold text-white">
                                      {Math.round(seniorsPercentage)}%
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* 매칭률 표시 */}
                          <div className="mt-3 pt-3 border-t border-amber-200">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-muted-foreground">예상 매칭률</span>
                              <div className="flex items-center space-x-2">
                                <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                  <div
                                    className={`h-full rounded-full ${
                                      total > 10 ? 'bg-green-500' : total > 6 ? 'bg-yellow-500' : 'bg-red-500'
                                    }`}
                                    style={{ width: `${Math.min((total / 14) * 100, 100)}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-bold text-amber-800 dark:text-amber-200">
                                  {Math.round((total / 14) * 100)}%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* 지도 스타일 요약 */}
                  <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">지역별 분포 현황</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-red-600">
                          {regionData.filter(r => (r.dogs + r.seniors) >= 10).length}
                        </div>
                        <div className="text-xs text-muted-foreground">고밀도 지역</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-yellow-600">
                          {regionData.filter(r => (r.dogs + r.seniors) >= 6 && (r.dogs + r.seniors) < 10).length}
                        </div>
                        <div className="text-xs text-muted-foreground">중밀도 지역</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">
                          {regionData.filter(r => (r.dogs + r.seniors) < 6).length}
                        </div>
                        <div className="text-xs text-muted-foreground">저밀도 지역</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Regional Insights & Heatmap Style */}
              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 dark:text-amber-100">지역별 밀도 분석</CardTitle>
                  <CardDescription>지역별 등록 밀도 및 매칭 현황</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {regionData.map((region, index) => {
                      const totalRegistrations = region.dogs + region.seniors;
                      const matchingRate = Math.round((region.dogs / totalRegistrations) * 100);
                      const density = totalRegistrations > 10 ? 'high' : totalRegistrations > 6 ? 'medium' : 'low';

                      return (
                        <div key={index} className="relative">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <div className={`w-4 h-4 rounded-full ${
                                density === 'high' ? 'bg-red-500' :
                                density === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                              }`}></div>
                              <span className="font-semibold text-amber-900 dark:text-amber-100">
                                {region.region}
                              </span>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-bold text-amber-800 dark:text-amber-200">
                                {totalRegistrations}개체
                              </div>
                              <div className="text-xs text-muted-foreground">
                                매칭률 {matchingRate}%
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            {/* Dogs Bar */}
                            <div className="flex items-center space-x-3">
                              <div className="w-12 text-xs text-amber-700 dark:text-amber-300">강아지</div>
                              <div className="flex-1 bg-amber-100 dark:bg-amber-800 rounded-full h-3 overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-orange-400 to-amber-500 rounded-full transition-all duration-500"
                                  style={{ width: `${(region.dogs / Math.max(...regionData.map(r => r.dogs))) * 100}%` }}
                                ></div>
                              </div>
                              <span className="w-8 text-xs font-semibold text-amber-800 dark:text-amber-200">
                                {region.dogs}
                              </span>
                            </div>

                            {/* Seniors Bar */}
                            <div className="flex items-center space-x-3">
                              <div className="w-12 text-xs text-blue-700 dark:text-blue-300">시니어</div>
                              <div className="flex-1 bg-blue-100 dark:bg-blue-800 rounded-full h-3 overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-500"
                                  style={{ width: `${(region.seniors / Math.max(...regionData.map(r => r.seniors))) * 100}%` }}
                                ></div>
                              </div>
                              <span className="w-8 text-xs font-semibold text-blue-800 dark:text-blue-200">
                                {region.seniors}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 pt-4 border-t border-amber-200">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <span className="text-muted-foreground">고밀도</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="text-muted-foreground">중밀도</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-muted-foreground">저밀도</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Regional Performance Table */}
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 dark:text-amber-100">지역별 상세 통계</CardTitle>
                <CardDescription>각 지역의 등록, 매칭, 성과 지표 상세 분석</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-amber-200">
                        <th className="text-left py-3 px-4 font-semibold text-amber-900 dark:text-amber-100">지역</th>
                        <th className="text-center py-3 px-4 font-semibold text-amber-900 dark:text-amber-100">강아지</th>
                        <th className="text-center py-3 px-4 font-semibold text-amber-900 dark:text-amber-100">시니어</th>
                        <th className="text-center py-3 px-4 font-semibold text-amber-900 dark:text-amber-100">매칭률</th>
                        <th className="text-center py-3 px-4 font-semibold text-amber-900 dark:text-amber-100">상태</th>
                        <th className="text-center py-3 px-4 font-semibold text-amber-900 dark:text-amber-100">트렌드</th>
                      </tr>
                    </thead>
                    <tbody>
                      {regionData.map((region, index) => {
                        const total = region.dogs + region.seniors;
                        const matchingRate = Math.round((region.dogs / total) * 100);
                        const trend = index % 2 === 0 ? 'up' : 'down';

                        return (
                          <tr key={index} className="border-b border-amber-100 hover:bg-amber-50/50 dark:hover:bg-amber-900/20 transition-colors">
                            <td className="py-4 px-4">
                              <div className="flex items-center space-x-3">
                                <div className={`w-3 h-3 rounded-full ${
                                  total > 10 ? 'bg-red-400' : total > 6 ? 'bg-yellow-400' : 'bg-green-400'
                                }`}></div>
                                <span className="font-medium text-amber-900 dark:text-amber-100">{region.region}</span>
                              </div>
                            </td>
                            <td className="text-center py-4 px-4">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                                {region.dogs}마리
                              </span>
                            </td>
                            <td className="text-center py-4 px-4">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                {region.seniors}명
                              </span>
                            </td>
                            <td className="text-center py-4 px-4">
                              <div className="flex items-center justify-center space-x-2">
                                <div className="w-12 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                  <div
                                    className={`h-2 rounded-full ${matchingRate > 70 ? 'bg-green-500' : matchingRate > 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                    style={{ width: `${matchingRate}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-semibold text-amber-800 dark:text-amber-200">{matchingRate}%</span>
                              </div>
                            </td>
                            <td className="text-center py-4 px-4">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                total > 10 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                                total > 6 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                                'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                              }`}>
                                {total > 10 ? '활성' : total > 6 ? '보통' : '개선필요'}
                              </span>
                            </td>
                            <td className="text-center py-4 px-4">
                              <div className={`inline-flex items-center ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                                {trend === 'up' ? (
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                  </svg>
                                ) : (
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                )}
                                <span className="ml-1 text-xs">{trend === 'up' ? '+12%' : '-5%'}</span>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Enhanced Word Cloud */}
              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 dark:text-amber-100">상담 키워드 빈도 분석</CardTitle>
                  <CardDescription>매칭 상담에서 자주 언급되는 주요 키워드들의 빈도 분석</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <WordCloud data={consultationKeywords} />
                  </div>
                  <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-amber-900 dark:text-amber-100 mb-2">상위 키워드</div>
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span>일상케어</span>
                            <span className="font-bold text-amber-800">85회</span>
                          </div>
                          <div className="flex justify-between">
                            <span>산책동반</span>
                            <span className="font-bold text-amber-800">78회</span>
                          </div>
                          <div className="flex justify-between">
                            <span>건강관리</span>
                            <span className="font-bold text-amber-800">72회</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-amber-900 dark:text-amber-100 mb-2">추이 분석</div>
                        <div className="space-y-1 text-xs">
                          <div>• 의료동행 관련 문의 +15% 증가</div>
                          <div>• 정서지원 요청 +22% 증가</div>
                          <div>• 응급상황 대비 관심 높아짐</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Sunburst Chart */}
              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 dark:text-amber-100">매칭 프로세스 단계별 분석</CardTitle>
                  <CardDescription>4단계 매칭 프로세스의 세부 과정 및 소요 시간 분포</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex justify-center items-center">
                    <SunburstChart data={consultationFlow} width={350} height={350} />
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="grid grid-cols-4 gap-2 text-center text-xs">
                      <div>
                        <div className="font-bold text-blue-800 dark:text-blue-200">사전준비</div>
                        <div className="text-blue-600 dark:text-blue-400">평균 2.3일</div>
                      </div>
                      <div>
                        <div className="font-bold text-green-800 dark:text-green-200">강아지평가</div>
                        <div className="text-green-600 dark:text-green-400">평균 1.8일</div>
                      </div>
                      <div>
                        <div className="font-bold text-purple-800 dark:text-purple-200">매칭진행</div>
                        <div className="text-purple-600 dark:text-purple-400">평균 3.2일</div>
                      </div>
                      <div>
                        <div className="font-bold text-orange-800 dark:text-orange-200">사후관리</div>
                        <div className="text-orange-600 dark:text-orange-400">지속적</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}