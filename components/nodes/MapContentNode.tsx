import React, { memo } from "react";
import { Handle, Position, NodeProps } from "@xyflow/react";
import { Layers } from "lucide-react";
import { BaseNode } from "@/components/nodes/base-node";
import { cn } from "@/lib/utils";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { LabeledHandle } from "@/components/nodes/labeled-handle";

interface SubNode {
    id: string;
    label: string;
    type: "ST" | "VE"; // ST for static, VE for vector
    isConnected?: boolean;
}

interface MapContentNodeProps {
    data: {
        label: string;
        count: number;
        subNodes?: SubNode[]; // Make subNodes optional
    };
    selected?: boolean;
}

function MapContentNode({ data, selected }: MapContentNodeProps) {
    const subNodes = data.subNodes || []; // Provide default empty array
    return (
        <BaseNode selected={selected} className="min-w-[280px] p-0 bg-white shadow-sm">
            <div className="flex items-center space-x-2 p-3 border-b border-gray-100">
                <div className="rounded-md bg-blue-500 p-1.5">
                    <Layers className="h-1 w-1 text-white" />
                </div>
                <div className="flex-1">
                    <div className="flex items-center">
                        <span className="text-sm font-medium">{data.label}</span>
                        <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">{data.count}</span>
                    </div>
                    <div className="text-xs text-gray-500">Latest version</div>
                </div>
                <button className="ml-auto">
                    <svg className="h-4 w-4 text-gray-400" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 2a1 1 0 110 2 1 1 0 010-2zM8 7a1 1 0 110 2 1 1 0 010-2zM8 12a1 1 0 110 2 1 1 0 010-2z" />
                    </svg>
                </button>
            </div>
            <div className="divide-y divide-gray-50">
                {subNodes.map((node) => (
                    <div key={node.id} className="relative flex items-center py-2 px-3 hover:bg-gray-50 group">
                        <div className="absolute left-0">
                            <Handle
                                type="target"
                                position={Position.Left}
                                id={`${node.id}-left`}
                                className={cn("!h-2 !w-2 !border !bg-white transition-colors", node.isConnected ? "!border-green-500" : "!border-gray-300 group-hover:!border-gray-400")}
                            />
                        </div>
                        <div className="flex items-center space-x-2 min-w-0 flex-1">
                            <span className="inline-flex px-1.5 py-0.5 text-[10px] font-medium bg-gray-100 text-gray-600 rounded">{node.type}</span>
                            <span className="text-sm text-gray-700 truncate">{node.label}</span>
                        </div>
                        <div className="absolute right-0">
                            <Handle
                                type="source"
                                position={Position.Right}
                                id={`${node.id}-right`}
                                className={cn("!h-2 !w-2 !border !bg-white transition-colors", node.isConnected ? "!border-green-500" : "!border-gray-300 group-hover:!border-gray-400")}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </BaseNode>
    );
}

export default memo(MapContentNode);
