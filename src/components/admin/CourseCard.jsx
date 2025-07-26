import { Card, CardContent, CardHeader, CardTitle , CardFooter } from "../ui/card";
import {Button} from "../ui/button";
import {Badge} from "../ui/badge";
import {Progress} from "../ui/progress";
import { Clock, Users, BookOpen, Star } from "lucide-react";

export function CourseCard({
  title,
  instructor,
  description,
  image,
  duration,
  students,
  lessons,
  rating,
  progress,
  status,
  price,
}) {
  return (
    <Card className="overflow-hidden hover:shadow-card transition-all duration-200 bg-gradient-card">
      <div className="relative h-48 bg-gradient-primary">
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="h-16 w-16 text-primary-foreground/70" />
        </div>
        <div className="absolute top-4 right-4">
          <Badge 
            variant={status === "completed" ? "default" : status === "enrolled" ? "secondary" : "outline"}
            className={
              status === "completed" 
                ? "bg-success text-success-foreground" 
                : status === "enrolled" 
                ? "bg-primary text-primary-foreground"
                : ""
            }
          >
            {status === "completed" ? "Completed" : status === "enrolled" ? "Enrolled" : "Available"}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg leading-none tracking-tight">{title}</h3>
            <p className="text-sm text-muted-foreground">by {instructor}</p>
          </div>
          {price && status === "available" && (
            <div className="text-right">
              <p className="text-lg font-bold text-primary">${price}</p>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {students.toLocaleString()}
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            {lessons} lessons
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-warning text-warning" />
            {rating}
          </div>
        </div>

        {progress !== undefined && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button 
          className="w-full" 
          variant={
            status === "enrolled" ? "default" : 
            status === "completed" ? "success" : 
            "course"
          }
        >
          {status === "enrolled" ? "Continue Learning" : 
           status === "completed" ? "Review Course" : 
           "Enroll Now"}
        </Button>
      </CardFooter>
    </Card>
  );
}