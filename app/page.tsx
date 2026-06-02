"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { TrendingUp, Users, Clock, DollarSign, ArrowUp, ArrowDown } from "lucide-react"

export default function BuildLoopDashboard() {
  const kpis = [
    {
      title: "Active Builds",
      value: "24",
      change: "+12%",
      trend: "up",
      icon: TrendingUp,
      color: "emerald",
    },
    {
      title: "Completion Rate",
      value: "94%",
      change: "+3%",
      trend: "up",
      icon: Users,
      color: "emerald",
    },
    {
      title: "Avg. Build Time",
      value: "2.4h",
      change: "-18%",
      trend: "down",
      icon: Clock,
      color: "emerald",
    },
    {
      title: "Revenue (MTD)",
      value: "$48.2k",
      change: "+24%",
      trend: "up",
      icon: DollarSign,
      color: "emerald",
    },
  ]

  const recentActivity = [
    { id: 1, action: "AI Agent v2 deployed successfully", time: "2m ago", type: "success" },
    { id: 2, action: "New team member joined — Sarah Chen", time: "18m ago", type: "info" },
    { id: 3, action: "Project 'LoopFlow' reached 100 builds", time: "1h ago", type: "success" },
    { id: 4, action: "Performance alert: Build #482 took 4.2h", time: "3h ago", type: "warning" },
  ]

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-950">
      <Sidebar />
      
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-auto p-8 bg-zinc-950">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Welcome Header */}
            <div>
              <div className="flex items-end justify-between">
                <div>
                  <h1 className="text-5xl font-semibold tracking-[-2.5px]">Good morning, Alex</h1>
                  <p className="text-xl text-zinc-400 mt-2">Here's what's happening with your builds today.</p>
                </div>
                <Badge variant="outline" className="border-emerald-600 text-emerald-400 px-4 py-1.5 text-sm rounded-2xl">
                  All systems operational
                </Badge>
              </div>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {kpis.map((kpi, index) => (
                <Card key={index} className="dashboard-card border-zinc-800 bg-zinc-900">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium text-zinc-400 tracking-wide">{kpi.title}</CardTitle>
                      <kpi.icon className="w-5 h-5 text-zinc-500" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="kpi-value text-white">{kpi.value}</div>
                    <div className={`flex items-center gap-1.5 text-sm mt-3 ${kpi.trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {kpi.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                      {kpi.change} from last month
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Charts + Activity Row */}
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
              {/* Performance Trend */}
              <Card className="lg:col-span-4 dashboard-card border-zinc-800 bg-zinc-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Build Performance Trend
                    <Badge variant="secondary" className="ml-auto bg-zinc-800 text-zinc-300">Last 30 days</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-zinc-950 rounded-2xl flex items-center justify-center border border-zinc-800">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 mx-auto text-zinc-700 mb-4" />
                      <p className="text-zinc-400">[Line Chart Placeholder]</p>
                      <p className="text-xs text-zinc-500 mt-1">Connect Recharts or Tremor here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="lg:col-span-3 dashboard-card border-zinc-800 bg-zinc-900">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex gap-4 text-sm">
                      <div className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${activity.type === 'success' ? 'bg-emerald-500' : activity.type === 'warning' ? 'bg-amber-500' : 'bg-sky-500'}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-zinc-200 leading-snug">{activity.action}</p>
                        <p className="text-xs text-zinc-500 mt-0.5">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Projects Table */}
            <Card className="dashboard-card border-zinc-800 bg-zinc-900">
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <CardTitle>Active Projects</CardTitle>
                <Button variant="outline" size="sm" className="rounded-2xl border-zinc-700">View all</Button>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-800 text-left">
                        <th className="pb-4 font-medium text-zinc-400">Project</th>
                        <th className="pb-4 font-medium text-zinc-400">Status</th>
                        <th className="pb-4 font-medium text-zinc-400">Progress</th>
                        <th className="pb-4 font-medium text-zinc-400">Team</th>
                        <th className="pb-4 font-medium text-zinc-400 text-right">Last Updated</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                      {[
                        { name: "LoopFlow AI", status: "In Progress", progress: "78%", team: "4", updated: "just now" },
                        { name: "Agent0 Platform", status: "Live", progress: "100%", team: "6", updated: "2h ago" },
                        { name: "TikTok Automation", status: "In Progress", progress: "45%", team: "2", updated: "yesterday" },
                        { name: "errorandco Site", status: "Review", progress: "92%", team: "3", updated: "2d ago" },
                      ].map((project, i) => (
                        <tr key={i} className="hover:bg-zinc-900/50 transition-colors">
                          <td className="py-4 font-medium">{project.name}</td>
                          <td className="py-4">
                            <Badge 
                              variant={project.status === "Live" ? "default" : "secondary"}
                              className={project.status === "Live" ? "bg-emerald-600 hover:bg-emerald-600" : "bg-zinc-700"}
                            >
                              {project.status}
                            </Badge>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden max-w-[120px]">
                                <div 
                                  className="h-full bg-indigo-500 rounded-full transition-all" 
                                  style={{ width: project.progress }}
                                />
                              </div>
                              <span className="text-xs text-zinc-400 w-9">{project.progress}</span>
                            </div>
                          </td>
                          <td className="py-4 text-zinc-400">{project.team} members</td>
                          <td className="py-4 text-right text-zinc-400">{project.updated}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
