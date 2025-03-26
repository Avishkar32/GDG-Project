"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { BookOpen, Menu, X, Bell, User } from "lucide-react"
import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isTeacherRoute = pathname?.startsWith("/teacher")
  const isStudentRoute = pathname?.startsWith("/student")

  const teacherRoutes = [
    { href: "/teacher/dashboard", label: "Dashboard" },
    { href: "/teacher/students", label: "Students" },
    { href: "/teacher/assignments", label: "Assignments" },
    { href: "/teacher/quizzes", label: "Quizzes" },
    { href: "/assessment", label: "Assessment" },
  ]

  const studentRoutes = [
    { href: "/student/dashboard", label: "Dashboard" },
    { href: "/student/classes", label: "My Classes" },
    { href: "/student/assignments", label: "Assignments" },
    { href: "/student/performance", label: "My Performance" },
  ]

  const routes = isTeacherRoute ? teacherRoutes : isStudentRoute ? studentRoutes : []

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-gray-950/80 dark:border-gray-800">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-500" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            EduSphere
          </span>
        </Link>

        {(isTeacherRoute || isStudentRoute) && (
          <nav className="hidden md:flex gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-500 ${
                  pathname === route.href ? "text-blue-600 dark:text-blue-500" : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-4">
          {(isTeacherRoute || isStudentRoute) && (
            <>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                        {isTeacherRoute ? "T" : "S"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/" className="w-full">
                      Log out
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}

          {!isTeacherRoute && !isStudentRoute && (
            <div className="hidden md:flex gap-4">
              <Button variant="outline" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                asChild
              >
                <Link href="/signup">Sign up</Link>
              </Button>
            </div>
          )}

          <ModeToggle />

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4 px-4 bg-white dark:bg-gray-950 border-t dark:border-gray-800">
          <nav className="flex flex-col gap-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-500 ${
                  pathname === route.href ? "text-blue-600 dark:text-blue-500" : "text-gray-600 dark:text-gray-300"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.label}
              </Link>
            ))}

            {!isTeacherRoute && !isStudentRoute && (
              <>
                <Link
                  href="/login"
                  className="text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign up
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

