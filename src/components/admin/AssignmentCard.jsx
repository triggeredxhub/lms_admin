
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge, badgeVariants } from "../ui/badge";
import { CalendarDays, Clock, FileText, Users } from "lucide-react";
import { formatDistanceToNow } from "date-fns";


export function AssignmentCard({
  title,
  course,
  description,
  dueDate,
  status,
  points,
  submissions,
  totalStudents,
  userRole,
}) {
  const getStatusColor = (status) => {
    switch (status) {
      case "submitted":
        return "bg-primary text-primary-foreground";
      case "graded":
        return "bg-success text-success-foreground";
      case "overdue":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-warning text-warning-foreground";
    }
  };

  const getActionButton = () => {
    if (userRole === "instructor" || userRole === "admin") {
      return (
        <Button variant="outline" className="w-full">
          <Users className="h-4 w-4 mr-2" />
          {userRole === "admin" ? "Monitor Assignment" : "Review Submissions"} ({submissions}/{totalStudents})
        </Button>
      );
    }

    switch (status) {
      case "submitted":
        return (
          <Button variant="outline" className="w-full" disabled>
            <FileText className="h-4 w-4 mr-2" />
            Submitted
          </Button>
        );
      case "graded":
        return (
          <Button variant="success" className="w-full">
            <FileText className="h-4 w-4 mr-2" />
            View Grade
          </Button>
        );
      case "overdue":
        return (
          <Button variant="destructive" className="w-full" disabled>
            <Clock className="h-4 w-4 mr-2" />
            Overdue
          </Button>
        );
      default:
        return (
          <Button variant="default" className="w-full">
            <FileText className="h-4 w-4 mr-2" />
            Start Assignment
          </Button>
        );
    }
  };

  const isOverdue = dueDate < new Date() && status === "pending";
  const timeText = formatDistanceToNow(dueDate, { addSuffix: true });

  return (
    <Card className="hover:shadow-card transition-all duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start w-full">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <p className="text-sm text-muted-foreground">{course}</p>
          </div>

          <div className="ml-auto">
            <Badge className={getStatusColor(isOverdue ? "overdue" : status)}>
              {isOverdue ? "Overdue" : status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
          </div>
        </div>

      </CardHeader>


      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              <span className={isOverdue ? "text-destructive font-medium" : ""}>
                Due {timeText}
              </span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <FileText className="h-4 w-4" />
              {points} points
            </div>
          </div>
        </div>

        {(userRole === "instructor" || userRole === "admin") &&
          submissions !== undefined &&
          totalStudents && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Submissions:</span>
              <span className="font-medium">
                {submissions}/{totalStudents} ({Math.round((submissions / totalStudents) * 100)}%)
              </span>
            </div>
          )}

        {getActionButton()}
      </CardContent>
    </Card>
  );
}