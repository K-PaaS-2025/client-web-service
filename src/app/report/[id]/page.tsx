"use client"

import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Heart,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  Activity,
  Star,
  ArrowLeft,
  User,
  PawPrint,
  MessageCircle,
  TrendingUp,
  FileText,
  Camera,
  Edit,
  AlertTriangle
} from "lucide-react"
import Navigation from "@/components/navigation"

export default function ReportDetailPage() {
  const params = useParams()
  const router = useRouter()
  const matchId = params.id as string

  // Mock detailed data - in real app, fetch by ID
  const matchDetail = {
    id: matchId,
    dog: {
      name: "멍멍이",
      breed: "골든 리트리버",
      age: "3세",
      photo: "/placeholder-dog.jpg",
      temperament: "활발하고 친근함",
      weight: "25kg",
      gender: "수컷",
      vaccination: "완료",
      healthStatus: "양호",
      specialNeeds: "특별한 요구사항 없음",
      ownerName: "김보호자",
      ownerPhone: "010-1111-2222"
    },
    member: {
      name: "정수진",
      age: "42세",
      type: "중년",
      photo: "/placeholder-person.jpg",
      address: "서울 강남구 테헤란로 123",
      phone: "010-1234-5678",
      email: "jung.sujin@email.com",
      gender: "여성",
      livingArrangement: "독거",
      experience: "경험 있음",
      healthCondition: "양호",
      mobility: "높음",
      preferences: "대형견 선호, 활발한 성격"
    },
    matchInfo: {
      matchDate: "2025-10-21",
      duration: "1주일",
      status: "활성",
      score: 92,
      lastContact: "2025-10-28",
      trialPeriod: "1주",
      requirements: "매일 산책, 주 2회 목욕",
      notes: "매우 만족스러운 매칭. 매일 산책을 함께 하고 있음."
    },
    timeline: [
      {
        date: "2025-10-21",
        type: "매칭 시작",
        description: "초기 만남 및 매칭 시작",
        status: "completed"
      },
      {
        date: "2025-10-22",
        type: "첫 산책",
        description: "첫 번째 산책 성공적으로 완료",
        status: "completed"
      },
      {
        date: "2025-10-24",
        type: "적응 점검",
        description: "매칭 상태 양호, 서로 잘 적응 중",
        status: "completed"
      },
      {
        date: "2025-10-26",
        type: "건강 점검",
        description: "강아지 컨디션 확인 완료",
        status: "completed"
      },
      {
        date: "2025-10-28",
        type: "주간 평가",
        description: "1주일차 평가 진행 중",
        status: "completed"
      }
    ],
    activities: [
      {
        date: "2025-10-28",
        activity: "산책",
        duration: "35분",
        location: "한강공원",
        notes: "아침 산책, 다른 강아지들과 잘 어울림"
      },
      {
        date: "2025-10-27",
        activity: "놀이시간",
        duration: "40분",
        location: "집 앞 공원",
        notes: "프리스비 놀이, 에너지 넘치고 활발함"
      },
      {
        date: "2025-10-26",
        activity: "산책",
        duration: "30분",
        location: "동네 공원",
        notes: "저녁 산책, 차분하게 잘 따라옴"
      },
      {
        date: "2025-10-25",
        activity: "목욕",
        duration: "25분",
        location: "집",
        notes: "목욕을 싫어하지 않고 순하게 받아들임"
      },
      {
        date: "2025-10-24",
        activity: "산책",
        duration: "40분",
        location: "한강공원",
        notes: "가을 날씨가 좋아서 긴 산책, 매우 만족스러워함"
      },
      {
        date: "2025-10-23",
        activity: "놀이시간",
        duration: "30분",
        location: "집 앞 공원",
        notes: "첫 놀이시간, 서로 적응하는 시간"
      },
      {
        date: "2025-10-22",
        activity: "첫 산책",
        duration: "25분",
        location: "동네 공원",
        notes: "첫 산책, 조심스럽게 주변 탐색"
      },
      {
        date: "2025-10-21",
        activity: "첫 만남",
        duration: "45분",
        location: "집",
        notes: "첫 만남, 서로 탐색하며 친해지는 시간"
      }
    ],
    aiCallRecords: [
      {
        date: "2025-10-28",
        time: "14:30",
        duration: "4분 32초",
        caller: "정수진",
        status: "완료",
        summary: "전반적으로 만족스러운 상태. 멍멍이와 잘 지내고 있으며 재택근무 중에도 좋은 동반자가 되고 있음.",
        keywords: ["만족", "건강", "산책", "즐거움", "잘 지냄"],
        riskKeywords: [],
        mood: "긍정적",
        healthStatus: "양호",
        transcript: "안녕하세요, 오늘 하루는 어떠셨나요? 네, 좋았습니다. 멍멍이와 아침에 산책도 하고 공원에서 놀기도 했어요. 건강상태는 어떠신가요? 네, 괜찮습니다. 멍멍이 덕분에 매일 운동도 하게 되고 기분도 좋아요..."
      },
      {
        date: "2025-10-27",
        time: "16:15",
        duration: "3분 45초",
        caller: "정수진",
        status: "완료",
        summary: "컨디션이 좋음. 멍멍이와의 관계도 더욱 돈독해지고 있음. 식욕과 수면 모두 양호.",
        keywords: ["컨디션 좋음", "관계 개선", "식욕", "수면", "안정감"],
        riskKeywords: [],
        mood: "매우 긍정적",
        healthStatus: "매우 양호",
        transcript: "오늘은 기분이 어떠셨어요? 아주 좋았어요. 멍멍이가 정말 똑똑해서 제 말을 잘 알아듣더라고요. 잠은 잘 주무셨나요? 네, 푹 잤습니다. 멍멍이가 옆에 있으니 외롭지 않아요..."
      },
      {
        date: "2025-10-26",
        time: "15:20",
        duration: "5분 12초",
        caller: "정수진",
        status: "완료",
        summary: "약간의 피로감을 호소했지만 전반적으로 양호. 멍멍이 돌봄에 대한 책임감과 보람을 느끼고 있음.",
        keywords: ["피로", "책임감", "보람", "애정", "돌봄"],
        riskKeywords: ["피로"],
        mood: "보통",
        healthStatus: "양호",
        transcript: "오늘은 좀 피곤하시네요? 네, 조금 그래요. 하지만 멍멍이 때문에 피곤한 건 아니에요. 오히려 멍멍이를 돌보는 게 보람있어요..."
      },
      {
        date: "2025-10-25",
        time: "14:45",
        duration: "4분 18초",
        caller: "정수진",
        status: "완료",
        summary: "목욕시키는 것에 대한 걱정이 있었으나 성공적으로 완료. 자신감 상승.",
        keywords: ["성공", "자신감", "목욕", "걱정 해결", "뿌듯함"],
        riskKeywords: [],
        mood: "긍정적",
        healthStatus: "양호",
        transcript: "오늘 멍멍이 목욕을 시켰는데 처음엔 걱정했거든요. 그런데 생각보다 순하게 받아들이더라고요. 정말 뿌듯했어요..."
      },
      {
        date: "2025-10-24",
        time: "17:30",
        duration: "3분 55초",
        caller: "정수진",
        status: "완료",
        summary: "가을 날씨에 긴 산책으로 인한 좋은 컨디션. 멍멍이와의 유대감 강화됨.",
        keywords: ["가을", "긴 산책", "유대감", "컨디션 좋음", "행복"],
        riskKeywords: [],
        mood: "매우 긍정적",
        healthStatus: "매우 양호",
        transcript: "가을 날씨가 정말 좋아서 오늘은 평소보다 오래 산책했어요. 멍멍이도 정말 좋아하더라고요. 저도 기분이 정말 좋았습니다..."
      },
      {
        date: "2025-10-23",
        time: "15:40",
        duration: "4분 02초",
        caller: "정수진",
        status: "완료",
        summary: "첫 놀이시간 후 긍정적 반응. 멍멍이와의 적응이 빠르게 진행됨.",
        keywords: ["첫 놀이", "적응", "빠른 진행", "긍정적", "놀이"],
        riskKeywords: [],
        mood: "긍정적",
        healthStatus: "양호",
        transcript: "오늘 첫 놀이시간을 가졌는데 생각보다 멍멍이가 빨리 적응하더라고요. 제가 던진 공을 잘 가져오고 즐거워하는 것 같아요..."
      },
      {
        date: "2025-10-22",
        time: "16:30",
        duration: "5분 20초",
        caller: "정수진",
        status: "완료",
        summary: "첫 산책 후 소감. 조심스럽지만 멍멍이가 잘 따라와 줘서 기쁨.",
        keywords: ["첫 산책", "조심스러움", "잘 따라옴", "기쁨", "적응"],
        riskKeywords: [],
        mood: "긍정적",
        healthStatus: "양호",
        transcript: "오늘 첫 산책을 나갔는데요, 처음엔 어떻게 해야 할지 몰랐는데 멍멍이가 제 옆에서 잘 걸어주더라고요. 정말 기뻤어요..."
      },
      {
        date: "2025-10-21",
        time: "19:00",
        duration: "6분 15초",
        caller: "정수진",
        status: "완료",
        summary: "첫 만남 후 소감. 약간의 긴장감은 있지만 전반적으로 긍정적인 첫인상.",
        keywords: ["첫 만남", "긍정적", "첫인상", "기대", "새로운 시작"],
        riskKeywords: ["긴장"],
        mood: "기대감",
        healthStatus: "양호",
        transcript: "오늘 처음 멍멍이를 만났어요. 처음엔 서로 조심스러워했지만 금세 친해지더라고요. 앞으로가 기대됩니다..."
      }
    ],
    healthRecords: [
      {
        date: "2025-10-26",
        type: "건강 체크",
        result: "양호",
        notes: "식욕, 활동량 모두 정상. 새 환경에 잘 적응 중"
      },
      {
        date: "2025-10-22",
        type: "초기 검진",
        result: "양호",
        notes: "매칭 전 건강상태 확인 완료"
      }
    ],
    feedback: [
      {
        date: "2025-10-27",
        from: "정수진",
        rating: 5,
        comment: "재택근무로 집에서 혼자 있는 시간이 많았는데, 멍멍이 덕분에 외롭지 않아요. 정말 좋은 친구를 만났습니다."
      },
      {
        date: "2025-10-24",
        from: "김보호자",
        rating: 5,
        comment: "정수진님께서 멍멍이를 정말 잘 돌봐주고 계세요. 안심됩니다."
      }
    ]
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "활성":
        return "bg-green-100 text-green-800"
      case "시범기간":
        return "bg-blue-100 text-blue-800"
      case "완료":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-amber-100 text-amber-800"
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-blue-600"
    if (score >= 70) return "text-amber-600"
    return "text-red-600"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950 dark:via-orange-950 dark:to-yellow-950">
      <Navigation />

      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="border-amber-200 text-amber-800 hover:bg-amber-50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            돌아가기
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-amber-900 dark:text-amber-100">
              매칭 상세 리포트
            </h1>
            <p className="text-amber-700 dark:text-amber-300">
              {matchDetail.dog.name} & {matchDetail.member.name}님의 매칭 정보
            </p>
          </div>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">매칭 점수</CardTitle>
              <Star className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${getScoreColor(matchDetail.matchInfo.score)}`}>
                {matchDetail.matchInfo.score}점
              </div>
              <Progress value={matchDetail.matchInfo.score} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">매칭 상태</CardTitle>
              <Activity className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <Badge className={`${getStatusColor(matchDetail.matchInfo.status)} text-lg px-3 py-1`}>
                {matchDetail.matchInfo.status}
              </Badge>
              <p className="text-xs text-muted-foreground mt-2">{matchDetail.matchInfo.duration} 진행</p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">매칭 기간</CardTitle>
              <Calendar className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-800">
                {matchDetail.matchInfo.duration}
              </div>
              <p className="text-xs text-muted-foreground">{matchDetail.matchInfo.matchDate} 시작</p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">최근 연락</CardTitle>
              <MessageCircle className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-purple-800">
                {matchDetail.matchInfo.lastContact}
              </div>
              <p className="text-xs text-muted-foreground">정기 점검 완료</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Dog Profile */}
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PawPrint className="h-5 w-5 text-amber-600" />
                강아지 프로필
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={matchDetail.dog.photo} />
                  <AvatarFallback>🐕</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100">
                    {matchDetail.dog.name}
                  </h3>
                  <p className="text-amber-700 dark:text-amber-300">
                    {matchDetail.dog.breed} • {matchDetail.dog.age}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-muted-foreground">성별:</span>
                  <p>{matchDetail.dog.gender}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">체중:</span>
                  <p>{matchDetail.dog.weight}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">예방접종:</span>
                  <p>{matchDetail.dog.vaccination}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">건강상태:</span>
                  <p>{matchDetail.dog.healthStatus}</p>
                </div>
              </div>

              <div>
                <span className="font-medium text-muted-foreground">성격:</span>
                <p className="bg-amber-50 dark:bg-amber-900/20 p-2 rounded mt-1 text-sm">
                  {matchDetail.dog.temperament}
                </p>
              </div>

              <div>
                <span className="font-medium text-muted-foreground">보호자:</span>
                <p className="text-sm">{matchDetail.dog.ownerName}</p>
                <p className="text-sm text-blue-600">{matchDetail.dog.ownerPhone}</p>
              </div>
            </CardContent>
          </Card>

          {/* Senior Profile */}
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                고립자 프로필
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={matchDetail.member.photo} />
                  <AvatarFallback>
                    {matchDetail.member.type === "시니어" ? "👴" : matchDetail.member.type === "청년" ? "👨" : "👱"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 flex items-center gap-2">
                    {matchDetail.member.name}
                    <Badge variant="outline" className={`text-xs ${
                      matchDetail.member.type === "시니어" ? "bg-purple-100 text-purple-800" :
                      matchDetail.member.type === "청년" ? "bg-blue-100 text-blue-800" :
                      "bg-green-100 text-green-800"
                    }`}>
                      {matchDetail.member.type}
                    </Badge>
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300">
                    {matchDetail.member.age} • {matchDetail.member.gender}
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span>{matchDetail.member.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span>{matchDetail.member.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span>{matchDetail.member.email}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 text-sm">
                <div>
                  <span className="font-medium text-muted-foreground">거주형태:</span>
                  <p>{matchDetail.member.livingArrangement}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">반려동물 경험:</span>
                  <p>{matchDetail.member.experience}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">건강상태:</span>
                  <p>{matchDetail.member.healthCondition}</p>
                </div>
              </div>

              <div>
                <span className="font-medium text-muted-foreground">선호사항:</span>
                <p className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded mt-1 text-sm">
                  {matchDetail.member.preferences}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Match Summary */}
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                매칭 요약
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className={`text-4xl font-bold ${getScoreColor(matchDetail.matchInfo.score)}`}>
                  {matchDetail.matchInfo.score}점
                </div>
                <p className="text-muted-foreground">매칭 점수</p>
                <Progress value={matchDetail.matchInfo.score} className="mt-2" />
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-muted-foreground">시작일:</span>
                  <p>{matchDetail.matchInfo.matchDate}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">시범기간:</span>
                  <p>{matchDetail.matchInfo.trialPeriod}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">요구사항:</span>
                  <p>{matchDetail.matchInfo.requirements}</p>
                </div>
              </div>

              <div>
                <span className="font-medium text-muted-foreground">현재 상황:</span>
                <p className="bg-green-50 dark:bg-green-900/20 p-3 rounded mt-1 text-sm">
                  {matchDetail.matchInfo.notes}
                </p>
              </div>

              <Button className="w-full bg-amber-800 hover:bg-amber-900">
                <Edit className="h-4 w-4 mr-2" />
                매칭 정보 수정
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Tabs */}
        <Tabs defaultValue="timeline" className="space-y-6">
          <TabsList className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
            <TabsTrigger value="timeline">타임라인</TabsTrigger>
            <TabsTrigger value="activities">활동 기록</TabsTrigger>
            <TabsTrigger value="aiCalls">AI 음성 통화</TabsTrigger>
            <TabsTrigger value="health">건강 기록</TabsTrigger>
            <TabsTrigger value="feedback">피드백</TabsTrigger>
          </TabsList>

          <TabsContent value="timeline">
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
              <CardHeader>
                <CardTitle>매칭 타임라인</CardTitle>
                <CardDescription>매칭 과정의 주요 이벤트들을 시간순으로 확인할 수 있습니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {matchDetail.timeline.map((event, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`w-3 h-3 rounded-full mt-2 ${
                        event.status === 'completed' ? 'bg-green-500' : 'bg-amber-500'
                      }`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{event.type}</h4>
                          <Badge variant="outline" className="text-xs">
                            {event.date}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activities">
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
              <CardHeader>
                <CardTitle>활동 기록</CardTitle>
                <CardDescription>강아지와 회원의 함께한 활동들을 매일 기록합니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {matchDetail.activities.map((activity, index) => (
                    <div key={index} className="border-l-4 border-amber-300 pl-4 py-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{activity.activity}</h4>
                          <p className="text-sm text-muted-foreground">
                            {activity.location} • {activity.duration}
                          </p>
                        </div>
                        <Badge variant="outline">{activity.date}</Badge>
                      </div>
                      <p className="text-sm mt-2 bg-amber-50 dark:bg-amber-900/20 p-2 rounded">
                        {activity.notes}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="aiCalls">
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-green-600" />
                  AI 음성 통화 기록
                </CardTitle>
                <CardDescription>
                  매칭된 회원과의 AI 음성 통화를 통해 상태를 모니터링하고 키워드를 분석합니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {matchDetail.aiCallRecords.map((call, index) => (
                    <div key={index} className="border rounded-lg p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
                      {/* Call Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center">
                            <Phone className="h-5 w-5 text-green-600 dark:text-green-300" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-900 dark:text-green-100">
                              {call.caller}님과의 통화
                            </h4>
                            <p className="text-sm text-green-700 dark:text-green-300">
                              {call.date} {call.time} • {call.duration}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={`mb-2 ${
                            call.status === "완료" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                          }`}>
                            {call.status}
                          </Badge>
                          <div className="text-sm">
                            <span className={`font-medium ${
                              call.mood === "매우 긍정적" ? "text-green-600" :
                              call.mood === "긍정적" ? "text-blue-600" :
                              call.mood === "보통" ? "text-amber-600" :
                              "text-red-600"
                            }`}>
                              기분: {call.mood}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Call Summary */}
                      <div className="mb-4">
                        <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">통화 요약</h5>
                        <p className="text-sm bg-white dark:bg-gray-800 p-3 rounded border">
                          {call.summary}
                        </p>
                      </div>

                      {/* Keywords Analysis */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                            <Star className="h-4 w-4 text-blue-500" />
                            긍정 키워드
                          </h5>
                          <div className="flex flex-wrap gap-1">
                            {call.keywords.map((keyword, i) => (
                              <Badge key={i} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                            위험 키워드
                          </h5>
                          <div className="flex flex-wrap gap-1">
                            {call.riskKeywords.length > 0 ? (
                              call.riskKeywords.map((keyword, i) => (
                                <Badge key={i} variant="outline" className="bg-red-50 text-red-700 border-red-200">
                                  {keyword}
                                </Badge>
                              ))
                            ) : (
                              <span className="text-sm text-green-600">위험 키워드 없음</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Health Status */}
                      <div className="mb-4">
                        <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                          <Activity className="h-4 w-4 text-green-500" />
                          건강 상태
                        </h5>
                        <Badge className={`${
                          call.healthStatus === "매우 양호" ? "bg-green-100 text-green-800" :
                          call.healthStatus === "양호" ? "bg-blue-100 text-blue-800" :
                          call.healthStatus === "보통" ? "bg-amber-100 text-amber-800" :
                          "bg-red-100 text-red-800"
                        }`}>
                          {call.healthStatus}
                        </Badge>
                      </div>

                      {/* Transcript */}
                      <div>
                        <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                          <FileText className="h-4 w-4 text-purple-500" />
                          통화 내용 (일부)
                        </h5>
                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded border text-sm">
                          <p className="text-gray-700 dark:text-gray-300 italic">
                            "{call.transcript}"
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="health">
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
              <CardHeader>
                <CardTitle>건강 기록</CardTitle>
                <CardDescription>강아지의 건강 상태와 정기 검진 결과를 관리합니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {matchDetail.healthRecords.map((record, index) => (
                    <div key={index} className="border rounded-lg p-4 bg-blue-50/50 dark:bg-blue-900/10">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{record.type}</h4>
                        <div className="text-right">
                          <Badge className="bg-green-100 text-green-800 mb-1">
                            {record.result}
                          </Badge>
                          <p className="text-sm text-muted-foreground">{record.date}</p>
                        </div>
                      </div>
                      <p className="text-sm">{record.notes}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback">
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
              <CardHeader>
                <CardTitle>피드백</CardTitle>
                <CardDescription>고립자와 보호자의 매칭에 대한 피드백을 확인할 수 있습니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {matchDetail.feedback.map((feedback, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold">{feedback.from}</h4>
                          <div className="flex items-center gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < feedback.rating
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <Badge variant="outline">{feedback.date}</Badge>
                      </div>
                      <p className="text-sm bg-gray-50 dark:bg-gray-800 p-3 rounded">
                        "{feedback.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}