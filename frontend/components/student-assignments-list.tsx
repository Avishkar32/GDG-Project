import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FileText, Clock } from "lucide-react"

interface StudentAssignmentsListProps {
  studentId: number
}

export function StudentAssignmentsList({ studentId }: StudentAssignmentsListProps) {
  // This would be fetched from the database in a real application
  const assignments = [
    {
      id: 1,
      title: "Quadratic Equations",
      type: "Assignment",
      class: "Mathematics 101",
      dueDate: "May 15, 2023",
      status: "Submitted",
      grade: "92/100",
      feedback: true,
    },
    {
      id: 2,
      title: "Algebraic Expressions",
      type: "Quiz",
      class: "Mathematics 101",
      dueDate: "May 8, 2023",
      status: "Graded",
      grade: "85/100",
      feedback: true,
    },
    {
      id: 3,
      title: "Linear Equations",
      type: "Assignment",
      class: "Mathematics 101",
      dueDate: "April 30, 2023",
      status: "Graded",
      grade: "78/100",
      feedback: true,
    },
    {
      id: 4,
      title: "Trigonometric Functions",
      type: "Assignment",
      class: "Mathematics 101",
      dueDate: "May 20, 2023",
      status: "Pending",
      grade: null,
      feedback: false,
    },
    {
      id: 5,
      title: "Calculus Basics",
      type: "Quiz",
      class: "Mathematics 101",
      dueDate: "May 25, 2023",
      status: "Not Started",
      grade: null,
      feedback: false,
    },
  ]

  return (
    <div className="space-y-4">
      {assignments.map((assignment) => (
        <div
          key={assignment.id}
          className="p-4 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
        >
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium">{assignment.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {assignment.type} • {assignment.class}
                </p>
              </div>
            </div>
            <Badge
              variant="outline"
              className={
                assignment.status === "Submitted"
                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                  : assignment.status === "Graded"
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    : assignment.status === "Pending"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
              }
            >
              {assignment.status}
            </Badge>
          </div>

          <div className="flex items-center justify-between mb-2 text-sm">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Clock className="h-4 w-4 mr-1" />
              Due: {assignment.dueDate}
            </div>
            {assignment.grade && <div className="font-medium">Grade: {assignment.grade}</div>}
          </div>

          {assignment.status === "Not Started" && (
            <div className="mt-3">
              <Button size="sm" className="w-full">
                Start Assignment
              </Button>
            </div>
          )}

          {assignment.status === "Pending" && (
            <div className="space-y-2 mt-3">
              <div className="flex justify-between text-xs">
                <span>Progress</span>
                <span>60%</span>
              </div>
              <Progress value={60} className="h-1.5" />
              <Button size="sm" className="w-full">
                Continue Working
              </Button>
            </div>
          )}

          {assignment.feedback && (
            <div className="mt-3">
              <Button variant="outline" size="sm" className="w-full">
                View Feedback
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

