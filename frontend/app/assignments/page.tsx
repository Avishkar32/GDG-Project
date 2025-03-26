import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FilePlus } from "lucide-react"

export default function AssignmentsPage() {
  // This would be fetched from the database in a real application
  const assignments = [
    {
      id: 1,
      title: "Introduction to Algebra",
      class: "Mathematics 101",
      dueDate: "2023-04-15",
      status: "Active",
      submissions: 18,
      totalStudents: 25,
    },
    {
      id: 2,
      title: "Newton's Laws of Motion",
      class: "Physics 202",
      dueDate: "2023-04-20",
      status: "Active",
      submissions: 12,
      totalStudents: 20,
    },
    {
      id: 3,
      title: "Periodic Table Elements",
      class: "Chemistry 101",
      dueDate: "2023-04-10",
      status: "Closed",
      submissions: 22,
      totalStudents: 22,
    },
    {
      id: 4,
      title: "Cell Structure Analysis",
      class: "Biology 303",
      dueDate: "2023-04-25",
      status: "Active",
      submissions: 5,
      totalStudents: 18,
    },
    {
      id: 5,
      title: "Algorithms Basics",
      class: "Computer Science 101",
      dueDate: "2023-04-30",
      status: "Draft",
      submissions: 0,
      totalStudents: 30,
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Assignments</h1>
        <Link href="/assignments/create">
          <Button>
            <FilePlus className="mr-2 h-4 w-4" />
            Create Assignment
          </Button>
        </Link>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Filter Assignments</CardTitle>
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
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submissions</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignments.map((assignment) => (
                <TableRow key={assignment.id}>
                  <TableCell className="font-medium">{assignment.title}</TableCell>
                  <TableCell>{assignment.class}</TableCell>
                  <TableCell>{new Date(assignment.dueDate).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        assignment.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : assignment.status === "Closed"
                            ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                      }`}
                    >
                      {assignment.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    {assignment.submissions}/{assignment.totalStudents}
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
                        Grade
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

