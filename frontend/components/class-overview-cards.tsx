import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function ClassOverviewCards() {
  const classes = [
    {
      id: 1,
      name: "Mathematics 101",
      students: 32,
      avgGrade: 85,
      submissions: 28,
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 2,
      name: "Physics 202",
      students: 24,
      avgGrade: 78,
      submissions: 20,
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      name: "Chemistry 101",
      students: 29,
      avgGrade: 82,
      submissions: 25,
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 4,
      name: "Biology 303",
      students: 18,
      avgGrade: 76,
      submissions: 15,
      color: "from-orange-500 to-amber-600",
    },
    {
      id: 5,
      name: "Computer Science 101",
      students: 35,
      avgGrade: 88,
      submissions: 32,
      color: "from-red-500 to-rose-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {classes.map((classItem) => (
        <Card key={classItem.id} className="overflow-hidden">
          <div className={`h-2 bg-gradient-to-r ${classItem.color}`} />
          <CardContent className="p-4">
            <h3 className="font-medium mb-2">{classItem.name}</h3>
            <div className="grid grid-cols-3 gap-2 text-sm mb-3">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-xs">Students</p>
                <p className="font-medium">{classItem.students}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-xs">Avg. Grade</p>
                <p className="font-medium">{classItem.avgGrade}%</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-xs">Submissions</p>
                <p className="font-medium">
                  {classItem.submissions}/{classItem.students}
                </p>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>Submission Rate</span>
                <span>{Math.round((classItem.submissions / classItem.students) * 100)}%</span>
              </div>
              <Progress value={(classItem.submissions / classItem.students) * 100} className="h-1.5" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

