"use client"

import { useState } from "react"

interface RegionData {
  region: string
  dogs: number
  seniors: number
}

interface SeoulMapProps {
  data: RegionData[]
}

export default function SeoulMap({ data }: SeoulMapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  const getRegionColor = (regionName: string) => {
    const regionData = data.find(d => d.region === regionName)
    if (!regionData) return "#E5E7EB"

    const total = regionData.dogs + regionData.seniors
    if (total >= 10) return "#EF4444" // 고밀도 - 빨강
    if (total >= 6) return "#F59E0B" // 중밀도 - 주황
    return "#10B981" // 저밀도 - 녹색
  }

  const getRegionData = (regionName: string) => {
    return data.find(d => d.region === regionName)
  }

  const regions = [
    {
      id: "gangnam",
      name: "강남구",
      path: "M 180 200 L 240 200 L 250 230 L 220 250 L 170 240 L 165 220 Z",
      labelX: 207,
      labelY: 225
    },
    {
      id: "mapo",
      name: "마포구",
      path: "M 80 100 L 140 95 L 150 130 L 130 145 L 90 140 L 75 115 Z",
      labelX: 112,
      labelY: 120
    },
    {
      id: "jongro",
      name: "종로구",
      path: "M 140 70 L 200 75 L 210 95 L 190 110 L 150 105 L 135 85 Z",
      labelX: 172,
      labelY: 92
    },
    {
      id: "seocho",
      name: "서초구",
      path: "M 170 240 L 220 250 L 230 280 L 200 300 L 160 290 L 155 260 Z",
      labelX: 192,
      labelY: 270
    },
    {
      id: "yongsan",
      name: "용산구",
      path: "M 130 145 L 190 150 L 200 180 L 180 200 L 140 195 L 125 170 Z",
      labelX: 162,
      labelY: 172
    }
  ]

  return (
    <div className="relative">
      <svg
        viewBox="0 0 350 340"
        className="w-full h-80 border border-amber-200 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950"
      >
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>

        {/* 서울시 전체 경계 */}
        <path
          d="M 70 80 L 280 70 L 300 150 L 290 240 L 250 310 L 150 320 L 60 280 L 50 200 L 55 120 Z"
          fill="#FEF3C7"
          opacity="0.2"
          stroke="#D97706"
          strokeWidth="2"
          strokeDasharray="5 5"
        />

        {/* 한강 */}
        <path
          d="M 70 180 Q 120 175 170 180 Q 220 185 270 180 Q 220 190 170 185 Q 120 190 70 185 Z"
          fill="#3B82F6"
          opacity="0.6"
          stroke="#2563EB"
          strokeWidth="2"
        />
        <text x="170" y="185" textAnchor="middle" className="text-xs fill-blue-800 dark:fill-blue-200 font-semibold">한강</text>

        {/* 지역별 구역 */}
        {regions.map((region) => {
          const regionData = getRegionData(region.name)
          const isHovered = hoveredRegion === region.name

          return (
            <g key={region.id}>
              <path
                d={region.path}
                fill={getRegionColor(region.name)}
                stroke="#92400E"
                strokeWidth={isHovered ? 4 : 2}
                opacity={isHovered ? 0.9 : 0.8}
                filter="url(#shadow)"
                className="cursor-pointer transition-all duration-300 hover:opacity-95 hover:stroke-amber-600"
                onMouseEnter={() => setHoveredRegion(region.name)}
                onMouseLeave={() => setHoveredRegion(null)}
              />

              {/* 지역명 텍스트 */}
              <text
                x={region.labelX}
                y={region.labelY}
                textAnchor="middle"
                className="text-xs font-bold fill-white dark:fill-gray-100 pointer-events-none"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
              >
                {region.name}
              </text>

              {/* 데이터 표시 */}
              {regionData && (
                <text
                  x={region.labelX}
                  y={region.labelY + 15}
                  textAnchor="middle"
                  className="text-xs font-bold fill-white dark:fill-gray-100 pointer-events-none"
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
                >
                  🐕{regionData.dogs} 👴{regionData.seniors}
                </text>
              )}

              {/* 강조 효과 (호버 시) */}
              {isHovered && (
                <path
                  d={region.path}
                  fill="none"
                  stroke="#FBBF24"
                  strokeWidth="3"
                  opacity="0.8"
                  className="pointer-events-none animate-pulse"
                />
              )}
            </g>
          )
        })}

        {/* 제목 */}
        <text
          x="175"
          y="30"
          textAnchor="middle"
          className="text-lg font-bold fill-amber-900 dark:fill-amber-100"
        >
          서울시 지역별 현황
        </text>
      </svg>

      {/* 툴팁 */}
      {hoveredRegion && (
        <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-amber-200 z-10">
          <div className="text-sm font-semibold text-amber-900 dark:text-amber-100 mb-1">
            {hoveredRegion}
          </div>
          {(() => {
            const regionData = getRegionData(hoveredRegion)
            if (regionData) {
              const total = regionData.dogs + regionData.seniors
              const matchingRate = Math.round((regionData.dogs / total) * 100)
              return (
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-orange-600">강아지:</span>
                    <span className="font-semibold">{regionData.dogs}마리</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-600">시니어:</span>
                    <span className="font-semibold">{regionData.seniors}명</span>
                  </div>
                  <div className="flex justify-between border-t pt-1">
                    <span className="text-green-600">매칭률:</span>
                    <span className="font-semibold">{matchingRate}%</span>
                  </div>
                </div>
              )
            }
            return null
          })()}
        </div>
      )}

      {/* 범례 */}
      <div className="mt-4 flex justify-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-500 rounded"></div>
          <span className="text-muted-foreground">고밀도 (10+)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-amber-500 rounded"></div>
          <span className="text-muted-foreground">중밀도 (6-9)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span className="text-muted-foreground">저밀도 (1-5)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-blue-400 rounded"></div>
          <span className="text-muted-foreground">한강</span>
        </div>
      </div>
    </div>
  )
}