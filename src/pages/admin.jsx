import DashboardStats from "../components/admin/dashboard";
import Navbar from "../components/admin/navbar";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tab";

import { AssignmentCard } from "../components/admin/AssignmentCard";
import { CourseCard } from "../components/admin/CourseCard";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

import {
  CalendarDays,
  MessageSquare,
  TrendingUp,
  Users,
  BookOpen,
  GraduationCap,
  Settings,
  Plus
} from "lucide-react";


function Admin() {
  const userRole = "admin";

  // Sample data
  const sampleCourses = [
    {
      id: "1",
      title: "Introduction to React",
      instructor: "Sarah Johnson",
      description: "Learn the fundamentals of React including components, state, and props. Perfect for beginners looking to start their React journey.",
      image: "",
      duration: "8 weeks",
      students: 1234,
      lessons: 24,
      rating: 4.8,
      progress: 65,
      status: "enrolled",
    },
    {
      id: "2",
      title: "Advanced JavaScript",
      instructor: "Mike Chen",
      description: "Master advanced JavaScript concepts including closures, prototypes, async programming, and modern ES6+ features.",
      image: "",
      duration: "10 weeks",
      students: 892,
      lessons: 30,
      rating: 4.9,
      progress: 100,
      status: "completed",
    },
    {
      id: "3",
      title: "UI/UX Design Principles",
      instructor: "Emma Davis",
      description: "Discover the fundamentals of user interface and user experience design. Learn design thinking and create beautiful, functional interfaces.",
      image: "",
      duration: "6 weeks",
      students: 756,
      lessons: 18,
      rating: 4.7,
      status: "enrolled",
      price: 89,
    },
  ];

  const sampleAssignments = [
    {
      id: "1",
      title: "Introduction to React",
      instructor: "Sarah Johnson",
      description:
        "Learn the fundamentals of React including components, state, and props. Perfect for beginners looking to start their React journey.",
      image: "",
      duration: "8 weeks",
      students: 1234,
      lessons: 24,
      rating: 4.8,
      progress: 65,
      status: "enrolled",
    },
    {
      id: "2",
      title: "Advanced JavaScript",
      instructor: "Mike Chen",
      description:
        "Master advanced JavaScript concepts including closures, prototypes, async programming, and modern ES6+ features.",
      image: "",
      duration: "10 weeks",
      students: 892,
      lessons: 30,
      rating: 4.9,
      progress: 100,
      status: "completed",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        {/* welcome section */}
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-lg bg-gradient-hero p-8 text-primary-foreground">
            <div className="relative z-10">
              <h1 className="text-3xl font-bold mb-2">Welcome back, John</h1>
              <p className="text-primary-foreground/90 mb-4">
                Manage your LMS efficiently with our admin tools.
              </p>
              {/* <button>
                <span className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                  Get Started
                </span>
              </button> */}
            </div>
          </div>
        </div>
        {/* dashboard stats */}
        <div className="mb-8">
          <DashboardStats userRole="student" />
        </div>

        {/* main content */}
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Tabs defaultValue="assignments" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="courses" >Courses</TabsTrigger>
                <TabsTrigger value="assignments">Assignments</TabsTrigger>
              </TabsList>
              <TabsContent value="courses" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">
                    My Courses
                  </h2>
                  <Button>
                    <Plus className="h-4 w-4 mr-2"/>
                    New Course
                  </Button>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {sampleCourses.map((course) => (
                    <CourseCard
                      key={course.id}
                      title={course.title}
                      instructor={course.instructor}
                      description={course.description}
                      image={course.image}
                      duration={course.duration}
                      students={course.students}
                      lessons={course.lessons}
                      rating={course.rating}
                      progress={course.progress}
                      status={course.status}
                      price={course.price}
                    />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="assignments" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">
                    Assignment Reviews
                  </h2>
                </div>
                <div className="grid gap-4 ">
                  {sampleAssignments.map((assignment) => (
                  <AssignmentCard
                    key={assignment.id}
                    title={assignment.title}
                    course={assignment.instructor}
                    description={assignment.description}
                    dueDate={new Date()} // Replace with actual due date if available
                    status={assignment.status}
                    points={100}
                    submissions={10}
                    totalStudents={20}
                    userRole={userRole}
                  />
                ))}
                </div>
              </TabsContent>

            </Tabs>
          </div>
          {/* sidebar */}
          {/* <div className="space-y-6">

          </div> */}
        </div>
      </main>
    </div>
  );
}

export default Admin;
