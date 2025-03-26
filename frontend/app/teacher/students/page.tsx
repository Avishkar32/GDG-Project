import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserPlus, Search, Filter, Download } from "lucide-react"
import Link from "next/link"

export default function StudentsPage() {
  // This would be fetched from the database in a real application
  const students = [
    {
      id: 1,
      name: "Aarav Sharma",
      email: "aarav.s@example.com",
      class: "Mathematics 101",
      openAssignments: 2,
      submittedAssignments: 8,
      grade: "A-",
      status: "Active",
    },
    {
      id: 2,
      name: "Ishaan Verma",
      email: "ishaan.v@example.com",
      class: "Physics 202",
      openAssignments: 1,
      submittedAssignments: 7,
      grade: "B+",
      status: "Active",
    },
    {
      id: 3,
      name: "Ananya Gupta",
      email: "ananya.g@example.com",
      class: "Chemistry 101",
      openAssignments: 3,
      submittedAssignments: 5,
      grade: "C",
      status: "At Risk",
    },
    {
      id: 4,
      name: "Diya Patel",
      email: "diya.p@example.com",
      class: "Biology 303",
      openAssignments: 0,
      submittedAssignments: 10,
      grade: "A",
      status: "Active",
    },
    {
      id: 5,
      name: "Rohan Mehta",
      email: "rohan.m@example.com",
      class: "Computer Science 101",
      openAssignments: 4,
      submittedAssignments: 6,
      grade: "B-",
      status: "At Risk",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Students</h1>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            <UserPlus className="mr-2 h-4 w-4" />
            Add Student
          </Button>
        </div>

        <Card className="mb-6 bg-white dark:bg-gray-800 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle>Search and Filter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input placeholder="Search by name or email" className="pl-8 bg-white dark:bg-gray-950" />
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
                  <option value="at-risk">At Risk</option>
                  <option value="inactive">Inactive</option>
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
            <TabsTrigger value="all">All Students</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="at-risk">At Risk</TabsTrigger>
          </TabsList>
        </Tabs>

        <Card className="bg-white dark:bg-gray-800 shadow-sm">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Open Assignments</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.class}</TableCell>
                    <TableCell>{student.openAssignments}</TableCell>
                    <TableCell>{student.submittedAssignments}</TableCell>
                    <TableCell>{student.grade}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          student.status === "Active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                            : student.status === "At Risk"
                              ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
                              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                        }`}
                      >
                        {student.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/teacher/students/${student.id}`}>View</Link>
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

