import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function StudentClassCards() {
  const classes = [
    {
      id: 1,
      name: "Mathematics 101",
      instructor: "Prof. Smith",
      grade: "A-",
      progress: 85,
      pendingAssignments: 2,
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 2,
      name: "Physics 202",
      instructor: "Prof. Johnson",
      grade: "B+",
      progress: 78,
      pendingAssignments: 1,
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      name: "Chemistry 101",
      instructor: "Prof. Williams",
      grade: "A",
      progress: 92,
      pendingAssignments: 0,
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 4,
      name: "Biology 303",
      instructor: "Prof. Davis",
      grade: "B-",
      progress: 72,
      pendingAssignments: 3,
      color: "from-orange-500 to-amber-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {classes.map((classItem) => (
        <Card key={classItem.id} className="overflow-hidden">
          <div className={`h-2 bg-gradient-to-r ${classItem.color}`} />
          <CardContent className="p-4">
            <h3 className="font-medium mb-1">{classItem.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{classItem.instructor}</p>

            <div className="grid grid-cols-2 gap-2 text-sm mb-3">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-xs">Current Grade</p>
                <p className="font-medium">{classItem.grade}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-xs">Pending</p>
                <p className="font-medium">{classItem.pendingAssignments} assignments</p>
              </div>
            </div>

            <div className="space-y-1 mb-4">
              <div className="flex justify-between text-xs">
                <span>Course Progress</span>
                <span>{classItem.progress}%</span>
              </div>
              <Progress value={classItem.progress} className="h-1.5" />
            </div>

            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link href={`/student/classes/${classItem.id}`}>View Class</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

