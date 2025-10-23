"use client"

import { useEffect, useRef } from 'react'
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

  useEffect(() => {
    if (!svgRef.current || !data) return

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

    const radius = Math.min(width, height) / 2
    const color = d3.scaleOrdinal(d3.schemeCategory10)

    const partition = d3.partition<SunburstData>()
      .size([2 * Math.PI, radius])

    const root = d3.hierarchy(data)
      .sum(d => d.value || 1)

    partition(root)

    const arc = d3.arc<d3.HierarchyRectangularNode<SunburstData>>()
      .startAngle(d => d.x0)
      .endAngle(d => d.x1)
      .innerRadius(d => d.y0)
      .outerRadius(d => d.y1)

    const g = svg.append('g')
      .attr('transform', `translate(${width/2}, ${height/2})`)

    const slice = g.selectAll('path')
      .data(root.descendants().filter(d => d.depth > 0))
      .enter().append('path')
      .attr('d', arc)
      .style('fill', d => color(d.data.name))
      .style('stroke', '#fff')
      .style('stroke-width', 2)
      .style('opacity', 0.8)
      .style('cursor', 'pointer')

    slice.on('mouseover', function(event, d) {
      d3.select(this)
        .style('opacity', 1)
        .style('stroke-width', 3)
    })
    .on('mouseout', function() {
      d3.select(this)
        .style('opacity', 0.8)
        .style('stroke-width', 2)
    })

    // Add labels for larger segments
    const text = g.selectAll('text')
      .data(root.descendants().filter(d => d.depth > 0 && (d.x1 - d.x0) > 0.1))
      .enter().append('text')
      .attr('transform', d => {
        const angle = (d.x0 + d.x1) / 2
        const radius = (d.y0 + d.y1) / 2
        return `rotate(${angle * 180 / Math.PI - 90}) translate(${radius},0) rotate(${angle > Math.PI ? 180 : 0})`
      })
      .attr('dy', '0.35em')
      .attr('text-anchor', d => (d.x0 + d.x1) / 2 > Math.PI ? 'end' : 'start')
      .style('font-size', '12px')
      .style('font-family', 'Arial, sans-serif')
      .style('fill', '#333')
      .text(d => d.data.name)

  }, [data, width, height])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className="w-full h-full"
    />
  )
}