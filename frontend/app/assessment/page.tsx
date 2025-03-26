import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileSpreadsheet, Upload } from "lucide-react"

export default function AssessmentPage() {
  // This would be fetched from the database in a real application
  const pendingAssignments = [
    {
      id: 1,
      title: "Introduction to Algebra",
      class: "Mathematics 101",
      dueDate: "2023-04-15",
      submissions: 18,
      totalStudents: 25,
      status: "Ready for Assessment",
    },
    {
      id: 4,
      title: "Cell Structure Analysis",
      class: "Biology 303",
      dueDate: "2023-04-25",
      submissions: 5,
      totalStudents: 18,
      status: "Ready for Assessment",
    },
  ]

  const pendingQuizzes = [
    {
      id: 1,
      title: "Algebra Fundamentals",
      class: "Mathematics 101",
      dueDate: "2023-04-18",
      submissions: 20,
      totalStudents: 25,
      status: "Ready for Assessment",
    },
    {
      id: 4,
      title: "Cell Biology Quiz",
      class: "Biology 303",
      dueDate: "2023-04-28",
      submissions: 8,
      totalStudents: 18,
      status: "Ready for Assessment",
    },
  ]

  const completedAssessments = [
    {
      id: 3,
      title: "Periodic Table Elements",
      type: "Assignment",
      class: "Chemistry 101",
      dueDate: "2023-04-10",
      submissions: 22,
      totalStudents: 22,
      averageScore: "85%",
      status: "Completed",
    },
    {
      id: 3,
      title: "Chemical Reactions",
      type: "Quiz",
      class: "Chemistry 101",
      dueDate: "2023-04-12",
      submissions: 22,
      totalStudents: 22,
      averageScore: "78%",
      status: "Completed",
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Assessment Center</h1>

      <Tabs defaultValue="pending">
        <TabsList className="mb-6">
          <TabsTrigger value="pending">Pending Assessment</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="pending">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Assignments Pending Assessment</CardTitle>
                <CardDescription>Click "Assess" to automatically grade all submitted assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Submissions</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingAssignments.map((assignment) => (
                      <TableRow key={assignment.id}>
                        <TableCell className="font-medium">{assignment.title}</TableCell>
                        <TableCell>{assignment.class}</TableCell>
                        <TableCell>{new Date(assignment.dueDate).toLocaleDateString()}</TableCell>
                        <TableCell>
                          {assignment.submissions}/{assignment.totalStudents}
                        </TableCell>
                        <TableCell>
                          <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                            {assignment.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button>Assess</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {pendingAssignments.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-4">
                          No assignments pending assessment
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quizzes Pending Assessment</CardTitle>
                <CardDescription>Upload Excel sheets or assess online quizzes</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Submissions</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingQuizzes.map((quiz) => (
                      <TableRow key={quiz.id}>
                        <TableCell className="font-medium">{quiz.title}</TableCell>
                        <TableCell>{quiz.class}</TableCell>
                        <TableCell>{new Date(quiz.dueDate).toLocaleDateString()}</TableCell>
                        <TableCell>
                          {quiz.submissions}/{quiz.totalStudents}
                        </TableCell>
                        <TableCell>
                          <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                            {quiz.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button>Assess</Button>
                            <Button variant="outline">
                              <Upload className="h-4 w-4 mr-2" />
                              Upload Excel
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                    {pendingQuizzes.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-4">
                          No quizzes pending assessment
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>Completed Assessments</CardTitle>
              <CardDescription>View and export assessment results</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Submissions</TableHead>
                    <TableHead>Average Score</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {completedAssessments.map((assessment) => (
                    <TableRow key={assessment.id}>
                      <TableCell className="font-medium">{assessment.title}</TableCell>
                      <TableCell>{assessment.type}</TableCell>
                      <TableCell>{assessment.class}</TableCell>
                      <TableCell>{new Date(assessment.dueDate).toLocaleDateString()}</TableCell>
                      <TableCell>
                        {assessment.submissions}/{assessment.totalStudents}
                      </TableCell>
                      <TableCell>{assessment.averageScore}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <FileSpreadsheet className="h-4 w-4 mr-2" />
                            Export
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {completedAssessments.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-4">
                        No completed assessments
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

