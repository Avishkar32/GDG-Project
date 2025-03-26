import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FileText, MessageSquare, Upload, UserPlus } from "lucide-react"

export function RecentActivityList() {
  const activities = [
    {
      id: 1,
      type: "submission",
      user: "Alex Johnson",
      action: "submitted an assignment",
      target: "Introduction to Algebra",
      time: "2 hours ago",
      icon: <Upload className="h-4 w-4 text-green-500" />,
      avatarSrc: "/placeholder.svg?height=32&width=32",
      avatarFallback: "AJ",
    },
    {
      id: 2,
      type: "comment",
      user: "Taylor Brown",
      action: "commented on",
      target: "Physics Quiz #3",
      time: "5 hours ago",
      icon: <MessageSquare className="h-4 w-4 text-blue-500" />,
      avatarSrc: "/placeholder.svg?height=32&width=32",
      avatarFallback: "TB",
    },
    {
      id: 3,
      type: "join",
      user: "Jamie Smith",
      action: "joined",
      target: "Chemistry 101",
      time: "Yesterday",
      icon: <UserPlus className="h-4 w-4 text-purple-500" />,
      avatarSrc: "/placeholder.svg?height=32&width=32",
      avatarFallback: "JS",
    },
    {
      id: 4,
      type: "assignment",
      user: "You",
      action: "created a new assignment",
      target: "Cell Structure Analysis",
      time: "Yesterday",
      icon: <FileText className="h-4 w-4 text-orange-500" />,
      avatarSrc: "/placeholder.svg?height=32&width=32",
      avatarFallback: "YO",
    },
    {
      id: 5,
      type: "submission",
      user: "Riley Wilson",
      action: "submitted an assignment",
      target: "Chemical Reactions",
      time: "2 days ago",
      icon: <Upload className="h-4 w-4 text-green-500" />,
      avatarSrc: "/placeholder.svg?height=32&width=32",
      avatarFallback: "RW",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={activity.avatarSrc} alt={activity.user} />
            <AvatarFallback>{activity.avatarFallback}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium">{activity.user}</p>
              <span className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {activity.action} <span className="font-medium">{activity.target}</span>
            </p>
          </div>
          <div className="flex-shrink-0">{activity.icon}</div>
        </div>
      ))}
    </div>
  )
}

