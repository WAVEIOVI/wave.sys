import ReactFlow, {
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    Node,
    Edge
} from 'reactflow';
import 'reactflow/dist/style.css';

interface OrganizationChartProps {
    data?: any;
    initialNodes?: Node[];
    initialEdges?: Edge[];
    nodes?: Node[];
    edges?: Edge[];
    title?: string;
}

export default function OrganizationChart({
    initialNodes = [],
    initialEdges = [],
    nodes: propNodes,
    edges: propEdges,
    title
}: OrganizationChartProps) {
    const finalInitialNodes = propNodes || initialNodes;
    const finalInitialEdges = propEdges || initialEdges;

    const [currentNodes, , onNodesChangeHandler] = useNodesState(finalInitialNodes);
    const [currentEdges, , onEdgesChangeHandler] = useEdgesState(finalInitialEdges);

    const displayNodes = currentNodes.length > 0 ? currentNodes : [];
    const displayEdges = currentEdges.length > 0 ? currentEdges : [];

    return (
        <div className="flex flex-col h-full w-full org-chart" data-chart="org-chart" data-chart-title={title || 'Organization Chart'}>
            {title && (
                <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 font-semibold text-sm text-gray-700 dark:text-gray-300">
                    {title}
                </div>
            )}
            <div className="flex-grow min-h-[300px]">
                <ReactFlow
                    nodes={displayNodes}
                    edges={displayEdges}
                    onNodesChange={onNodesChangeHandler}
                    onEdgesChange={onEdgesChangeHandler}
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
