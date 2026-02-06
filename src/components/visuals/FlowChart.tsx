import ReactFlow, {
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    Node,
    Edge,
    MarkerType
} from 'reactflow';
import 'reactflow/dist/style.css';

interface FlowChartProps {
    initialNodes?: Node[];
    initialEdges?: Edge[];
    nodes?: Node[];
    edges?: Edge[];
    title?: string;
}

export default function FlowChart({
    initialNodes = [],
    initialEdges = [],
    nodes: propNodes,
    edges: propEdges,
    title
}: FlowChartProps) {
    const finalInitialNodes = propNodes || initialNodes;
    const finalInitialEdges = propEdges || initialEdges;

    const [nodes, , onNodesChange] = useNodesState(finalInitialNodes);
    const [edges, , onEdgesChange] = useEdgesState(finalInitialEdges);

    // Default demo data if nothing provided
    const demoNodes: Node[] = [
        { id: '1', position: { x: 250, y: 0 }, data: { label: 'Start Process' }, type: 'input' },
        { id: '2', position: { x: 250, y: 100 }, data: { label: 'Action' } },
        { id: '3', position: { x: 250, y: 200 }, data: { label: 'End' }, type: 'output' },
    ];

    const demoEdges: Edge[] = [
        { id: 'e1-2', source: '1', target: '2', markerEnd: { type: MarkerType.ArrowClosed } },
        { id: 'e2-3', source: '2', target: '3', markerEnd: { type: MarkerType.ArrowClosed } },
    ];

    const displayNodes = finalInitialNodes.length > 0 ? nodes : demoNodes;
    const displayEdges = finalInitialEdges.length > 0 ? edges : demoEdges;

    return (
        <div className="flex flex-col h-full w-full bg-white dark:bg-slate-900 overflow-hidden flowchart" data-chart="flowchart" data-chart-title={title || 'Flow Chart'}>
            {title && (
                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 font-semibold text-sm text-gray-700 dark:text-gray-300">
                    {title}
                </div>
            )}
            <div className="flex-grow min-h-[300px]">
                <ReactFlow
                    nodes={displayNodes}
                    edges={displayEdges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    fitView
                    attributionPosition="bottom-right"
                >
                    <Background color="#aaa" gap={16} />
                    <Controls />
                </ReactFlow>
            </div>
        </div>
    );
}
