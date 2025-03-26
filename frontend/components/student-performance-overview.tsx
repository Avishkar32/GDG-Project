"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export function StudentPerformanceOverview() {
  const [isMounted, setIsMounted] = useState(false)

  // This would be fetched from the database in a real application
  const data = [
    {
      subject: "Mathematics",
      score: 85,
      average: 75,
    },
    {
      subject: "Physics",
      score: 78,
      average: 72,
    },
    {
      subject: "Chemistry",
      score: 92,
      average: 80,
    },
    {
      subject: "Biology",
      score: 65,
      average: 68,
    },
    {
      subject: "Computer Science",
      score: 88,
      average: 76,
    },
  ]

  // Only render the chart after component is mounted
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-80 w-full flex items-center justify-center">Loading chart...</div>
  }

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="subject" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              border: "none",
            }}
          />
          <Legend />
          <Bar dataKey="score" name="Your Score" fill="#4f46e5" radius={[4, 4, 0, 0]} />
          <Bar dataKey="average" name="Class Average" fill="#94a3b8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

