"use client"

import { useState } from "react"
import { PawPrint, Users, PlusCircle, Lightbulb, Check, X, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Navigation from "@/components/navigation"

export default function Home() {

  // State for forms
  const [dogFormData, setDogFormData] = useState({
    name: "",
    breed: "",
    age: "",
    gender: "",
    weight: "",
    vaccination: "",
    temperament: "",
    specialNeeds: "",
    ownerName: "",
    ownerPhone: "",
    ownerEmail: "",
    address: ""
  })

  const [seniorFormData, setSeniorFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    livingArrangement: "",
    experience: "",
    availability: "",
    preferences: "",
    healthCondition: ""
  })

  const [matchFormData, setMatchFormData] = useState({
    dogId: "",
    seniorId: "",
    matchDate: "",
    trialPeriod: "",
    requirements: "",
    notes: ""
  })

  // State for recommendations
  const [showRecommendations, setShowRecommendations] = useState(false)
  const [recommendations, setRecommendations] = useState<any[]>([])
  const [selectedMemberForRecommendation, setSelectedMemberForRecommendation] = useState<any>(null)

  // Mock data
  const existingMembers = [
    { id: "1", name: "김영수", age: "75세", address: "서울 강남구", status: "매칭 완료", type: "시니어" },
    { id: "2", name: "이순자", age: "68세", address: "서울 서초구", status: "매칭 대기", type: "시니어" },
    { id: "3", name: "박철민", age: "72세", address: "서울 송파구", status: "매칭 대기", type: "시니어" },
    { id: "4", name: "정소영", age: "28세", address: "서울 마포구", status: "매칭 대기", type: "청년" },
    { id: "5", name: "최민수", age: "45세", address: "서울 용산구", status: "매칭 완료", type: "중년" },
    { id: "6", name: "한지우", age: "34세", address: "서울 종로구", status: "매칭 대기", type: "청년" }
  ]

  const existingDogs = [
    { id: "1", name: "멍멍이", breed: "골든 리트리버", age: "3세", status: "매칭 완료" },
    { id: "2", name: "바둑이", breed: "믹스", age: "5세", status: "매칭 대기" },
    { id: "3", name: "초코", breed: "푸들", age: "2세", status: "매칭 대기" }
  ]

  // Handler functions
  const handleDogSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Dog registration:", dogFormData)
    alert("강아지가 성공적으로 등록되었습니다!")
    setDogFormData({
      name: "",
      breed: "",
      age: "",
      gender: "",
      weight: "",
      vaccination: "",
      temperament: "",
      specialNeeds: "",
      ownerName: "",
      ownerPhone: "",
      ownerEmail: "",
      address: ""
    })
  }

  const handleSeniorSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Senior registration:", seniorFormData)
    alert("시니어가 성공적으로 등록되었습니다!")
    setSeniorFormData({
      name: "",
      age: "",
      gender: "",
      phone: "",
      email: "",
      address: "",
      livingArrangement: "",
      experience: "",
      availability: "",
      preferences: "",
      healthCondition: ""
    })
  }

  const handleMatchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Match registration:", matchFormData)
    alert("매칭이 성공적으로 등록되었습니다!")
    setMatchFormData({
      dogId: "",
      seniorId: "",
      matchDate: "",
      trialPeriod: "",
      requirements: "",
      notes: ""
    })
  }

  const handleGenerateRecommendations = (memberId: string) => {
    const selectedMember = existingMembers.find(member => member.id === memberId)
    if (!selectedMember) return

    const mockRecommendations = [
      {
        score: 92,
        dog: { name: "초코", breed: "푸들", age: "2세", size: "소형", energy: "중간", temperament: "온순하고 사람을 좋아함" },
        member: selectedMember
      },
      {
        score: 87,
        dog: { name: "바둑이", breed: "믹스", age: "5세", size: "중형", energy: "낮음", temperament: "차분하고 애정이 많음" },
        member: selectedMember
      }
    ]
    setSelectedMemberForRecommendation(selectedMember)
    setRecommendations(mockRecommendations)
    setShowRecommendations(true)
  }

  const handleAcceptRecommendation = (recommendation: typeof recommendations[0]) => {
    console.log("Accepting recommendation:", recommendation)
    alert(`${recommendation.dog.name}와 ${recommendation.member.name}님의 매칭이 확정되었습니다!`)
    setShowRecommendations(false)
    setRecommendations([])
    setSelectedMemberForRecommendation(null)
  }

  const handleRejectRecommendation = (recommendation: typeof recommendations[0]) => {
    console.log("Rejecting recommendation:", recommendation)
    setRecommendations(prev => prev.filter(rec => rec !== recommendation))
  }

  const handleCloseRecommendations = () => {
    setShowRecommendations(false)
    setRecommendations([])
    setSelectedMemberForRecommendation(null)
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950 dark:via-orange-950 dark:to-yellow-950">
      <Navigation />

      <div className="max-w-7xl mx-auto p-6">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">등록된 강아지</CardTitle>
              <PawPrint className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-800">24</div>
              <p className="text-xs text-muted-foreground">전월 대비 +3마리</p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">등록된 회원</CardTitle>
              <Users className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-800">24</div>
              <p className="text-xs text-muted-foreground">전월 대비 +5명</p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">매칭 성공</CardTitle>
              <Heart className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-800">12</div>
              <p className="text-xs text-muted-foreground">이번 달 매칭 수</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="dogs" className="space-y-6">
          <TabsList className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
            <TabsTrigger value="dogs">강아지 관리</TabsTrigger>
            <TabsTrigger value="seniors">회원 관리</TabsTrigger>
            <TabsTrigger value="matches">매칭 관리</TabsTrigger>
          </TabsList>

          <TabsContent value="dogs" className="space-y-4">
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-amber-900 dark:text-amber-100">강아지 등록 관리</CardTitle>
                    <CardDescription>등록된 강아지들을 관리하고 새로운 강아지를 등록할 수 있습니다.</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-amber-800 hover:bg-amber-900 dark:bg-amber-200 dark:text-amber-900">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        강아지 등록
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>강아지 등록</DialogTitle>
                        <DialogDescription>
                          새로운 강아지를 시스템에 등록합니다. 모든 정보를 정확히 입력해주세요.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleDogSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="dogName">강아지 이름 *</Label>
                            <Input
                              id="dogName"
                              value={dogFormData.name}
                              onChange={(e) => setDogFormData({...dogFormData, name: e.target.value})}
                              placeholder="예: 멍멍이"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="dogBreed">품종 *</Label>
                            <Select onValueChange={(value) => setDogFormData({...dogFormData, breed: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="품종 선택" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="golden-retriever">골든 리트리버</SelectItem>
                                <SelectItem value="labrador">라브라도</SelectItem>
                                <SelectItem value="poodle">푸들</SelectItem>
                                <SelectItem value="shiba">시바견</SelectItem>
                                <SelectItem value="maltese">말티즈</SelectItem>
                                <SelectItem value="mix">믹스</SelectItem>
                                <SelectItem value="other">기타</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="dogAge">나이 *</Label>
                            <Input
                              id="dogAge"
                              value={dogFormData.age}
                              onChange={(e) => setDogFormData({...dogFormData, age: e.target.value})}
                              placeholder="예: 3세"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="dogGender">성별 *</Label>
                            <Select onValueChange={(value) => setDogFormData({...dogFormData, gender: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="성별 선택" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">수컷</SelectItem>
                                <SelectItem value="female">암컷</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="dogWeight">체중</Label>
                            <Input
                              id="dogWeight"
                              value={dogFormData.weight}
                              onChange={(e) => setDogFormData({...dogFormData, weight: e.target.value})}
                              placeholder="예: 25kg"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="vaccination">예방접종 상태 *</Label>
                            <Select onValueChange={(value) => setDogFormData({...dogFormData, vaccination: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="예방접종 상태" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="complete">완료</SelectItem>
                                <SelectItem value="partial">부분 완료</SelectItem>
                                <SelectItem value="none">미접종</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="temperament">성격 특성</Label>
                          <Textarea
                            id="temperament"
                            value={dogFormData.temperament}
                            onChange={(e) => setDogFormData({...dogFormData, temperament: e.target.value})}
                            placeholder="강아지의 성격을 설명해주세요 (예: 활발함, 온순함, 사람을 좋아함 등)"
                            className="min-h-[80px]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="specialNeeds">특별한 요구사항</Label>
                          <Textarea
                            id="specialNeeds"
                            value={dogFormData.specialNeeds}
                            onChange={(e) => setDogFormData({...dogFormData, specialNeeds: e.target.value})}
                            placeholder="알레르기, 약물 복용, 건강 상태 등"
                            className="min-h-[80px]"
                          />
                        </div>

                        <div className="border-t pt-4">
                          <h3 className="text-lg font-semibold mb-4">보호자 정보</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="ownerName">보호자 이름 *</Label>
                              <Input
                                id="ownerName"
                                value={dogFormData.ownerName}
                                onChange={(e) => setDogFormData({...dogFormData, ownerName: e.target.value})}
                                placeholder="홍길동"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="ownerPhone">연락처 *</Label>
                              <Input
                                id="ownerPhone"
                                value={dogFormData.ownerPhone}
                                onChange={(e) => setDogFormData({...dogFormData, ownerPhone: e.target.value})}
                                placeholder="010-1234-5678"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="ownerEmail">이메일</Label>
                              <Input
                                id="ownerEmail"
                                type="email"
                                value={dogFormData.ownerEmail}
                                onChange={(e) => setDogFormData({...dogFormData, ownerEmail: e.target.value})}
                                placeholder="example@email.com"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="address">주소 *</Label>
                              <Input
                                id="address"
                                value={dogFormData.address}
                                onChange={(e) => setDogFormData({...dogFormData, address: e.target.value})}
                                placeholder="서울시 강남구"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-end gap-3">
                          <DialogTrigger asChild>
                            <Button type="button" variant="outline">취소</Button>
                          </DialogTrigger>
                          <Button type="submit" className="bg-amber-800 hover:bg-amber-900">
                            등록하기
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>강아지</TableHead>
                      <TableHead>품종</TableHead>
                      <TableHead>나이</TableHead>
                      <TableHead>상태</TableHead>
                      <TableHead>등록일</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/placeholder-dog.jpg" />
                          <AvatarFallback>🐕</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">멍멍이</span>
                      </TableCell>
                      <TableCell>골든 리트리버</TableCell>
                      <TableCell>3세</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">매칭 완료</Badge>
                      </TableCell>
                      <TableCell>2024-01-15</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/placeholder-dog.jpg" />
                          <AvatarFallback>🐕</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">바둑이</span>
                      </TableCell>
                      <TableCell>믹스</TableCell>
                      <TableCell>5세</TableCell>
                      <TableCell>
                        <Badge className="bg-amber-100 text-amber-800">매칭 대기</Badge>
                      </TableCell>
                      <TableCell>2024-01-20</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seniors" className="space-y-4">
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
              <CardHeader>
                <div>
                  <CardTitle className="text-amber-900 dark:text-amber-100">회원 관리</CardTitle>
                  <CardDescription>등록된 회원들을 관리할 수 있습니다.</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>회원</TableHead>
                      <TableHead>나이</TableHead>
                      <TableHead>유형</TableHead>
                      <TableHead>거주지역</TableHead>
                      <TableHead>상태</TableHead>
                      <TableHead>등록일</TableHead>
                      <TableHead>작업</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {existingMembers.map(member => (
                      <TableRow key={member.id}>
                        <TableCell className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src="/placeholder-person.jpg" />
                            <AvatarFallback>
                              {member.type === "시니어" ? "👴" : member.type === "청년" ? "👨" : "👱"}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{member.name}</span>
                        </TableCell>
                        <TableCell>{member.age}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={
                            member.type === "시니어" ? "bg-purple-100 text-purple-800" :
                            member.type === "청년" ? "bg-blue-100 text-blue-800" :
                            "bg-green-100 text-green-800"
                          }>
                            {member.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{member.address}</TableCell>
                        <TableCell>
                          <Badge className={member.status === "매칭 완료" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}>
                            {member.status}
                          </Badge>
                        </TableCell>
                        <TableCell>2024-01-{10 + parseInt(member.id)}</TableCell>
                        <TableCell>
                          {member.status === "매칭 대기" && (
                            <Button
                              onClick={() => handleGenerateRecommendations(member.id)}
                              size="sm"
                              variant="outline"
                              className="border-amber-200 text-amber-800 hover:bg-amber-50"
                            >
                              <Lightbulb className="h-4 w-4 mr-1" />
                              추천
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="matches" className="space-y-4">
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-amber-900 dark:text-amber-100">매칭된 강아지 & 시니어 관리</CardTitle>
                    <CardDescription>성공적으로 매칭된 강아지와 시니어 쌍을 관리합니다.</CardDescription>
                  </div>
                  <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-amber-800 hover:bg-amber-900 dark:bg-amber-200 dark:text-amber-900">
                          <PlusCircle className="h-4 w-4 mr-2" />
                          새 매칭 등록
                        </Button>
                      </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>새 매칭 등록</DialogTitle>
                        <DialogDescription>
                          등록된 강아지와 시니어를 매칭하여 새로운 관계를 만듭니다.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleMatchSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="dogSelect">강아지 선택 *</Label>
                            <Select onValueChange={(value) => setMatchFormData({...matchFormData, dogId: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="강아지를 선택하세요" />
                              </SelectTrigger>
                              <SelectContent>
                                {existingDogs.filter(dog => dog.status === "매칭 대기").map(dog => (
                                  <SelectItem key={dog.id} value={dog.id}>
                                    <div className="flex items-center gap-2">
                                      <span className="font-medium">{dog.name}</span>
                                      <span className="text-sm text-muted-foreground">
                                        ({dog.breed}, {dog.age})
                                      </span>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="seniorSelect">시니어 선택 *</Label>
                            <Select onValueChange={(value) => setMatchFormData({...matchFormData, seniorId: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="회원을 선택하세요" />
                              </SelectTrigger>
                              <SelectContent>
                                {existingMembers.filter(member => member.status === "매칭 대기").map(member => (
                                  <SelectItem key={member.id} value={member.id}>
                                    <div className="flex items-center gap-2">
                                      <span className="font-medium">{member.name}</span>
                                      <span className="text-sm text-muted-foreground">
                                        ({member.age}, {member.address})
                                      </span>
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="matchDate">매칭 시작일 *</Label>
                            <Input
                              id="matchDate"
                              type="date"
                              value={matchFormData.matchDate}
                              onChange={(e) => setMatchFormData({...matchFormData, matchDate: e.target.value})}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="trialPeriod">시범 기간</Label>
                            <Select onValueChange={(value) => setMatchFormData({...matchFormData, trialPeriod: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="시범 기간 선택" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1week">1주일</SelectItem>
                                <SelectItem value="2weeks">2주일</SelectItem>
                                <SelectItem value="1month">1개월</SelectItem>
                                <SelectItem value="none">시범 기간 없음</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="requirements">매칭 요구사항</Label>
                          <Textarea
                            id="requirements"
                            value={matchFormData.requirements}
                            onChange={(e) => setMatchFormData({...matchFormData, requirements: e.target.value})}
                            placeholder="매칭에 필요한 특별 요구사항이나 조건을 입력하세요"
                            className="min-h-[80px]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="matchNotes">매칭 노트</Label>
                          <Textarea
                            id="matchNotes"
                            value={matchFormData.notes}
                            onChange={(e) => setMatchFormData({...matchFormData, notes: e.target.value})}
                            placeholder="매칭 과정에서의 특이사항, 관찰 내용 등을 기록하세요"
                            className="min-h-[100px]"
                          />
                        </div>

                        <div className="flex justify-end gap-3">
                          <DialogTrigger asChild>
                            <Button type="button" variant="outline">취소</Button>
                          </DialogTrigger>
                          <Button type="submit" className="bg-amber-800 hover:bg-amber-900">
                            매칭 등록
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>강아지</TableHead>
                      <TableHead>시니어</TableHead>
                      <TableHead>매칭일</TableHead>
                      <TableHead>상태</TableHead>
                      <TableHead>관리</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>🐕</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">멍멍이</span>
                      </TableCell>
                      <TableCell className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>👴</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">김할아버지</span>
                      </TableCell>
                      <TableCell>2024-01-15</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800">활성</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" className="border-amber-200 text-amber-800">
                          상세보기
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Recommendations Popup Dialog */}
      <Dialog open={showRecommendations} onOpenChange={handleCloseRecommendations}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-amber-600" />
              {selectedMemberForRecommendation?.name}님을 위한 강아지 추천
              {recommendations.length > 0 && (
                <Badge className="bg-amber-100 text-amber-800">
                  {recommendations.length}마리 추천
                </Badge>
              )}
            </DialogTitle>
            <DialogDescription>
              AI가 분석한 최적의 매칭 강아지들을 확인하고 선택해주세요.
            </DialogDescription>
          </DialogHeader>

          {selectedMemberForRecommendation && (
            <div className="mb-6">
              {/* Selected Member Info */}
              <Card className="bg-blue-50/50 dark:bg-blue-900/20 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 flex items-center gap-2">
                        {selectedMemberForRecommendation.name}
                        <Badge variant="outline" className={`text-xs ${
                          selectedMemberForRecommendation.type === "시니어" ? "bg-purple-100 text-purple-800" :
                          selectedMemberForRecommendation.type === "청년" ? "bg-blue-100 text-blue-800" :
                          "bg-green-100 text-green-800"
                        }`}>
                          {selectedMemberForRecommendation.type}
                        </Badge>
                      </h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        {selectedMemberForRecommendation.age} • {selectedMemberForRecommendation.address}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {recommendations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendations.map((rec, index) => (
                <Card key={index} className="border-2 border-amber-200 bg-amber-50/50 dark:bg-amber-900/20">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <PawPrint className="h-5 w-5 text-amber-600" />
                        <span className="font-semibold text-amber-900 dark:text-amber-100">
                          {rec.score}점
                        </span>
                      </div>
                      <Badge
                        className={`${
                          rec.score >= 90 ? 'bg-green-100 text-green-800' :
                          rec.score >= 80 ? 'bg-blue-100 text-blue-800' :
                          rec.score >= 70 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-orange-100 text-orange-800'
                        }`}
                      >
                        {rec.score >= 90 ? '완벽' :
                         rec.score >= 80 ? '우수' :
                         rec.score >= 70 ? '좋음' : '보통'}
                      </Badge>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 bg-amber-100 dark:bg-amber-800 rounded-full flex items-center justify-center">
                          🐕
                        </div>
                        <h4 className="font-semibold text-amber-900 dark:text-amber-100">
                          {rec.dog.name}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {rec.dog.breed} • {rec.dog.age}
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
                        {rec.dog.size} • 에너지: {rec.dog.energy}
                      </p>
                      <p className="text-xs bg-amber-100 dark:bg-amber-800 p-2 rounded">
                        {rec.dog.temperament}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={() => handleAcceptRecommendation(rec)}
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 text-white flex-1"
                      >
                        <Check className="h-4 w-4 mr-1" />
                        매칭
                      </Button>
                      <Button
                        onClick={() => handleRejectRecommendation(rec)}
                        size="sm"
                        variant="outline"
                        className="border-red-200 text-red-600 hover:bg-red-50"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Lightbulb className="h-12 w-12 mx-auto mb-2 text-amber-400" />
              <p>현재 추천할 만한 강아지가 없습니다.</p>
              <p className="text-sm">더 많은 강아지가 등록되면 추천을 받을 수 있습니다.</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
