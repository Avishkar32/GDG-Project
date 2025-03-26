"use client"

import { useState, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Mail, Phone, Calendar, BookOpen, BarChart3, FileText, MessageSquare } from "lucide-react"
import Link from "next/link"
import { StudentPerformanceChart } from "@/components/student-performance-chart"
import { StudentStrengthsWeaknesses } from "@/components/student-strengths-weaknesses"
import { StudentAssignmentsList } from "@/components/student-assignments-list"

export default function StudentDetailPage({ params }: { params: { id: string } }) {
  const [student] = useState({
    id: Number.parseInt(params.id),
    name: "Aarav Sharma",
    email: "aarav.s@example.com",
    phone: "(987) 654-3210",
    enrollmentDate: "June 15, 2022",
    avatar: "/placeholder.svg?height=128&width=128",
    classes: ["Mathematics 101", "Physics 202", "Chemistry 101"],
    grade: "A-",
    openAssignments: 2,
    submittedAssignments: 8,
    totalAssignments: 10,
    attendance: "95%",
    strengths: ["Algebra", "Geometry", "Problem Solving"],
    weaknesses: ["Calculus", "Trigonometry"],
    recentActivity: [
      { date: "May 10, 2023", action: "Submitted assignment: Quadratic Equations" },
      { date: "May 8, 2023", action: "Completed quiz: Algebraic Expressions" },
      { date: "May 5, 2023", action: "Viewed feedback on: Linear Equations" },
    ],
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/teacher/students">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Students
            </Link>
          </Button>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-800 shadow-md">
              <AvatarImage src={student.avatar} alt={student.name} />
              <AvatarFallback className="text-2xl">
                {student.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{student.name}</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail className="h-4 w-4 mr-2" />
                  {student.email}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone className="h-4 w-4 mr-2" />
                  {student.phone}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar className="h-4 w-4 mr-2" />
                  Enrolled: {student.enrollmentDate}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Classes: {student.classes.length}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Message
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <FileText className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800 shadow-sm">
            <CardHeader className="pb-2">
              <CardDescription>Current Grade</CardDescription>
              <CardTitle className="text-2xl">{student.grade}</CardTitle>
            </CardHeader>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm">
            <CardHeader className="pb-2">
              <CardDescription>Assignments</CardDescription>
              <CardTitle className="text-2xl">
                {student.submittedAssignments}/{student.totalAssignments}
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm">
            <CardHeader className="pb-2">
              <CardDescription>Attendance</CardDescription>
              <CardTitle className="text-2xl">{student.attendance}</CardTitle>
            </CardHeader>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm">
            <CardHeader className="pb-2">
              <CardDescription>Classes</CardDescription>
              <CardTitle className="text-2xl">{student.classes.length}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800 shadow-sm lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-blue-500" />
                Performance Overview
              </CardTitle>
              <CardDescription>Academic performance across subjects</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div className="h-80 w-full flex items-center justify-center">Loading chart...</div>}>
                <StudentPerformanceChart />
              </Suspense>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm">
            <CardHeader>
              <CardTitle>Strengths & Weaknesses</CardTitle>
              <CardDescription>Areas of mastery and improvement</CardDescription>
            </CardHeader>
            <CardContent>
              <StudentStrengthsWeaknesses strengths={student.strengths} weaknesses={student.weaknesses} />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="assignments" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="notes">Teacher Notes</TabsTrigger>
          </TabsList>

          <TabsContent value="assignments">
            <Card className="bg-white dark:bg-gray-800 shadow-sm">
              <CardHeader>
                <CardTitle>Assignments & Quizzes</CardTitle>
                <CardDescription>Track progress and submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <StudentAssignmentsList studentId={student.id} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity">
            <Card className="bg-white dark:bg-gray-800 shadow-sm">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest student interactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {student.recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                    >
                      <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback">
            <Card className="bg-white dark:bg-gray-800 shadow-sm">
              <CardHeader>
                <CardTitle>Feedback History</CardTitle>
                <CardDescription>Previous comments and suggestions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Quadratic Equations Assignment</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">May 5, 2023</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Good work on solving the equations. Your approach was methodical and clear. Consider showing more
                      steps in your work for complex problems.
                    </p>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      <span>From: Professor Smith</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Algebraic Expressions Quiz</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">April 28, 2023</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Excellent performance on the quiz. You demonstrated strong understanding of the concepts. Your
                      work on factoring was particularly impressive.
                    </p>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <MessageSquare className="h-3 w-3 mr-1" />
                      <span>From: Professor Smith</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notes">
            <Card className="bg-white dark:bg-gray-800 shadow-sm">
              <CardHeader>
                <CardTitle>Teacher Notes</CardTitle>
                <CardDescription>Private notes about this student</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Learning Style Observation</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">April 15, 2023</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Alex seems to be a visual learner. Responds well to diagrams and charts. Consider incorporating
                      more visual elements in future assignments.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Participation Note</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">March 22, 2023</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Alex has been actively participating in class discussions. Shows enthusiasm for problem-solving
                      activities and often helps other students.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <Button className="w-full">Add New Note</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

