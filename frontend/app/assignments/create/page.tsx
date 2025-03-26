"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileUp, Save } from "lucide-react"

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
    router.push("/assignments")
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Create New Assignment</h1>

      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Assignment Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Assignment Title</Label>
                <Input id="title" placeholder="Enter assignment title" required />
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
                <Label htmlFor="points">Total Points</Label>
                <Input id="points" type="number" min="0" placeholder="Enter total points" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="instructions">Instructions</Label>
              <Textarea
                id="instructions"
                placeholder="Enter detailed instructions for the assignment"
                rows={6}
                required
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Attachments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <div className="flex flex-col items-center justify-center">
                <FileUp className="h-10 w-10 text-muted-foreground mb-2" />
                <p className="mb-2 text-sm text-muted-foreground">Drag and drop files here, or click to select files</p>
                <Input id="file-upload" type="file" multiple className="hidden" onChange={handleFileChange} />
                <Button variant="outline" onClick={() => document.getElementById("file-upload")?.click()}>
                  Select Files
                </Button>
              </div>
            </div>

            {files.length > 0 && (
              <div className="mt-4">
                <h3 className="font-medium mb-2">Selected Files:</h3>
                <ul className="space-y-2">
                  {files.map((file, index) => (
                    <li key={index} className="flex items-center justify-between p-2 bg-muted rounded-md">
                      <span>{file.name}</span>
                      <span className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(2)} KB</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>

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
            <Button variant="outline" onClick={() => router.push("/assignments")}>
              Cancel
            </Button>
            <Button type="submit">
              <Save className="mr-2 h-4 w-4" />
              Create Assignment
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  )
}

