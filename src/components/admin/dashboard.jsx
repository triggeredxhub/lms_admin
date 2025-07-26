import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  BookOpen,
  Users,
  GraduationCap,
  TrendingUp,
  Calendar,
  Award,
  Clock,
  Target,
} from "lucide-react";

function StatCard({
  title,
  value,
  description,
  icon,
  trend,
  variant = "default",
}) {
  const cardClass = {
    default: "bg-gradient-card",
    primary: "bg-gradient-primary text-primary-foreground",
    success: "bg-success text-success-foreground",
    warning: "bg-warning text-warning-foreground",
  }[variant];

  return (
    <Card className={`${cardClass} hover:shadow-card transition-all duration-200`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium ">{title}</CardTitle>
        {icon}
      </CardHeader>

      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p
            className={`text-xs ${variant === "default" ? "text-muted-foreground" : "opacity-80"
              } mt-1`}
          >
            {description}
          </p>
        )}
        {trend && (
          <div
            className={`flex items-center text-xs mt-2 ${variant === "default"
                ? trend.isPositive
                  ? "text-success"
                  : "text-destructive"
                : "opacity-80"
              }`}
          >
            <TrendingUp
              className={`h-3 w-3 mr-1 ${!trend.isPositive ? "rotate-180" : ""
                }`}
            />
            {trend.isPositive ? "+" : ""}
            {trend.value}% from last month
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function DashboardStats({ userRole }) {
  if (userRole === "student") {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Enrolled Courses"
          value={8}
          description="2 new this month"
          icon={<BookOpen className="h-4 w-4" />}
          variant="primary"
        />
        <StatCard
          title="Completed Courses"
          value={12}
          description="3 completed this month"
          icon={<GraduationCap className="h-4 w-4" />}
          variant="success"
        />
        <StatCard
          title="Study Hours"
          value="47h"
          description="This month"
          icon={<Clock className="h-4 w-4" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Achievements"
          value={23}
          description="Certificates earned"
          icon={<Award className="h-4 w-4" />}
          variant="warning"
        />
      </div>
    );
  }

  if (userRole === "instructor") {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Active Courses"
          value={6}
          description="3 published this month"
          icon={<BookOpen className="h-4 w-4" />}
          variant="primary"
        />
        <StatCard
          title="Total Students"
          value="1,247"
          description="234 new enrollments"
          icon={<Users className="h-4 w-4" />}
          trend={{ value: 18, isPositive: true }}
        />
        <StatCard
          title="Course Rating"
          value="4.8"
          description="Average across all courses"
          icon={<Target className="h-4 w-4" />}
          variant="success"
        />
        <StatCard
          title="Monthly Revenue"
          value="$12,450"
          description="From course sales"
          icon={<TrendingUp className="h-4 w-4" />}
          trend={{ value: 25, isPositive: true }}
          variant="warning"
        />
      </div>
    );
  }

  // Default: Admin stats
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Users"
        value="2,847"
        description="147 new this month"
        icon={<Users className="h-4 w-4" />}
        variant="primary"
        trend={{ value: 8, isPositive: true }}
      />
      <StatCard
        title="Active Courses"
        value={156}
        description="23 published this month"
        icon={<BookOpen className="h-4 w-4" />}
      />
      <StatCard
        title="Platform Revenue"
        value="$47,230"
        description="This month"
        icon={<TrendingUp className="h-4 w-4" />}
        variant="success"
        trend={{ value: 15, isPositive: true }}
      />
      <StatCard
        title="Completion Rate"
        value="78%"
        description="Course completion rate"
        icon={<Target className="h-4 w-4" />}
        variant="warning"
      />
    </div>
  );
}

export default DashboardStats;
