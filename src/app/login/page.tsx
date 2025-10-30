"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", formData)
    // Here you would typically handle authentication
    alert("로그인 시도 중...")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950 dark:via-orange-950 dark:to-yellow-950 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-amber-200">
        <CardHeader className="text-center">
          <div className="mx-auto h-12 w-12 bg-amber-800 dark:bg-amber-200 rounded-full flex items-center justify-center mb-4">
            <Heart className="h-6 w-6 text-amber-50 dark:text-amber-900" />
          </div>
          <CardTitle className="text-2xl font-bold text-amber-900 dark:text-amber-100">
            토닥: to-Dog
          </CardTitle>
          <CardDescription>
            사람과 동물이 함께 토닥이는 세상
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="이메일을 입력하세요"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="비밀번호를 입력하세요"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <Link
                href="/forgot-password"
                className="text-amber-700 hover:text-amber-900 underline"
              >
                비밀번호를 잊으셨나요?
              </Link>
            </div>
            <Button
              type="submit"
              className="w-full bg-amber-800 hover:bg-amber-900 dark:bg-amber-200 dark:text-amber-900"
            >
              로그인
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">계정이 없으신가요? </span>
            <Link
              href="/signup"
              className="text-amber-700 hover:text-amber-900 underline font-medium"
            >
              회원가입
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link
              href="/home"
              className="text-amber-700 hover:text-amber-900 underline text-sm"
            >
              대시보드 바로가기
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}