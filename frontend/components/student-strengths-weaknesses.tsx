import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle } from "lucide-react"

interface StudentStrengthsWeaknessesProps {
  strengths: string[]
  weaknesses: string[]
}

export function StudentStrengthsWeaknesses({ strengths, weaknesses }: StudentStrengthsWeaknessesProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium flex items-center mb-3">
          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
          Strengths
        </h3>
        <div className="flex flex-wrap gap-2">
          {strengths.map((strength, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-green-50 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50"
            >
              {strength}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium flex items-center mb-3">
          <XCircle className="h-4 w-4 text-red-500 mr-2" />
          Areas for Improvement
        </h3>
        <div className="flex flex-wrap gap-2">
          {weaknesses.map((weakness, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-red-50 text-red-700 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50"
            >
              {weakness}
            </Badge>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
        <h3 className="text-sm font-medium mb-3">Recommended Resources</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
              Calculus Fundamentals
            </a>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
              Trigonometry Practice Problems
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

