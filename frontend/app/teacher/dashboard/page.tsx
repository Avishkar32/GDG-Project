import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FileText, Users, BarChart3, Clock, Plus } from "lucide-react"
import { RecentActivityList } from "@/components/recent-activity-list"
import { UpcomingAssignmentsList } from "@/components/upcoming-assignments-list"
import { ClassOverviewCards } from "@/components/class-overview-cards"

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-300">Welcome back, Professor Smith</p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <Plus className="mr-2 h-4 w-4" />
              Create Class
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardDescription>Total Students</CardDescription>
              <CardTitle className="text-2xl flex items-center justify-between">
                187
                <Users className="h-5 w-5 text-blue-500" />
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="text-xs text-green-600 dark:text-green-400 font-medium">+12 this month</div>
            </CardContent>
            <CardFooter>
              <Link href="/teacher/students" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                View all students
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardDescription>Active Classes</CardDescription>
              <CardTitle className="text-2xl flex items-center justify-between">
                5
                <BookOpen className="h-5 w-5 text-blue-500" />
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Spring Semester 2023</div>
            </CardContent>
            <CardFooter>
              <Link href="/teacher/classes" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                Manage classes
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
              <div className="text-xs text-orange-600 dark:text-orange-400 font-medium">3 need grading</div>
            </CardContent>
            <CardFooter>
              <Link href="/teacher/assignments" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                Grade assignments
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardDescription>Average Performance</CardDescription>
              <CardTitle className="text-2xl flex items-center justify-between">
                78%
                <BarChart3 className="h-5 w-5 text-blue-500" />
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="text-xs text-green-600 dark:text-green-400 font-medium">+5% from last month</div>
            </CardContent>
            <CardFooter>
              <Link href="/teacher/analytics" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                View analytics
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
            <CardHeader>
              <CardTitle>Class Overview</CardTitle>
              <CardDescription>Performance metrics for your active classes</CardDescription>
            </CardHeader>
            <CardContent>
              <ClassOverviewCards />
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
              <CardDescription>Assignments and quizzes due soon</CardDescription>
            </CardHeader>
            <CardContent>
              <UpcomingAssignmentsList />
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/teacher/calendar">
                  <Clock className="mr-2 h-4 w-4" />
                  View Calendar
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Tabs defaultValue="activity" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          <TabsContent value="activity">
            <Card className="bg-white dark:bg-gray-800 shadow-sm">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates from your classes</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentActivityList />
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Activity
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="announcements">
            <Card className="bg-white dark:bg-gray-800 shadow-sm">
              <CardHeader>
                <CardTitle>Announcements</CardTitle>
                <CardDescription>Important messages for your classes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">No recent announcements.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Create Announcement</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="resources">
            <Card className="bg-white dark:bg-gray-800 shadow-sm">
              <CardHeader>
                <CardTitle>Teaching Resources</CardTitle>
                <CardDescription>Helpful materials and templates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-500 mr-3" />
                    <div>
                      <h4 className="font-medium">Assignment Template</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Standard format for creating new assignments
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-500 mr-3" />
                    <div>
                      <h4 className="font-medium">Quiz Template</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Format for creating effective quizzes</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-500 mr-3" />
                    <div>
                      <h4 className="font-medium">Grading Rubric</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Standardized grading criteria</p>
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
        </Tabs>
      </div>
    </div>
  )
}

