import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileQuestion, ExternalLink } from "lucide-react"

export default function QuizzesPage() {
  // This would be fetched from the database in a real application
  const quizzes = [
    {
      id: 1,
      title: "Algebra Fundamentals",
      class: "Mathematics 101",
      type: "Internal",
      questions: 15,
      dueDate: "2023-04-18",
      status: "Active",
      submissions: 20,
      totalStudents: 25,
    },
    {
      id: 2,
      title: "Physics Mid-Term",
      class: "Physics 202",
      type: "Internal",
      questions: 25,
      dueDate: "2023-04-22",
      status: "Draft",
      submissions: 0,
      totalStudents: 20,
    },
    {
      id: 3,
      title: "Chemical Reactions",
      class: "Chemistry 101",
      type: "External",
      questions: null,
      dueDate: "2023-04-12",
      status: "Closed",
      submissions: 22,
      totalStudents: 22,
    },
    {
      id: 4,
      title: "Cell Biology Quiz",
      class: "Biology 303",
      type: "Internal",
      questions: 10,
      dueDate: "2023-04-28",
      status: "Active",
      submissions: 8,
      totalStudents: 18,
    },
    {
      id: 5,
      title: "Programming Concepts",
      class: "Computer Science 101",
      type: "External",
      questions: null,
      dueDate: "2023-05-05",
      status: "Active",
      submissions: 15,
      totalStudents: 30,
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Quizzes</h1>
        <div className="flex gap-2">
          <Link href="/quizzes/create">
            <Button>
              <FileQuestion className="mr-2 h-4 w-4" />
              Create Quiz
            </Button>
          </Link>
          <Link href="/quizzes/external">
            <Button variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              Add External Quiz
            </Button>
          </Link>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Filter Quizzes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <select className="border rounded-md px-3 py-2 md:w-1/4">
              <option value="">All Classes</option>
              <option value="math">Mathematics 101</option>
              <option value="physics">Physics 202</option>
              <option value="chemistry">Chemistry 101</option>
              <option value="biology">Biology 303</option>
              <option value="cs">Computer Science 101</option>
            </select>
            <select className="border rounded-md px-3 py-2 md:w-1/4">
              <option value="">All Types</option>
              <option value="internal">Internal</option>
              <option value="external">External</option>
            </select>
            <select className="border rounded-md px-3 py-2 md:w-1/4">
              <option value="">All Status</option>
              <option value="active">Active</option>
              <option value="closed">Closed</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Questions</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submissions</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quizzes.map((quiz) => (
                <TableRow key={quiz.id}>
                  <TableCell className="font-medium">{quiz.title}</TableCell>
                  <TableCell>{quiz.class}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        quiz.type === "Internal"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                          : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100"
                      }`}
                    >
                      {quiz.type}
                    </span>
                  </TableCell>
                  <TableCell>{quiz.questions || "N/A"}</TableCell>
                  <TableCell>{new Date(quiz.dueDate).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        quiz.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : quiz.status === "Closed"
                            ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                      }`}
                    >
                      {quiz.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    {quiz.submissions}/{quiz.totalStudents}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Results
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

