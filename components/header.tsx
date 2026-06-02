import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Bell, Search, Plus, User } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-zinc-500" />
          <Input
            placeholder="Search projects, metrics, or team..."
            className="pl-10 bg-zinc-900 border-zinc-800 focus-visible:ring-indigo-600 h-11 rounded-2xl"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button 
          size="sm" 
          className="gap-2 bg-indigo-600 hover:bg-indigo-700 rounded-2xl px-5 h-10 shadow-sm"
        >
          <Plus className="w-4 h-4" />
          New Project
        </Button>

        <Button variant="ghost" size="icon" className="rounded-2xl h-10 w-10">
          <Bell className="w-5 h-5" />
        </Button>

        <Avatar className="h-9 w-9 border border-zinc-800">
          <AvatarFallback className="bg-zinc-800 text-white text-sm">AR</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
