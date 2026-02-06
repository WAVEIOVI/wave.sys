import ReactFlow, {
    Background,
    Edge,
    Node,
    MarkerType,
    Handle,
    Position
} from 'reactflow';
import 'reactflow/dist/style.css';
import { useTranslation } from 'react-i18next';

// Custom Node for the Budget Flow
const FlowNode = ({ data }: any) => {
    const { t } = useTranslation();
    
    const typeStyles = {
        start: 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 dark:from-blue-900/20 dark:to-indigo-900/20 dark:border-blue-800',
        end: 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 dark:from-emerald-900/20 dark:to-teal-900/20 dark:border-emerald-800',
        decision: 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 dark:from-amber-900/20 dark:to-orange-900/20 dark:border-amber-800',
        default: 'bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800'
    };

    const currentStyle = typeStyles[data.type as keyof typeof typeStyles] || typeStyles.default;

    return (
        <div className={`px-5 py-4 shadow-2xl rounded-2xl border-2 transition-all duration-500 hover:scale-105 ${currentStyle} min-w-[180px]`}>
            {data.type === 'decision' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg italic whitespace-nowrap z-20">
                    {t('moneyfinance.budgetapprovalflow.edges.authlevel')}
                </div>
            )}
            <div className="flex flex-col items-center gap-1.5">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none mb-1">
                    {data.role || 'Process Step'}
                </span>
                <span className="text-sm font-black text-slate-900 dark:text-white text-center italic tracking-tight uppercase">
                    {data.label}
                </span>
                {data.description && (
                    <span className="text-[10px] text-slate-500 text-center leading-snug mt-2 italic font-medium max-w-[160px]">
                        {data.description}
                    </span>
                )}
            </div>
            <Handle type="target" position={Position.Left} className="!w-3 !h-3 !bg-slate-300 dark:!bg-slate-700 !border-2 !border-white dark:!border-slate-900" />
            <Handle type="source" position={Position.Right} className="!w-3 !h-3 !bg-slate-300 dark:!bg-slate-700 !border-2 !border-white dark:!border-slate-900" />
        </div>
    );
};

const nodeTypes = {
    budget: FlowNode,
};

const BudgetApprovalFlow = () => {
    const { t } = useTranslation();
    
    const nodes: Node[] = [
        {
            id: '1',
            type: 'budget',
            position: { x: 0, y: 150 },
            data: {
                label: t('moneyfinance.budgetapprovalflow.nodes.purchaserequisition.label'),
                role: t('moneyfinance.budgetapprovalflow.nodes.purchaserequisition.role'),
                type: 'start',
                description: t('moneyfinance.budgetapprovalflow.nodes.purchaserequisition.description')
            },
        },
        {
            id: '2',
            type: 'budget',
            position: { x: 260, y: 150 },
            data: {
                label: t('moneyfinance.budgetapprovalflow.nodes.deptapproval.label'),
                role: t('moneyfinance.budgetapprovalflow.nodes.deptapproval.role'),
                description: t('moneyfinance.budgetapprovalflow.nodes.deptapproval.description')
            },
        },
        {
            id: '3',
            type: 'budget',
            position: { x: 520, y: 150 },
            data: {
                label: t('moneyfinance.budgetapprovalflow.nodes.financevalidation.label'),
                role: t('moneyfinance.budgetapprovalflow.nodes.financevalidation.role'),
                type: 'decision',
                description: t('moneyfinance.budgetapprovalflow.nodes.financevalidation.description')
            },
        },
        {
            id: '4',
            type: 'budget',
            position: { x: 800, y: 150 },
            data: {
                label: t('moneyfinance.budgetapprovalflow.nodes.gmauthorization.label'),
                role: t('moneyfinance.budgetapprovalflow.nodes.gmauthorization.role'),
                type: 'decision',
                description: t('moneyfinance.budgetapprovalflow.nodes.gmauthorization.description')
            },
        },
        {
            id: '5',
            type: 'budget',
            position: { x: 1080, y: 150 },
            data: {
                label: t('moneyfinance.budgetapprovalflow.nodes.poissued.label'),
                role: t('moneyfinance.budgetapprovalflow.nodes.poissued.role'),
                type: 'end',
                description: t('moneyfinance.budgetapprovalflow.nodes.poissued.description')
            },
        },
    ];

    const edges: Edge[] = [
        {
            id: 'e1-2',
            source: '1',
            target: '2',
            animated: true,
            style: { stroke: '#94A3B8', strokeWidth: 2 },
            markerEnd: { type: MarkerType.ArrowClosed, color: '#94A3B8' }
        },
        {
            id: 'e2-3',
            source: '2',
            target: '3',
            label: t('moneyfinance.budgetapprovalflow.edges.over1k'),
            labelStyle: { fontSize: 10, fontWeight: 900, fill: '#64748B', fontStyle: 'italic' },
            style: { stroke: '#94A3B8', strokeWidth: 2 },
            markerEnd: { type: MarkerType.ArrowClosed, color: '#94A3B8' }
        },
        {
            id: 'e3-4',
            source: '3',
            target: '4',
            label: t('moneyfinance.budgetapprovalflow.edges.over5k'),
            labelStyle: { fontSize: 10, fontWeight: 900, fill: '#B91C1C' },
            style: { stroke: '#B91C1C', strokeWidth: 3 },
            markerEnd: { type: MarkerType.ArrowClosed, color: '#B91C1C' }
        },
        {
            id: 'e4-5',
            source: '4',
            target: '5',
            animated: true,
            style: { stroke: '#10B981', strokeWidth: 3 },
            markerEnd: { type: MarkerType.ArrowClosed, color: '#10B981' }
        },
        {
            id: 'e2-5',
            source: '2',
            target: '5',
            label: t('moneyfinance.budgetapprovalflow.edges.autopass'),
            labelStyle: { fontSize: 10, fontWeight: 900, fill: '#94A3B8' },
            style: { stroke: '#94A3B8', strokeDasharray: '8,4', strokeWidth: 1.5 },
            type: 'smoothstep',
            markerEnd: { type: MarkerType.ArrowClosed, color: '#94A3B8' }
        },
    ];

    return (
        <div className="w-full h-[400px] bg-white dark:bg-slate-950/20 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 overflow-hidden relative shadow-2xl">
            <div className="absolute top-8 left-8 z-10">
                <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-[2px] bg-primary-500"></span>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">{t('moneyfinance.budgetapprovalflow.header.subtitle')}</h4>
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">{t('moneyfinance.budgetapprovalflow.header.title')}</h3>
            </div>
            
            <div className="absolute bottom-8 right-8 z-10 flex gap-2">
                <div className="px-3 py-1 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-full text-[8px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {t('moneyfinance.budgetapprovalflow.legend.entry')}
                </div>
                <div className="px-3 py-1 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-full text-[8px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    {t('moneyfinance.budgetapprovalflow.legend.review')}
                </div>
            </div>

            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                fitView
                className="bg-transparent"
                nodesDraggable={false}
                nodesConnectable={false}
                zoomOnScroll={false}
                panOnScroll={false}
                fitViewOptions={{ padding: 0.2 }}
            >
                <Background color="#cbd5e1" gap={25} size={1} className="opacity-50" />
            </ReactFlow>
        </div>
    );
};

export default BudgetApprovalFlow;
