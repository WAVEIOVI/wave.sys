import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface AuthorityLevel {
    label: string;
    description: string;
    color: string;
    bg: string;
    border: string;
}

const PaymentAuthorizationMatrix = () => {
    const { t } = useTranslation();

    const levels: Record<string, AuthorityLevel> = {
        unlimited: {
            label: t('paymentAuthorizationMatrix.levels.unlimited.label'),
            description: t('paymentAuthorizationMatrix.levels.unlimited.description'),
            color: 'text-red-600 dark:text-red-400',
            bg: 'bg-red-50 dark:bg-red-900/20',
            border: 'border-red-100 dark:border-red-900/40'
        },
        high: {
            label: t('paymentAuthorizationMatrix.levels.high.label'),
            description: t('paymentAuthorizationMatrix.levels.high.description'),
            color: 'text-amber-600 dark:text-amber-400',
            bg: 'bg-amber-50 dark:bg-amber-900/20',
            border: 'border-amber-100 dark:border-amber-900/40'
        },
        mid: {
            label: t('paymentAuthorizationMatrix.levels.mid.label'),
            description: t('paymentAuthorizationMatrix.levels.mid.description'),
            color: 'text-blue-600 dark:text-blue-400',
            bg: 'bg-blue-50 dark:bg-blue-900/20',
            border: 'border-blue-100 dark:border-blue-900/40'
        },
        low: {
            label: t('paymentAuthorizationMatrix.levels.low.label'),
            description: t('paymentAuthorizationMatrix.levels.low.description'),
            color: 'text-emerald-600 dark:text-emerald-400',
            bg: 'bg-emerald-50 dark:bg-emerald-900/20',
            border: 'border-emerald-100 dark:border-emerald-900/40'
        },
        none: {
            label: t('paymentAuthorizationMatrix.levels.none.label'),
            description: t('paymentAuthorizationMatrix.levels.none.description'),
            color: 'text-slate-400 dark:text-slate-500',
            bg: 'bg-slate-50 dark:bg-slate-900/50',
            border: 'border-slate-100 dark:border-slate-800'
        }
    };

    interface MatrixCellProps {
        value: string;
        level: keyof typeof levels;
    }

    const MatrixCell = ({ value, level }: MatrixCellProps) => {
        const [isHovered, setIsHovered] = useState(false);
        const config = levels[level];

        return (
            <div
                className={`relative p-3 h-full flex flex-col justify-center border-b border-r transition-all duration-300 ${config.bg} ${config.border} group cursor-help`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <span className={`text-[10px] font-black uppercase tracking-tighter ${config.color} italic leading-none`}>
                    {value}
                </span>

                {isHovered && (
                    <div className="absolute z-[100] left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-3 bg-slate-900 text-white rounded-xl shadow-2xl border border-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-200">
                        <div className="text-[8px] font-black text-secondary-500 uppercase tracking-widest mb-1">{config.label}</div>
                        <div className="text-[10px] font-medium leading-tight opacity-90 italic">
                            {config.description}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const roles = [
        { name: 'Managers (Karim/Najla)', id: 'GM' },
        { name: 'Sales Resp. (Najla)', id: 'SR' },
        { name: 'Admin & Finance Resp.', id: 'AF' },
        { name: 'Operations Resp.', id: 'OR' },
        { name: 'Team Leaders', id: 'TL' },
        { name: 'Sales Representatives', id: 'S' },
        { name: 'Technicians', id: 'T' },
    ];

    const categories = [
        'Purchase Orders',
        'Expense Approval',
        'Payment Auth',
        'Discount Authority'
    ];

    const data: Record<string, Record<string, { value: string, level: keyof typeof levels }>> = {
        'GM': {
            'Purchase Orders': { value: 'Unlimited', level: 'unlimited' },
            'Expense Approval': { value: 'Unlimited', level: 'unlimited' },
            'Payment Auth': { value: 'Unlimited', level: 'unlimited' },
            'Discount Authority': { value: 'Unlimited', level: 'unlimited' },
        },
        'SR': {
            'Purchase Orders': { value: 'Unlimited', level: 'unlimited' },
            'Expense Approval': { value: 'Unlimited', level: 'unlimited' },
            'Payment Auth': { value: 'Per Policy', level: 'high' },
            'Discount Authority': { value: 'Up to 20%', level: 'high' },
        },
        'AF': {
            'Purchase Orders': { value: 'Per PO', level: 'mid' },
            'Expense Approval': { value: '< 2,000 TND', level: 'mid' },
            'Payment Auth': { value: 'Per PO', level: 'mid' },
            'Discount Authority': { value: 'None', level: 'none' },
        },
        'OR': {
            'Purchase Orders': { value: '< 1,000 TND', level: 'mid' },
            'Expense Approval': { value: '< 1,000 TND', level: 'mid' },
            'Payment Auth': { value: '< 1,000 TND', level: 'mid' },
            'Discount Authority': { value: 'Up to 15%', level: 'mid' },
        },
        'TL': {
            'Purchase Orders': { value: '< 500 TND', level: 'low' },
            'Expense Approval': { value: '< 500 TND', level: 'low' },
            'Payment Auth': { value: '< 500 TND', level: 'low' },
            'Discount Authority': { value: 'None', level: 'none' },
        },
        'S': {
            'Purchase Orders': { value: 'None', level: 'none' },
            'Expense Approval': { value: 'None', level: 'none' },
            'Payment Auth': { value: 'None', level: 'none' },
            'Discount Authority': { value: 'Up to 15%', level: 'mid' },
        },
        'T': {
            'Purchase Orders': { value: '< 100 TND', level: 'low' },
            'Expense Approval': { value: '< 100 TND', level: 'low' },
            'Payment Auth': { value: 'None', level: 'none' },
            'Discount Authority': { value: 'None', level: 'none' },
        }
    };

    return (
        <div className="my-10 overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-slate-900">
            <div className="grid grid-cols-[200px_repeat(4,1fr)]">
                {/* Header Row */}
                <div className="p-4 bg-slate-100 dark:bg-slate-800 border-b border-r border-slate-200 dark:border-slate-700 flex items-center justify-center">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Position</span>
                </div>
                {categories.map((cat, i) => (
                    <div key={i} className="p-4 bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-center flex flex-col justify-center gap-1">
                        <span className="text-[10px] font-black text-slate-950 dark:text-white uppercase tracking-tighter italic leading-none">{cat}</span>
                        <div className="h-0.5 w-8 bg-primary-500 mx-auto"></div>
                    </div>
                ))}

                {/* Data Rows */}
                {roles.map((role, i) => (
                    <React.Fragment key={role.id}>
                        <div className={`p-4 border-b border-r border-slate-200 dark:border-slate-800 flex items-center ${i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/50 dark:bg-slate-950/20'}`}>
                            <span className="text-[11px] font-black text-slate-900 dark:text-slate-100 italic">{role.name}</span>
                        </div>
                        {categories.map((cat, j) => (
                            <MatrixCell
                                key={j}
                                value={data[role.id][cat].value}
                                level={data[role.id][cat].level}
                            />
                        ))}
                    </React.Fragment>
                ))}
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-950/40 flex flex-wrap gap-4 justify-center items-center border-t border-slate-200 dark:border-slate-800">
                {Object.entries(levels).map(([key, level]) => (
                    <div key={key} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-sm ${level.bg} ${level.border} border`}></div>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{level.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PaymentAuthorizationMatrix;
