import ReactFlow, {
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    Node,
    Edge
} from 'reactflow';
import 'reactflow/dist/style.css';

interface ProcessDiagramProps {
    initialNodes?: Node[];
    initialEdges?: Edge[];
}

export default function ProcessDiagram({ initialNodes = [], initialEdges = [] }: ProcessDiagramProps) {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);

    // Default demo for a simplified swimlane/process
    const demoNodes: Node[] = [
        // Lanes (using groups)
        { id: 'lane1', position: { x: 0, y: 0 }, data: { label: 'Department A' }, style: { width: 600, height: 200, backgroundColor: 'rgba(240, 240, 240, 0.5)', border: '1px dashed #ccc' }, type: 'group' },
        { id: 'lane2', position: { x: 0, y: 220 }, data: { label: 'Department B' }, style: { width: 600, height: 200, backgroundColor: 'rgba(240, 240, 240, 0.5)', border: '1px dashed #ccc' }, type: 'group' },

        // Nodes inside lanes
        { id: '1', position: { x: 50, y: 50 }, data: { label: 'Task 1' }, parentNode: 'lane1', extent: 'parent' },
        { id: '2', position: { x: 250, y: 50 }, data: { label: 'Task 2' }, parentNode: 'lane1', extent: 'parent' },
        { id: '3', position: { x: 250, y: 50 }, data: { label: 'Task 3' }, parentNode: 'lane2', extent: 'parent' },
        { id: '4', position: { x: 450, y: 50 }, data: { label: 'Task 4' }, parentNode: 'lane2', extent: 'parent' },
    ];

    const demoEdges: Edge[] = [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3', animated: true },
        { id: 'e3-4', source: '3', target: '4', animated: true },
    ];

    return (
        <div className="h-[600px] w-full border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden my-8 bg-gray-50 dark:bg-gray-900 diagram" data-chart="process-diagram">
            <ReactFlow
                nodes={initialNodes.length ? nodes : demoNodes}
                edges={initialEdges.length ? edges : demoEdges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
            >
                <Background color="#aaa" gap={16} />
                <Controls />
            </ReactFlow>
        </div>
    );
}
