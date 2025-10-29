"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Heart } from "lucide-react"

export default function SplashPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login")
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950 dark:via-orange-950 dark:to-yellow-950 flex items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-24 w-24 bg-amber-800 dark:bg-amber-200 rounded-full flex items-center justify-center mb-8 animate-pulse">
          <Heart className="h-12 w-12 text-amber-50 dark:text-amber-900" />
        </div>
        <h1 className="text-3xl font-bold text-amber-900 dark:text-amber-100">
          반려동물 케어 매칭
        </h1>
        <p className="text-amber-700 dark:text-amber-300 mt-2">
          시니어와 반려동물을 연결하는 따뜻한 플랫폼
        </p>
      </div>
    </div>
  )
}