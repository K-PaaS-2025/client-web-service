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
import { Calendar, TrendingUp, Users, PawPrint, Heart, ArrowLeft } from "lucide-react"
import Link from "next/link"
import WordCloud from "@/components/charts/WordCloud"
import SunburstChart from "@/components/charts/SunburstChart"
import NetworkGraph from "@/components/charts/NetworkGraph"

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

// Advanced chart data
const consultationKeywords = [
  { text: '산책', value: 45 },
  { text: '건강관리', value: 38 },
  { text: '놀이', value: 32 },
  { text: '훈련', value: 28 },
  { text: '사회화', value: 25 },
  { text: '영양', value: 22 },
  { text: '안전', value: 20 },
  { text: '애정', value: 18 },
  { text: '운동', value: 15 },
  { text: '돌봄', value: 12 },
  { text: '의료', value: 10 },
  { text: '교육', value: 8 }
]

const consultationFlow = {
  name: '상담 과정',
  children: [
    {
      name: '초기 상담',
      children: [
        { name: '기본정보 수집', value: 25 },
        { name: '요구사항 파악', value: 20 },
        { name: '기대치 설정', value: 15 }
      ]
    },
    {
      name: '매칭 과정',
      children: [
        { name: '적합성 평가', value: 30 },
        { name: '시범 만남', value: 25 },
        { name: '최종 결정', value: 20 }
      ]
    },
    {
      name: '사후 관리',
      children: [
        { name: '정기 체크', value: 18 },
        { name: '문제 해결', value: 12 },
        { name: '만족도 조사', value: 10 }
      ]
    }
  ]
}

const networkData = {
  nodes: [
    { id: 'senior1', name: '김할아버지', type: 'senior' as const, value: 3 },
    { id: 'senior2', name: '박할머니', type: 'senior' as const, value: 2 },
    { id: 'senior3', name: '이할아버지', type: 'senior' as const, value: 4 },
    { id: 'dog1', name: '멍멍이', type: 'dog' as const, value: 3 },
    { id: 'dog2', name: '바둑이', type: 'dog' as const, value: 2 },
    { id: 'dog3', name: '초코', type: 'dog' as const, value: 4 },
    { id: 'match1', name: '매칭1', type: 'match' as const, value: 1 },
    { id: 'match2', name: '매칭2', type: 'match' as const, value: 1 }
  ],
  links: [
    { source: 'senior1', target: 'match1', value: 3 },
    { source: 'dog1', target: 'match1', value: 3 },
    { source: 'senior3', target: 'match2', value: 4 },
    { source: 'dog3', target: 'match2', value: 4 },
    { source: 'senior2', target: 'dog2', value: 1 }
  ]
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950 dark:via-orange-950 dark:to-yellow-950">
      {/* Header */}
      <div className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-amber-800 hover:bg-amber-50">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  돌아가기
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-amber-800 dark:bg-amber-200 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-amber-50 dark:text-amber-900" />
                </div>
                <h1 className="text-xl font-bold text-amber-900 dark:text-amber-100">데이터 대시보드</h1>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-amber-700 dark:text-amber-300">
              <Calendar className="h-4 w-4" />
              <span>2024년 6월 기준</span>
            </div>
          </div>
        </div>
      </div>

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
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 dark:text-amber-100">매칭 성공률 추이</CardTitle>
                <CardDescription>주간별 매칭 신청 대비 성공률 분석</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={matchingSuccess}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#FDE68A" />
                      <XAxis dataKey="week" stroke="#92400E" />
                      <YAxis stroke="#92400E" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#FFF7ED',
                          border: '1px solid #F59E0B',
                          borderRadius: '8px'
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="applications"
                        stroke="#F59E0B"
                        strokeWidth={3}
                        name="매칭 신청"
                      />
                      <Line
                        type="monotone"
                        dataKey="matches"
                        stroke="#D97706"
                        strokeWidth={3}
                        name="매칭 성공"
                      />
                      <Line
                        type="monotone"
                        dataKey="successRate"
                        stroke="#92400E"
                        strokeWidth={3}
                        name="성공률 (%)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="regional" className="space-y-6">
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 dark:text-amber-100">지역별 등록 현황</CardTitle>
                <CardDescription>서울시 주요 구별 강아지 및 시니어 등록 현황</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={regionData} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" stroke="#FDE68A" />
                      <XAxis type="number" stroke="#92400E" />
                      <YAxis dataKey="region" type="category" stroke="#92400E" />
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
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Word Cloud */}
              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 dark:text-amber-100">상담 키워드 분석</CardTitle>
                  <CardDescription>매칭 상담에서 자주 언급되는 키워드들</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <WordCloud data={consultationKeywords} />
                  </div>
                </CardContent>
              </Card>

              {/* Sunburst Chart */}
              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-900 dark:text-amber-100">상담 프로세스 분석</CardTitle>
                  <CardDescription>상담 과정별 단계 및 비중 분석</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex justify-center items-center">
                    <SunburstChart data={consultationFlow} width={350} height={350} />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Network Graph */}
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
              <CardHeader>
                <CardTitle className="text-amber-900 dark:text-amber-100">매칭 관계 네트워크</CardTitle>
                <CardDescription>
                  강아지, 시니어, 매칭 간의 관계도 - 노드를 드래그하여 이동할 수 있습니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <NetworkGraph
                    nodes={networkData.nodes}
                    links={networkData.links}
                    width={800}
                    height={350}
                  />
                </div>
                <div className="mt-4 flex gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-600"></div>
                    <span>강아지</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span>시니어</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-800"></div>
                    <span>매칭</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Insights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-amber-900">상담 만족도</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-amber-800">4.8/5.0</div>
                  <p className="text-xs text-green-600">+0.3 from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-amber-900">평균 매칭 시간</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-amber-800">7.2일</div>
                  <p className="text-xs text-green-600">-1.8일 faster</p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
                <CardHeader>
                  <CardTitle className="text-sm font-medium text-amber-900">재매칭률</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-amber-800">8.3%</div>
                  <p className="text-xs text-red-600">+1.2% from last month</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}