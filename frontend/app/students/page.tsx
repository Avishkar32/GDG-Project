import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserPlus } from "lucide-react"

export default function StudentsPage() {
  // This would be fetched from the database in a real application
  const students = [
    { id: 1, name: "Aarav Sharma", email: "aarav.s@example.com", class: "Mathematics 101", status: "Active" },
    { id: 2, name: "Ishaan Verma", email: "ishaan.v@example.com", class: "Physics 202", status: "Active" },
    { id: 3, name: "Ananya Gupta", email: "ananya.g@example.com", class: "Chemistry 101", status: "Inactive" },
    { id: 4, name: "Diya Patel", email: "diya.p@example.com", class: "Biology 303", status: "Active" },
    { id: 5, name: "Rohan Mehta", email: "rohan.m@example.com", class: "Computer Science 101", status: "Active" },
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Students</h1>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Student
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Search and Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <Input placeholder="Search by name or email" className="md:w-1/3" />
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
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        student.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                      }`}
                    >
                      {student.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        Edit
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

