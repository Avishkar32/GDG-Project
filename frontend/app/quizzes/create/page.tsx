"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Save, Trash2 } from "lucide-react"

export default function CreateQuizPage() {
  const router = useRouter()
  const [questions, setQuestions] = useState([
    { id: 1, text: "", type: "multiple-choice", options: ["", "", "", ""], correctAnswer: 0 },
  ])

  const addQuestion = () => {
    const newId = questions.length > 0 ? Math.max(...questions.map((q) => q.id)) + 1 : 1
    setQuestions([
      ...questions,
      {
        id: newId,
        text: "",
        type: "multiple-choice",
        options: ["", "", "", ""],
        correctAnswer: 0,
      },
    ])
  }

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id))
  }

  const updateQuestion = (id: number, field: string, value: any) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === id) {
          return { ...q, [field]: value }
        }
        return q
      }),
    )
  }

  const updateOption = (questionId: number, optionIndex: number, value: string) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId) {
          const newOptions = [...q.options]
          newOptions[optionIndex] = value
          return { ...q, options: newOptions }
        }
        return q
      }),
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send the form data to your backend
    // For now, we'll just redirect back to the quizzes page
    router.push("/quizzes")
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Create New Quiz</h1>

      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Quiz Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Quiz Title</Label>
                <Input id="title" placeholder="Enter quiz title" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="class">Class</Label>
                <select id="class" className="w-full border rounded-md px-3 py-2" required>
                  <option value="">Select a class</option>
                  <option value="math">Mathematics 101</option>
                  <option value="physics">Physics 202</option>
                  <option value="chemistry">Chemistry 101</option>
                  <option value="biology">Biology 303</option>
                  <option value="cs">Computer Science 101</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date</Label>
                <Input id="dueDate" type="date" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeLimit">Time Limit (minutes)</Label>
                <Input id="timeLimit" type="number" min="0" placeholder="Enter time limit" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="instructions">Instructions</Label>
              <Textarea id="instructions" placeholder="Enter instructions for students" rows={4} />
            </div>
          </CardContent>
        </Card>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Questions</h2>
            <Button type="button" onClick={addQuestion}>
              <Plus className="mr-2 h-4 w-4" />
              Add Question
            </Button>
          </div>

          {questions.map((question, index) => (
            <Card key={question.id} className="mb-4">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Question {index + 1}</CardTitle>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => removeQuestion(question.id)}
                  disabled={questions.length === 1}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor={`question-${question.id}`}>Question Text</Label>
                  <Textarea
                    id={`question-${question.id}`}
                    value={question.text}
                    onChange={(e) => updateQuestion(question.id, "text", e.target.value)}
                    placeholder="Enter your question"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`question-type-${question.id}`}>Question Type</Label>
                  <select
                    id={`question-type-${question.id}`}
                    className="w-full border rounded-md px-3 py-2"
                    value={question.type}
                    onChange={(e) => updateQuestion(question.id, "type", e.target.value)}
                    required
                  >
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="true-false">True/False</option>
                    <option value="short-answer">Short Answer</option>
                  </select>
                </div>

                {question.type === "multiple-choice" && (
                  <div className="space-y-3">
                    <Label>Answer Options</Label>
                    {question.options.map((option, optIndex) => (
                      <div key={optIndex} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`correct-answer-${question.id}`}
                          checked={question.correctAnswer === optIndex}
                          onChange={() => updateQuestion(question.id, "correctAnswer", optIndex)}
                        />
                        <Input
                          value={option}
                          onChange={(e) => updateOption(question.id, optIndex, e.target.value)}
                          placeholder={`Option ${optIndex + 1}`}
                          required
                        />
                      </div>
                    ))}
                  </div>
                )}

                {question.type === "true-false" && (
                  <div className="space-y-3">
                    <Label>Correct Answer</Label>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`correct-answer-${question.id}`}
                          checked={question.correctAnswer === 0}
                          onChange={() => updateQuestion(question.id, "correctAnswer", 0)}
                        />
                        <Label>True</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`correct-answer-${question.id}`}
                          checked={question.correctAnswer === 1}
                          onChange={() => updateQuestion(question.id, "correctAnswer", 1)}
                        />
                        <Label>False</Label>
                      </div>
                    </div>
                  </div>
                )}

                {question.type === "short-answer" && (
                  <div className="space-y-2">
                    <Label htmlFor={`correct-answer-${question.id}`}>Correct Answer</Label>
                    <Input
                      id={`correct-answer-${question.id}`}
                      value={typeof question.correctAnswer === "string" ? question.correctAnswer : ""}
                      onChange={(e) => updateQuestion(question.id, "correctAnswer", e.target.value)}
                      placeholder="Enter the correct answer"
                      required
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Publishing Options</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <input type="radio" id="publish-now" name="publish-option" value="now" defaultChecked />
                <Label htmlFor="publish-now">Publish immediately</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="publish-later" name="publish-option" value="later" />
                <Label htmlFor="publish-later">Schedule for later</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="radio" id="save-draft" name="publish-option" value="draft" />
                <Label htmlFor="save-draft">Save as draft</Label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.push("/quizzes")}>
              Cancel
            </Button>
            <Button type="submit">
              <Save className="mr-2 h-4 w-4" />
              Create Quiz
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

