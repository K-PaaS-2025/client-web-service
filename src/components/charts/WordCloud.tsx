"use client"

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

interface WordData {
  text: string
  value: number
}

interface WordCloudProps {
  data: WordData[]
  width?: number
  height?: number
}

export default function WordCloud({ data, width = 600, height = 400 }: WordCloudProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current || !data.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

    // Simple word cloud layout without external library
    const maxValue = d3.max(data, d => d.value) || 1
    const minValue = d3.min(data, d => d.value) || 1

    const fontScale = d3.scaleLinear()
      .domain([minValue, maxValue])
      .range([12, 48])

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10)

    // Simple grid layout for words
    const cols = Math.ceil(Math.sqrt(data.length))
    const cellWidth = width / cols
    const cellHeight = height / Math.ceil(data.length / cols)

    const g = svg.append('g')
      .attr('transform', `translate(${width/2}, ${height/2})`)

    data.forEach((word, i) => {
      const col = i % cols
      const row = Math.floor(i / cols)
      const x = (col - cols/2) * cellWidth * 0.8
      const y = (row - Math.ceil(data.length / cols)/2) * cellHeight * 0.8

      g.append('text')
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('x', x + (Math.random() - 0.5) * 50)
        .attr('y', y + (Math.random() - 0.5) * 30)
        .style('font-size', `${fontScale(word.value)}px`)
        .style('font-family', 'Arial, sans-serif')
        .style('font-weight', 'bold')
        .style('fill', colorScale(i.toString()))
        .style('opacity', 0.8)
        .style('cursor', 'pointer')
        .text(word.text)
        .on('mouseover', function() {
          d3.select(this).style('opacity', 1).style('transform', 'scale(1.1)')
        })
        .on('mouseout', function() {
          d3.select(this).style('opacity', 0.8).style('transform', 'scale(1)')
        })
    })

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