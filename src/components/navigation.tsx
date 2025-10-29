"use client"

import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface NavigationProps {
  showDateInfo?: boolean
}

export default function Navigation({ showDateInfo = false }: NavigationProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = () => {
    if (confirm("로그아웃 하시겠습니까?")) {
      router.push("/login")
    }
  }

  const menuItems = [
    { name: "홈", path: "/home" },
    { name: "대시보드", path: "/dashboard" },
    { name: "리포트", path: "/report" }
  ]

  return (
    <div className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Image
              src="/icon.png"
              alt="토닥 로고"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <h1 className="text-xl font-bold text-amber-900 dark:text-amber-100">
              토닥
            </h1>
          </div>

          <nav className="flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-amber-700 dark:hover:text-amber-300 ${
                  pathname === item.path
                    ? "text-amber-800 dark:text-amber-200"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-red-200 text-red-800 hover:bg-red-50"
              onClick={handleLogout}
            >
              로그아웃
            </Button>
            {showDateInfo && (
              <div className="flex items-center gap-2 text-sm text-amber-700 dark:text-amber-300">
                <Calendar className="h-4 w-4" />
                <span>2024년 6월 기준</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}