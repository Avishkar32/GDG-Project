import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, Clock, MessageCircle, BarChart3 } from "lucide-react"
import { StudentClassCards } from "@/components/student-class-cards"
import { StudentUpcomingAssignments } from "@/components/student-upcoming-assignments"
import { StudentPerformanceOverview } from "@/components/student-performance-overview"
import { StudentChatbot } from "@/components/student-chatbot"
import { Suspense } from "react"

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Student Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">Welcome back, Alex</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardDescription>Enrolled Classes</CardDescription>
              <CardTitle className="text-2xl flex items-center justify-between">
                5
                <BookOpen className="h-5 w-5 text-blue-500" />
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Spring Semester 2023</div>
            </CardContent>
            <CardFooter>
              <Link href="/student/classes" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                View all classes
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardDescription>Pending Assignments</CardDescription>
              <CardTitle className="text-2xl flex items-center justify-between">
                8
                <FileText className="h-5 w-5 text-blue-500" />
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="text-xs text-orange-600 dark:text-orange-400 font-medium">3 due this week</div>
            </CardContent>
            <CardFooter>
              <Link href="/student/assignments" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                View assignments
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardDescription>Overall Grade</CardDescription>
              <CardTitle className="text-2xl flex items-center justify-between">
                A-
                <BarChart3 className="h-5 w-5 text-blue-500" />
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="text-xs text-green-600 dark:text-green-400 font-medium">3.7 GPA</div>
            </CardContent>
            <CardFooter>
              <Link href="/student/performance" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                View performance
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardDescription>Study Hours</CardDescription>
              <CardTitle className="text-2xl flex items-center justify-between">
                24
                <Clock className="h-5 w-5 text-blue-500" />
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">This month</div>
            </CardContent>
            <CardFooter>
              <Link href="/student/study-tracker" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                Track study time
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
            <CardHeader>
              <CardTitle>My Classes</CardTitle>
              <CardDescription>Your enrolled courses this semester</CardDescription>
            </CardHeader>
            <CardContent>
              <StudentClassCards />
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
              <CardDescription>Assignments and quizzes due soon</CardDescription>
            </CardHeader>
            <CardContent>
              <StudentUpcomingAssignments />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/student/calendar">
                  <Clock className="mr-2 h-4 w-4" />
                  View Calendar
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-blue-500" />
                Performance Overview
              </CardTitle>
              <CardDescription>Your academic performance across subjects</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div className="h-80 w-full flex items-center justify-center">Loading chart...</div>}>
                <StudentPerformanceOverview />
              </Suspense>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5 text-blue-500" />
                Study Assistant
              </CardTitle>
              <CardDescription>AI-powered learning support</CardDescription>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div className="h-[350px] flex items-center justify-center">Loading chatbot...</div>}>
                <StudentChatbot />
              </Suspense>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="announcements" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
          </TabsList>
          <TabsContent value="announcements">
            <Card className="bg-white dark:bg-gray-800 shadow-sm">
              <CardHeader>
                <CardTitle>Recent Announcements</CardTitle>
                <CardDescription>Important updates from your classes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Final Exam Schedule Posted</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">2 days ago</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      The final exam schedule has been posted. Please check the calendar for your exam times.
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">From: Mathematics 101</div>
                  </div>

                  <div className="p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Lab Session Rescheduled</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">3 days ago</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      The lab session for next week has been rescheduled to Wednesday at 2:00 PM.
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">From: Chemistry 101</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Announcements
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="resources">
            <Card className="bg-white dark:bg-gray-800 shadow-sm">
              <CardHeader>
                <CardTitle>Learning Resources</CardTitle>
                <CardDescription>Helpful materials for your studies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-500 mr-3" />
                    <div>
                      <h4 className="font-medium">Calculus Study Guide</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive review of key concepts</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-500 mr-3" />
                    <div>
                      <h4 className="font-medium">Physics Formula Sheet</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Quick reference for common equations</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-500 mr-3" />
                    <div>
                      <h4 className="font-medium">Chemistry Lab Manual</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Procedures and safety guidelines</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Browse Resource Library
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="discussions">
            <Card className="bg-white dark:bg-gray-800 shadow-sm">
              <CardHeader>
                <CardTitle>Class Discussions</CardTitle>
                <CardDescription>Engage with your classmates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Help with Trigonometric Functions</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">5 replies</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      I'm having trouble understanding the relationship between sine and cosine functions...
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Mathematics 101 • Started by Jamie Smith
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Study Group for Final Exam</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">12 replies</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      Would anyone be interested in forming a study group for the upcoming final exam?
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Physics 202 • Started by Riley Wilson
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Start New Discussion</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

