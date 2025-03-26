import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FilePlus, Search, Filter, Download } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function AssignmentsPage() {
  // This would be fetched from the database in a real application
  const assignments = [
    {
      id: 1,
      title: "Introduction to Algebra",
      class: "Mathematics 101",
      dueDate: "2023-05-15",
      status: "Active",
      submissions: 18,
      totalStudents: 25,
      avgGrade: "82%",
    },
    {
      id: 2,
      title: "Newton's Laws of Motion",
      class: "Physics 202",
      dueDate: "2023-05-20",
      status: "Active",
      submissions: 12,
      totalStudents: 20,
      avgGrade: "75%",
    },
    {
      id: 3,
      title: "Periodic Table Elements",
      class: "Chemistry 101",
      dueDate: "2023-05-10",
      status: "Closed",
      submissions: 22,
      totalStudents: 22,
      avgGrade: "88%",
    },
    {
      id: 4,
      title: "Cell Structure Analysis",
      class: "Biology 303",
      dueDate: "2023-05-25",
      status: "Active",
      submissions: 5,
      totalStudents: 18,
      avgGrade: "N/A",
    },
    {
      id: 5,
      title: "Algorithms Basics",
      class: "Computer Science 101",
      dueDate: "2023-05-30",
      status: "Draft",
      submissions: 0,
      totalStudents: 30,
      avgGrade: "N/A",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Assignments</h1>
          <Link href="/teacher/assignments/create">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <FilePlus className="mr-2 h-4 w-4" />
              Create Assignment
            </Button>
          </Link>
        </div>

        <Card className="mb-6 bg-white dark:bg-gray-800 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle>Search and Filter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input placeholder="Search assignments" className="pl-8 bg-white dark:bg-gray-950" />
              </div>
              <div className="flex gap-4">
                <select className="border rounded-md px-3 py-2 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
                  <option value="">All Classes</option>
                  <option value="math">Mathematics 101</option>
                  <option value="physics">Physics 202</option>
                  <option value="chemistry">Chemistry 101</option>
                  <option value="biology">Biology 303</option>
                  <option value="cs">Computer Science 101</option>
                </select>
                <select className="border rounded-md px-3 py-2 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
                  <option value="">All Status</option>
                  <option value="active">Active</option>
                  <option value="closed">Closed</option>
                  <option value="draft">Draft</option>
                </select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="all" className="mb-6">
          <TabsList>
            <TabsTrigger value="all">All Assignments</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Drafts</TabsTrigger>
            <TabsTrigger value="closed">Closed</TabsTrigger>
          </TabsList>
        </Tabs>

        <Card className="bg-white dark:bg-gray-800 shadow-sm">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Submissions</TableHead>
                  <TableHead>Avg. Grade</TableHead>
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
                      <Badge
                        variant="outline"
                        className={
                          assignment.status === "Active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                            : assignment.status === "Closed"
                              ? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                        }
                      >
                        {assignment.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {assignment.submissions}/{assignment.totalStudents}
                    </TableCell>
                    <TableCell>{assignment.avgGrade}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/teacher/assignments/${assignment.id}`}>View</Link>
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
    </div>
  )
}

