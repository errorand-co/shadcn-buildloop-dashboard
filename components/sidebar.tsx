"use client"

import { Home, BarChart3, Users, Settings, Package, TrendingUp, Bell, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: TrendingUp, label: "Performance", href: "/performance" },
  { icon: Users, label: "Team", href: "/team" },
  { icon: Package, label: "Projects", href: "/projects" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function Sidebar() {
  return (
    <div className="w-72 border-r border-zinc-800 bg-zinc-950 flex flex-col h-full">
      <div className="p-6 flex items-center gap-3 border-b border-zinc-800">
        <div className="w-9 h-9 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-white font-bold text-2xl tracking-tighter">L</span>
        </div>
        <div>
          <h1 className="font-semibold text-2xl tracking-[-1.5px]">BuildLoop</h1>
          <p className="text-[10px] text-zinc-500 -mt-1">PRO WORKSPACE</p>
        </div>
      </div>

      <div className="flex-1 p-4 space-y-1">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={cn(
              "w-full justify-start gap-3 h-11 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-xl",
              index === 0 && "bg-zinc-900 text-white"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </Button>
        ))}
      </div>

      <div className="p-4 border-t border-zinc-800 mt-auto">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 bg-zinc-800 rounded-full flex items-center justify-center text-sm font-medium">AR</div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm truncate">Alex Rivera</p>
            <p className="text-xs text-zinc-500">Builder • Pro</p>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-white">
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
