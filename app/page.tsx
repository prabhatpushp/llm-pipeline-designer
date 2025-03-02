"use client";
import { Bell, Clock, Grid, Share, Database, Layers, Monitor, HelpCircle, Settings, FolderIcon, Asterisk } from "lucide-react";
import PipelineDesigner from "@/components/PipelineDesigner";

export default function Home() {
    return (
        <div className="flex h-screen flex-col bg-gray-50">
            {/* Top Navigation */}
            <header className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Auto OEM</span>
                        <span className="text-sm text-gray-400">/</span>
                        <span className="text-sm text-gray-600">Projects</span>
                        <span className="text-sm text-gray-400">/</span>
                        <span className="text-sm text-gray-600">Planning</span>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                        <button className="rounded-md p-2 hover:bg-gray-100">
                            <Grid className="h-5 w-5 text-gray-500" />
                        </button>
                        <button className="rounded-md p-2 hover:bg-gray-100">
                            <Clock className="h-5 w-5 text-gray-500" />
                        </button>
                        <button className="rounded-md p-2 hover:bg-gray-100">
                            <Bell className="h-5 w-5 text-gray-500" />
                        </button>
                        <button className="rounded-md p-2 hover:bg-gray-100">
                            <Share className="h-5 w-5 text-gray-500" />
                        </button>
                    </div>
                    <button className="rounded-md bg-purple-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-purple-700">Review & Deploy</button>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex flex-1">
                {/* Left Sidebar */}
                <aside className="flex w-14 flex-col justify-between border-r border-gray-200 bg-white py-4">
                    <div className="flex flex-col items-center space-y-4">
                        <button className="rounded-lg bg-purple-100 p-2">
                            <Asterisk className="h-5 w-5 text-purple-600" />
                        </button>
                        <button className="rounded-lg p-2 hover:bg-gray-100">
                            <FolderIcon className="h-5 w-5 text-gray-500" />
                        </button>
                        <button className="rounded-lg p-2 hover:bg-gray-100">
                            <Database className="h-5 w-5 text-gray-500" />
                        </button>
                        <button className="rounded-lg p-2 hover:bg-gray-100">
                            <Grid className="h-5 w-5 text-gray-500" />
                        </button>
                        <button className="rounded-lg p-2 hover:bg-gray-100">
                            <Layers className="h-5 w-5 text-gray-500" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <button className="rounded-lg p-2 hover:bg-gray-100">
                            <Monitor className="h-5 w-5 text-gray-500" />
                        </button>
                        <button className="rounded-lg p-2 hover:bg-gray-100">
                            <HelpCircle className="h-5 w-5 text-gray-500" />
                        </button>
                        <button className="rounded-lg p-2 hover:bg-gray-100">
                            <Settings className="h-5 w-5 text-gray-500" />
                        </button>
                    </div>
                </aside>

                {/* Resource Sidebar */}
                <aside className="w-64 border-r border-gray-200 bg-white">
                    <div className="p-4">
                        <h1 className="text-xl font-semibold">Drone Project</h1>
                        <div className="mt-4 flex space-x-4">
                            <button className="border-b-2 border-purple-600 px-2 py-1 text-sm font-medium text-gray-900">Resources</button>
                            <button className="px-2 py-1 text-sm font-medium text-gray-500 hover:text-gray-900">Analysis</button>
                            <button className="px-2 py-1 text-sm font-medium text-gray-500 hover:text-gray-900">Users</button>
                        </div>
                    </div>

                    {/* Used within this flow */}
                    <div className="mt-4">
                        <div className="px-4 py-2">
                            <h3 className="flex items-center text-sm font-medium text-gray-600">Used within this flow</h3>
                        </div>
                        <div className="space-y-2 px-4">
                            {[
                                { name: "Map Content", count: 44, icon: Layers, color: "blue" },
                                { name: "Filtered Based Map", count: 6, icon: Layers, color: "blue" },
                                { name: "Enhanced Map Content", count: 52, icon: Layers, color: "blue" },
                                { name: "Dataset Pipeline", count: 32, icon: Database, color: "teal" },
                            ].map((item) => (
                                <div key={item.name} className="flex items-center space-x-3 rounded-lg border border-gray-200 p-3">
                                    <div className={`rounded-md bg-${item.color}-500 p-2`}>
                                        <item.icon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                        <p className="text-sm text-gray-500">({item.count})</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Overall project */}
                    <div className="mt-4">
                        <div className="px-4 py-2">
                            <h3 className="flex items-center text-sm font-medium text-gray-600">Overall project</h3>
                        </div>
                        <div className="space-y-2 px-4">
                            {[
                                { name: "Map Content", count: 44, icon: Layers, color: "blue" },
                                { name: "Filtered Based Map", count: 6, icon: Layers, color: "blue" },
                                { name: "Enhanced Map Content", count: 52, icon: Layers, color: "blue" },
                                { name: "Content", count: 32, icon: Layers, color: "blue" },
                                { name: "Map Content", count: 32, icon: Layers, color: "blue" },
                                { name: "Dataset Pipeline", count: 32, icon: Database, color: "teal" },
                                { name: "Enhanced Pipeline", count: 68, icon: Database, color: "teal" },
                            ].map((item) => (
                                <div key={item.name + item.count} className="flex items-center space-x-3 rounded-lg border border-gray-200 p-3">
                                    <div className={`rounded-md bg-${item.color}-500 p-2`}>
                                        <item.icon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                        <p className="text-sm text-gray-500">({item.count})</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Pipeline Designer Area */}
                <main className="flex-1">
                    <div className="flex h-full flex-col">
                        <div className="flex items-center justify-between border-b border-gray-200 bg-white p-4">
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <span className="font-medium">#Developer</span>
                                <span className="text-gray-400">•</span>
                                <span>Saved 3 minutes ago</span>
                                <button className="text-purple-600 hover:text-purple-700">Save</button>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="rounded-md border border-gray-200 p-2 hover:bg-gray-50">
                                    <Grid className="h-4 w-4 text-gray-500" />
                                </button>
                                <button className="rounded-md border border-gray-200 p-2 hover:bg-gray-50">
                                    <Layers className="h-4 w-4 text-gray-500" />
                                </button>
                                <button className="rounded-md border border-gray-200 p-2 hover:bg-gray-50">
                                    <Grid className="h-4 w-4 text-gray-500" rotate={90} />
                                </button>
                            </div>
                        </div>
                        <div className="flex-1">
                            <PipelineDesigner />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
