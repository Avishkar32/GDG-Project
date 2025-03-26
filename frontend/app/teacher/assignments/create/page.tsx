"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUp, Save, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CreateAssignmentPage() {
  const router = useRouter()
  const [files, setFiles] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send the form data to your backend
    // For now, we'll just redirect back to the assignments page
    router.push("/teacher/assignments")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/teacher/assignments">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Assignments
          </Link>
        </Button>

        <h1 className="text-3xl font-bold mb-6">Create New Assignment</h1>

        <form onSubmit={handleSubmit}>
          <Card className="mb-6 bg-white dark:bg-gray-800 shadow-sm">
            <CardHeader>
              <CardTitle>Assignment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Assignment Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter assignment title"
                    className="bg-white dark:bg-gray-950"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="class">Class</Label>
                  <select
                    id="class"
                    className="w-full border rounded-md px-3 py-2 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
                    required
                  >
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
                  <Input id="dueDate" type="date" className="bg-white dark:bg-gray-950" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="points">Total Points</Label>
                  <Input
                    id="points"
                    type="number"
                    min="0"
                    placeholder="Enter total points"
                    className="bg-white dark:bg-gray-950"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="instructions">Instructions</Label>
                <Textarea
                  id="instructions"
                  placeholder="Enter detailed instructions for the assignment"
                  rows={6}
                  className="bg-white dark:bg-gray-950"
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 bg-white dark:bg-gray-800 shadow-sm">
            <CardHeader>
              <CardTitle>Attachments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <div className="flex flex-col items-center justify-center">
                  <FileUp className="h-10 w-10 text-gray-400 mb-2" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    Drag and drop files here, or click to select files
                  </p>
                  <Input id="file-upload" type="file" multiple className="hidden" onChange={handleFileChange} />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("file-upload")?.click()}
                  >
                    Select Files
                  </Button>
                </div>
              </div>

              {files.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-medium mb-2">Selected Files:</h3>
                  <ul className="space-y-2">
                    {files.map((file, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-900 rounded-md"
                      >
                        <span>{file.name}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {(file.size / 1024).toFixed(2)} KB
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm">
            <CardHeader>
              <CardTitle>Publishing Options</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="publish-now">
                <TabsList className="mb-4">
                  <TabsTrigger value="publish-now">Publish Now</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                  <TabsTrigger value="draft">Save as Draft</TabsTrigger>
                </TabsList>

                <TabsContent value="publish-now">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    The assignment will be immediately visible to students after creation.
                  </p>
                </TabsContent>

                <TabsContent value="schedule">
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      Schedule when this assignment should become visible to students.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="publishDate">Publish Date</Label>
                        <Input id="publishDate" type="date" className="bg-white dark:bg-gray-950" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="publishTime">Publish Time</Label>
                        <Input id="publishTime" type="time" className="bg-white dark:bg-gray-950" />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="draft">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Save this assignment as a draft. It won't be visible to students until published.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between border-t p-6">
              <Button variant="outline" type="button" onClick={() => router.push("/teacher/assignments")}>
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                <Save className="mr-2 h-4 w-4" />
                Create Assignment
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  )
}

