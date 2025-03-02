"use client";

import { useCallback } from "react";
import { ReactFlow, MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge, Node, Edge, ConnectionMode, MarkerType } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Layers, Database } from "lucide-react";
import MapContentNode from "./nodes/MapContentNode";

const nodeTypes = {
    mapContent: MapContentNode,
};

const initialNodes: Node[] = [
    {
        id: "1",
        type: "mapContent",
        position: { x: 100, y: 100 },
        data: {
            label: "Map Content",
            count: 44,
            subNodes: [
                { id: "flag-images", label: "Flag Images", type: "ST" },
                { id: "road-attributes", label: "Road Attributes", type: "VE" },
                { id: "adas-attributes", label: "ADAS Attributes", type: "VE", isConnected: true },
                { id: "warning-locations", label: "Warning Locations", type: "ST" },
                { id: "navigation-attributes", label: "Navigation Attributes", type: "VE", isConnected: true },
                { id: "bicycle-attributes", label: "Bicycle Attributes", type: "ST" },
                { id: "geometry-typology", label: "Geometry Typology", type: "VE", isConnected: true },
                { id: "postal-code-points", label: "Postal Code Points", type: "ST" },
                { id: "postal-area-boundaries", label: "Postal Area Boundaries", type: "ST" },
                { id: "distance-markers", label: "Distance Markers", type: "ST" },
                { id: "annotations", label: "Annotations", type: "ST" },
                { id: "fueling-stations", label: "Fueling Stations", type: "ST" },
                { id: "layer-name-1", label: "Layer name", type: "ST" },
                { id: "layer-name-2", label: "Layer name", type: "ST" },
            ],
        },
    },
    {
        id: "2",
        type: "default",
        position: { x: 400, y: 100 },
        data: {
            label: (
                <div className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2 p-2">
                        <div className="rounded-md bg-teal-500 p-1">
                            <Database className="h-4 w-4 text-white" />
                        </div>
                        <div>
                            <div className="flex items-center">
                                <span className="text-sm font-medium">Dataset Pipeline</span>
                            </div>
                            <div className="text-xs text-gray-500">Latest version</div>
                        </div>
                        <button className="ml-auto">
                            <svg className="h-4 w-4 text-gray-400" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M8 2a1 1 0 110 2 1 1 0 010-2zM8 7a1 1 0 110 2 1 1 0 010-2zM8 12a1 1 0 110 2 1 1 0 010-2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            ),
        },
        className: "border-2 border-gray-200 rounded-lg bg-white shadow-sm",
    },
    {
        id: "3",
        type: "mapContent",
        position: { x: 700, y: 100 },
        data: {
            label: "Filtered Based Map",
            count: 3,
            subNodes: [
                { id: "filtered-1", label: "Filtered Node 1", type: "ST" },
                { id: "filtered-2", label: "Filtered Node 2", type: "VE" },
                { id: "filtered-3", label: "Filtered Node 3", type: "ST" },
            ],
        },
    },
];

const initialEdges: Edge[] = [
    {
        id: "e1-2",
        source: "1",
        target: "2",
        type: "smooth",
        animated: true,
        style: { stroke: "#e2e2e2", strokeWidth: 1 },
    },
    {
        id: "e2-3",
        source: "2",
        target: "3",
        type: "smooth",
        animated: true,
        style: { stroke: "#e2e2e2", strokeWidth: 1 },
    },
];

const defaultEdgeOptions = {
    type: "smooth" as const,
    animated: true,
    style: { stroke: "#e2e2e2", strokeWidth: 1 },
};

export default function PipelineDesigner() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params: any) =>
            setEdges((eds) =>
                addEdge(
                    {
                        ...params,
                        type: "smooth",
                        animated: true,
                        style: { stroke: "#e2e2e2", strokeWidth: 1 },
                    },
                    eds
                )
            ),
        [setEdges]
    );

    return (
        <div className="h-full w-full bg-gray-50">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                defaultEdgeOptions={defaultEdgeOptions}
                connectionMode={ConnectionMode.Loose}
                fitView
                snapToGrid={true}
                snapGrid={[16, 16]}
            >
                <Background color="#e2e2e2" gap={16} size={1} />
                <Controls className="bg-white border-2 border-gray-200 rounded-lg shadow-sm" />
                <MiniMap className="bg-white border-2 border-gray-200 rounded-lg shadow-sm" />
            </ReactFlow>
        </div>
    );
}
