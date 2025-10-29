"use client"

import { useEffect, useRef, useMemo } from 'react'
import * as d3 from 'd3'

interface WordData {
  text: string
  value: number
}

interface WordCloudProps {
  data: WordData[]
  width?: number
  height?: number
  maxWords?: number
  fontFamily?: string
  fontScale?: number
  padding?: number
}

export default function WordCloud({
  data,
  width = 600,
  height = 400,
  maxWords = 500,
  fontFamily = "Arial, sans-serif",
  fontScale = 10,
  padding = 1
}: WordCloudProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  // Process words similar to Observable example
  const processedWords = useMemo(() => {
    if (!data || !data.length) return []

    const sortedData = [...data]
      .sort((a, b) => b.value - a.value)
      .slice(0, maxWords)
      .map(d => ({
        text: d.text,
        size: d.value,
        value: d.value
      }))

    return sortedData
  }, [data, maxWords])

  useEffect(() => {
    if (!svgRef.current || !processedWords.length) return

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

    // Set up scales
    const maxValue = d3.max(processedWords, d => d.size) || 1
    const minValue = d3.min(processedWords, d => d.size) || 1

    const fontSizeScale = d3.scaleLinear()
      .domain([minValue, maxValue])
      .range([8, fontScale * 3])

    // Color schemes inspired by Observable
    const colors = [
      "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd",
      "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf",
      "#aec7e8", "#ffbb78", "#98df8a", "#ff9896", "#c5b0d5"
    ]

    const colorScale = d3.scaleOrdinal(colors)

    // Create word cloud layout (spiral placement algorithm)
    const centerX = width / 2 - 30  // Move 30px to the left
    const centerY = height / 2 - 20  // Move 20px up
    const placedWords: Array<{x: number, y: number, width: number, height: number}> = []

    const g = svg.append('g')
      .attr('transform', `translate(${centerX}, ${centerY})`)

    // Improved oval-shaped placement algorithm
    processedWords.forEach((word, i) => {
      const fontSize = fontSizeScale(word.size)
      const textWidth = word.text.length * fontSize * 0.6 // Approximate text width
      const textHeight = fontSize

      let placed = false
      let x = 0, y = 0
      let radiusX = 0
      let radiusY = 0
      let angle = Math.random() * Math.PI * 2 // Start with random angle

      // Oval parameters
      const maxRadiusX = (width - 100) / 2  // Leave margin
      const maxRadiusY = (height - 80) / 2  // Leave margin
      const aspectRatio = 0.7 // Make it more oval (height/width ratio)

      // Try to place word in oval pattern
      while (!placed && radiusX < maxRadiusX) {
        // Oval coordinates
        x = radiusX * Math.cos(angle)
        y = radiusY * Math.sin(angle) * aspectRatio

        // Check collision with previously placed words
        const collision = placedWords.some(placed => {
          const padding = 2 // Reduce padding to fit more words
          return !(x + textWidth/2 + padding < placed.x ||
                  x - textWidth/2 - padding > placed.x + placed.width ||
                  y + textHeight/2 + padding < placed.y ||
                  y - textHeight/2 - padding > placed.y + placed.height)
        })

        if (!collision) {
          placedWords.push({
            x: x - textWidth/2,
            y: y - textHeight/2,
            width: textWidth,
            height: textHeight
          })
          placed = true
        } else {
          // Move along the oval in smaller increments
          angle += 0.15
          if (angle > Math.PI * 2) {
            angle = Math.random() * Math.PI * 2 // Restart with random angle
            radiusX += 8
            radiusY += 6
          }
        }
      }

      // If still not placed, try fallback positions around the oval perimeter
      if (!placed) {
        for (let attempt = 0; attempt < 50 && !placed; attempt++) {
          const fallbackAngle = (attempt / 50) * Math.PI * 2
          const fallbackRadiusX = maxRadiusX * 0.8 + Math.random() * maxRadiusX * 0.2
          const fallbackRadiusY = maxRadiusY * 0.8 + Math.random() * maxRadiusY * 0.2

          x = fallbackRadiusX * Math.cos(fallbackAngle)
          y = fallbackRadiusY * Math.sin(fallbackAngle) * aspectRatio

          const collision = placedWords.some(placed => {
            const padding = 1
            return !(x + textWidth/2 + padding < placed.x ||
                    x - textWidth/2 - padding > placed.x + placed.width ||
                    y + textHeight/2 + padding < placed.y ||
                    y - textHeight/2 - padding > placed.y + placed.height)
          })

          if (!collision) {
            placedWords.push({
              x: x - textWidth/2,
              y: y - textHeight/2,
              width: textWidth,
              height: textHeight
            })
            placed = true
          }
        }
      }

      g.append('text')
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('x', x)
        .attr('y', y)
        .style('font-size', `${fontSize}px`)
        .style('font-family', fontFamily)
        .style('font-weight', 'bold')
        .style('fill', colorScale(i.toString()))
        .style('opacity', 0.8)
        .style('cursor', 'pointer')
        .text(word.text)
        .transition()
        .duration(500)
        .delay(i * 50)
        .style('opacity', 0.9)
        .on('end', function() {
          // Add hover effects after animation
          d3.select(this)
            .on('mouseover', function() {
              d3.select(this)
                .transition()
                .duration(200)
                .style('opacity', 1)
                .style('font-size', `${fontSize * 1.2}px`)
            })
            .on('mouseout', function() {
              d3.select(this)
                .transition()
                .duration(200)
                .style('opacity', 0.9)
                .style('font-size', `${fontSize}px`)
            })
        })
    })

  }, [processedWords, width, height, fontFamily, fontScale])

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      className="w-full h-full"
      style={{ background: 'transparent' }}
    />
  )
}