"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, Calendar, MapPin, Phone, Mail, Clock, Activity, Star } from "lucide-react"
import Navigation from "@/components/navigation"

export default function ReportPage() {
  // Mock data for matched pairs
  const matchedPairs = [
    {
      id: "1",
      dog: {
        name: "멍멍이",
        breed: "골든 리트리버",
        age: "3세",
        photo: "/placeholder-dog.jpg",
        temperament: "활발하고 친근함",
        weight: "25kg"
      },
      member: {
        name: "김영수",
        age: "75세",
        type: "시니어",
        photo: "/placeholder-person.jpg",
        address: "서울 강남구",
        phone: "010-1234-5678",
        email: "kim@email.com"
      },
      matchInfo: {
        matchDate: "2024-01-15",
        duration: "3개월",
        status: "활성",
        score: 92,
        lastContact: "2024-01-20",
        notes: "매우 만족스러운 매칭. 매일 산책을 함께 하고 있음."
      }
    },
    {
      id: "2",
      dog: {
        name: "바둑이",
        breed: "믹스",
        age: "5세",
        photo: "/placeholder-dog.jpg",
        temperament: "차분하고 온순함",
        weight: "18kg"
      },
      member: {
        name: "이순자",
        age: "68세",
        type: "시니어",
        photo: "/placeholder-person.jpg",
        address: "서울 서초구",
        phone: "010-2345-6789",
        email: "lee@email.com"
      },
      matchInfo: {
        matchDate: "2024-01-20",
        duration: "2개월",
        status: "활성",
        score: 87,
        lastContact: "2024-01-22",
        notes: "적응 기간을 거쳐 현재 안정적인 관계 유지 중."
      }
    },
    {
      id: "3",
      dog: {
        name: "초코",
        breed: "푸들",
        age: "2세",
        photo: "/placeholder-dog.jpg",
        temperament: "똑똑하고 애교 많음",
        weight: "8kg"
      },
      member: {
        name: "정소영",
        age: "28세",
        type: "청년",
        photo: "/placeholder-person.jpg",
        address: "서울 마포구",
        phone: "010-3456-7890",
        email: "jung@email.com"
      },
      matchInfo: {
        matchDate: "2024-02-01",
        duration: "1개월",
        status: "시범기간",
        score: 85,
        lastContact: "2024-02-05",
        notes: "재택근무로 강아지와 충분한 시간을 보낼 수 있어 좋은 매칭."
      }
    },
    {
      id: "4",
      dog: {
        name: "루비",
        breed: "말티즈",
        age: "4세",
        photo: "/placeholder-dog.jpg",
        temperament: "사교적이고 활발함",
        weight: "5kg"
      },
      member: {
        name: "최민수",
        age: "45세",
        type: "중년",
        photo: "/placeholder-person.jpg",
        address: "서울 용산구",
        phone: "010-4567-8901",
        email: "choi@email.com"
      },
      matchInfo: {
        matchDate: "2024-01-28",
        duration: "1개월",
        status: "활성",
        score: 90,
        lastContact: "2024-02-03",
        notes: "이혼 후 혼자 지내며 외로움을 많이 느꼈는데 루비가 큰 위로가 됨."
      }
    },
    {
      id: "5",
      dog: {
        name: "두부",
        breed: "시바견",
        age: "6세",
        photo: "/placeholder-dog.jpg",
        temperament: "독립적이고 충성심 강함",
        weight: "12kg"
      },
      member: {
        name: "정철호",
        age: "78세",
        type: "시니어",
        photo: "/placeholder-person.jpg",
        address: "서울 용산구",
        phone: "010-5678-9012",
        email: "jung2@email.com"
      },
      matchInfo: {
        matchDate: "2024-01-10",
        duration: "4개월",
        status: "활성",
        score: 88,
        lastContact: "2024-01-25",
        notes: "조용하고 안정적인 관계를 유지하고 있음."
      }
    },
    {
      id: "6",
      dog: {
        name: "코코",
        breed: "코기",
        age: "3세",
        photo: "/placeholder-dog.jpg",
        temperament: "에너지 넘치고 장난기 많음",
        weight: "15kg"
      },
      member: {
        name: "한지우",
        age: "34세",
        type: "청년",
        photo: "/placeholder-person.jpg",
        address: "서울 종로구",
        phone: "010-6789-0123",
        email: "han@email.com"
      },
      matchInfo: {
        matchDate: "2024-02-10",
        duration: "2주",
        status: "시범기간",
        score: 83,
        lastContact: "2024-02-12",
        notes: "프리랜서로 집에서 일하며 코코와 함께 활동적인 생활 중."
      }
    },
    {
      id: "7",
      dog: {
        name: "하늘이",
        breed: "비숑프리제",
        age: "4세",
        photo: "/placeholder-dog.jpg",
        temperament: "온화하고 사람을 좋아함",
        weight: "7kg"
      },
      member: {
        name: "윤병수",
        age: "73세",
        type: "시니어",
        photo: "/placeholder-person.jpg",
        address: "서울 성북구",
        phone: "010-7890-1234",
        email: "yoon@email.com"
      },
      matchInfo: {
        matchDate: "2024-01-25",
        duration: "2개월",
        status: "활성",
        score: 94,
        lastContact: "2024-02-08",
        notes: "매우 성공적인 매칭. 윤병수님의 우울감이 크게 개선됨."
      }
    },
    {
      id: "8",
      dog: {
        name: "모카",
        breed: "닥스훈트",
        age: "5세",
        photo: "/placeholder-dog.jpg",
        temperament: "호기심 많고 충성심 강함",
        weight: "9kg"
      },
      member: {
        name: "김수진",
        age: "41세",
        type: "중년",
        photo: "/placeholder-person.jpg",
        address: "서울 동작구",
        phone: "010-8901-2345",
        email: "kim.s@email.com"
      },
      matchInfo: {
        matchDate: "2024-02-05",
        duration: "3주",
        status: "활성",
        score: 81,
        lastContact: "2024-02-15",
        notes: "회사 퇴직 후 집에서 혼자 지내며 모카와 함께 새로운 일상 적응 중."
      }
    },
    {
      id: "9",
      dog: {
        name: "보리",
        breed: "진돗개",
        age: "7세",
        photo: "/placeholder-dog.jpg",
        temperament: "차분하고 주인에게 헌신적",
        weight: "20kg"
      },
      member: {
        name: "한광열",
        age: "76세",
        type: "시니어",
        photo: "/placeholder-person.jpg",
        address: "서울 관악구",
        phone: "010-9012-3456",
        email: "han.g@email.com"
      },
      matchInfo: {
        matchDate: "2024-01-05",
        duration: "5개월",
        status: "활성",
        score: 96,
        lastContact: "2024-02-10",
        notes: "가장 오래된 매칭 중 하나. 서로에게 완벽한 동반자가 됨."
      }
    },
    {
      id: "10",
      dog: {
        name: "별이",
        breed: "요크셔테리어",
        age: "3세",
        photo: "/placeholder-dog.jpg",
        temperament: "작지만 용감하고 활발함",
        weight: "4kg"
      },
      member: {
        name: "박지영",
        age: "30세",
        type: "청년",
        photo: "/placeholder-person.jpg",
        address: "서울 영등포구",
        phone: "010-0123-4567",
        email: "park@email.com"
      },
      matchInfo: {
        matchDate: "2024-02-12",
        duration: "1주",
        status: "시범기간",
        score: 78,
        lastContact: "2024-02-14",
        notes: "새로운 도시로 이사 와서 외로움을 느끼던 중 별이를 만나 적응 중."
      }
    }
  ]

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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-amber-900 dark:text-amber-100 mb-2">
            매칭 리포트
          </h1>
          <p className="text-amber-700 dark:text-amber-300">
            사회적으로 고립된 분들과 반려동물의 매칭 현황을 확인하고 관리할 수 있습니다.
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">총 매칭</CardTitle>
              <Heart className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-800">{matchedPairs.length}</div>
              <p className="text-xs text-muted-foreground">현재 진행 중</p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">활성 매칭</CardTitle>
              <Activity className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-800">
                {matchedPairs.filter(pair => pair.matchInfo.status === "활성").length}
              </div>
              <p className="text-xs text-muted-foreground">정상 운영 중</p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">시범 기간</CardTitle>
              <Clock className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-800">
                {matchedPairs.filter(pair => pair.matchInfo.status === "시범기간").length}
              </div>
              <p className="text-xs text-muted-foreground">적응 중</p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">평균 점수</CardTitle>
              <Star className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-800">
                {Math.round(matchedPairs.reduce((sum, pair) => sum + pair.matchInfo.score, 0) / matchedPairs.length)}
              </div>
              <p className="text-xs text-muted-foreground">매칭 만족도</p>
            </CardContent>
          </Card>
        </div>

        {/* Matching Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchedPairs.map((pair) => (
            <Card key={pair.id} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200 hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    <span className="text-sm font-medium text-amber-900 dark:text-amber-100">
                      매칭 #{pair.id}
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge className={getStatusColor(pair.matchInfo.status)}>
                      {pair.matchInfo.status}
                    </Badge>
                    <span className={`text-sm font-bold ${getScoreColor(pair.matchInfo.score)}`}>
                      {pair.matchInfo.score}점
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  {/* Dog Info */}
                  <div className="bg-amber-50/50 dark:bg-amber-900/20 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={pair.dog.photo} />
                        <AvatarFallback>🐕</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-amber-900 dark:text-amber-100">
                          {pair.dog.name}
                        </h4>
                        <p className="text-sm text-amber-700 dark:text-amber-300">
                          {pair.dog.breed} • {pair.dog.age} • {pair.dog.weight}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-800 p-2 rounded">
                      {pair.dog.temperament}
                    </p>
                  </div>

                  {/* Member Info */}
                  <div className="bg-blue-50/50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={pair.member.photo} />
                        <AvatarFallback>
                          {pair.member.type === "시니어" ? "👴" : pair.member.type === "청년" ? "👨" : "👱"}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-blue-900 dark:text-blue-100">
                          {pair.member.name}
                        </h4>
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            {pair.member.age}
                          </p>
                          <Badge variant="outline" className={`text-xs ${
                            pair.member.type === "시니어" ? "bg-purple-100 text-purple-800" :
                            pair.member.type === "청년" ? "bg-blue-100 text-blue-800" :
                            "bg-green-100 text-green-800"
                          }`}>
                            {pair.member.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                        <MapPin className="h-3 w-3" />
                        <span>{pair.member.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                        <Phone className="h-3 w-3" />
                        <span>{pair.member.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                        <Mail className="h-3 w-3" />
                        <span>{pair.member.email}</span>
                      </div>
                    </div>
                  </div>

                  {/* Match Info */}
                  <div className="bg-green-50/50 dark:bg-green-900/20 p-4 rounded-lg">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-green-700 dark:text-green-300">매칭일:</span>
                        <span className="font-medium">{pair.matchInfo.matchDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-700 dark:text-green-300">기간:</span>
                        <span className="font-medium">{pair.matchInfo.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-700 dark:text-green-300">최근 연락:</span>
                        <span className="font-medium">{pair.matchInfo.lastContact}</span>
                      </div>
                    </div>
                    <div className="mt-3 p-2 bg-green-100 dark:bg-green-800 rounded text-xs">
                      {pair.matchInfo.notes}
                    </div>
                  </div>
                </div>

                {/* Action Button - Fixed at bottom */}
                <div className="mt-6 pt-4 border-t">
                  <Button
                    className="w-full bg-amber-800 hover:bg-amber-900 dark:bg-amber-200 dark:text-amber-900"
                    variant="default"
                    onClick={() => window.location.href = `/report/${pair.id}`}
                  >
                    상세 보기
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}