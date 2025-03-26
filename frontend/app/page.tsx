import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, FileText, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            EduSphere
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            A modern learning platform that connects teachers and students
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              <Link href="/login">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                For Teachers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Create engaging assignments, quizzes, and track student progress with detailed analytics.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/teacher/dashboard"
                className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1 hover:underline"
              >
                Teacher Dashboard <ArrowRight className="h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-500" />
                For Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Access your classes, complete assignments, and get personalized help with your studies.
              </p>
            </CardContent>
            <CardFooter>
              <Link
                href="/student/dashboard"
                className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1 hover:underline"
              >
                Student Dashboard <ArrowRight className="h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>

        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 shadow-md">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Transform the learning experience</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              EduSphere combines powerful teaching tools with an intuitive interface to create an engaging learning
              environment for both educators and students.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <Link href="/signup">Join EduSphere Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

