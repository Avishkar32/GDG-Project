import { Badge } from "@/components/ui/badge"
import { CalendarClock, FileText } from "lucide-react"

export function StudentUpcomingAssignments() {
  const assignments = [
    {
      id: 1,
      title: "Quadratic Equations",
      type: "Assignment",
      class: "Mathematics 101",
      dueDate: "Tomorrow, 11:59 PM",
      status: "Urgent",
    },
    {
      id: 2,
      title: "Newton's Laws Quiz",
      type: "Quiz",
      class: "Physics 202",
      dueDate: "In 3 days",
      status: "Upcoming",
    },
    {
      id: 3,
      title: "Chemical Reactions Lab",
      type: "Lab Report",
      class: "Chemistry 101",
      dueDate: "Next week",
      status: "Planned",
    },
  ]

  return (
    <div className="space-y-3">
      {assignments.map((assignment) => (
        <div
          key={assignment.id}
          className="p-3 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
        >
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-medium text-sm">{assignment.title}</h4>
            <Badge
              variant={
                assignment.status === "Urgent"
                  ? "destructive"
                  : assignment.status === "Upcoming"
                    ? "default"
                    : "outline"
              }
              className={
                assignment.status === "Urgent"
                  ? "bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50"
                  : assignment.status === "Upcoming"
                    ? "bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50"
                    : ""
              }
            >
              {assignment.status}
            </Badge>
          </div>
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
            <FileText className="h-3 w-3 mr-1" />
            <span>
              {assignment.type} • {assignment.class}
            </span>
          </div>
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <CalendarClock className="h-3 w-3 mr-1" />
            <span>Due {assignment.dueDate}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

