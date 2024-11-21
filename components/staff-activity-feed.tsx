import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/avatars/01.png",
    action: "Added AAPL to watchlist",
    timestamp: "2 minutes ago",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    avatar: "/avatars/02.png",
    action: "Bought 50 shares of GOOGL",
    timestamp: "10 minutes ago",
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    avatar: "/avatars/03.png",
    action: "Added TSLA to portfolio",
    timestamp: "1 hour ago",
  },
  {
    name: "Alice Brown",
    email: "alice.brown@example.com",
    avatar: "/avatars/04.png",
    action: "Sold 100 shares of AMZN",
    timestamp: "2 hours ago",
  },
  {
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    avatar: "/avatars/05.png",
    action: "Updated NFLX price target",
    timestamp: "3 hours ago",
  },
]

export function StaffActivityFeed() {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.avatar} alt="Avatar" />
            <AvatarFallback>{activity.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.name}</p>
            <p className="text-sm text-muted-foreground">{activity.action}</p>
            <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

