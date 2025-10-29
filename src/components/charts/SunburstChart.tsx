"use client"

import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

interface SunburstData {
  name: string
  children?: SunburstData[]
  value?: number
}

interface SunburstChartProps {
  data: SunburstData
  width?: number
  height?: number
}

export default function SunburstChart({ data, width = 500, height = 500 }: SunburstChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [selectedSequence, setSelectedSequence] = useState<string[]>([])
  const [percentage, setPercentage] = useState<number>(0)

  useEffect(() => {
    if (!svgRef.current || !data) return

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

    const radius = Math.min(width, height) / 2 - 10

    // Color scheme based on depth/step in sequence
    const colors = [
      "#5d4e75", "#ab9da2", "#d4c5b9", "#ffffff", "#b8860b"
    ]

    const color = (d: any) => {
      if (d.depth === 0) return "#ffffff"
      return colors[(d.depth - 1) % colors.length]
    }

    const partition = d3.partition<SunburstData>()
      .size([2 * Math.PI, radius])

    const root = d3.hierarchy(data)
      .sum(d => d.value || 1)

    partition(root)

    // Calculate total for percentage
    const totalValue = root.value || 1

    const arc = d3.arc<d3.HierarchyRectangularNode<SunburstData>>()
      .startAngle(d => d.x0)
      .endAngle(d => d.x1)
      .innerRadius(d => d.y0)
      .outerRadius(d => d.y1)

    const g = svg.append('g')
      .attr('transform', `translate(${width/2}, ${height/2})`)

    // Create the arcs
    const slice = g.selectAll('path')
      .data(root.descendants().filter(d => d.depth > 0))
      .enter().append('path')
      .attr('d', arc as any)
      .style('fill', color)
      .style('stroke', '#fff')
      .style('stroke-width', 1)
      .style('opacity', 0.8)
      .style('cursor', 'pointer')

    // Add text labels - only for segments that are large enough
    const text = g.selectAll('text')
      .data(root.descendants().filter(d => {
        return d.depth > 0 && ((d as any).x1 - (d as any).x0) > 0.03
      }))
      .enter().append('text')
      .attr('transform', d => {
        const angle = ((d as any).x0 + (d as any).x1) / 2
        const radius = ((d as any).y0 + (d as any).y1) / 2
        return `rotate(${angle * 180 / Math.PI - 90}) translate(${radius},0) rotate(${angle > Math.PI ? 180 : 0})`
      })
      .attr('dy', '0.35em')
      .attr('text-anchor', d => ((d as any).x0 + (d as any).x1) / 2 > Math.PI ? 'end' : 'start')
      .style('font-size', '11px')
      .style('font-family', 'Arial, sans-serif')
      .style('fill', '#333')
      .style('pointer-events', 'none')
      .text(d => {
        const angle = d.x1 - d.x0
        if (angle < 0.05) return ''
        return d.data.name.length > 8 ? d.data.name.slice(0, 8) + '...' : d.data.name
      })

    // Add interactions
    slice.on('mouseover', function(event, d) {
      // Highlight the sequence
      const sequenceArray = d.ancestors().reverse().slice(1) // Remove root
      const sequenceNames = sequenceArray.map(node => node.data.name)

      setSelectedSequence(sequenceNames)
      setPercentage(Math.round((d.value || 0) / totalValue * 1000) / 10)

      // Highlight the path
      g.selectAll('path')
        .style('opacity', 0.3)

      // Highlight ancestors
      sequenceArray.forEach(node => {
        g.selectAll('path')
          .filter(pathData => pathData === node)
          .style('opacity', 1)
      })
    })
    .on('mouseout', function() {
      setSelectedSequence([])
      setPercentage(0)

      g.selectAll('path')
        .style('opacity', 0.8)
    })

    // Add center circle
    g.append('circle')
      .attr('r', root.y0)
      .style('fill', '#fff')
      .style('stroke', '#999')
      .style('stroke-width', 1)

    // Add center text
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.35em')
      .style('font-size', '14px')
      .style('font-weight', 'bold')
      .style('fill', '#333')
      .text('프로세스')

  }, [data, width, height])

  return (
    <div className="relative">
      <svg
        ref={svgRef}
        width={width}
        height={height}
        className="w-full h-full"
      />

      {/* Breadcrumb sequence display */}
      {selectedSequence.length > 0 && (
        <div className="absolute top-2 left-2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border z-10">
          <div className="text-sm font-medium mb-2">선택된 경로:</div>
          <div className="flex items-center gap-2 mb-2">
            {selectedSequence.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                  {step}
                </div>
                {index < selectedSequence.length - 1 && (
                  <div className="mx-1 text-gray-400">→</div>
                )}
              </div>
            ))}
          </div>
          <div className="text-sm font-bold text-blue-600">
            {percentage}% of visits
          </div>
        </div>
      )}
    </div>
  )
}