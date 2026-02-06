import Section, { SectionHeader } from '../../../components/document-elements/Section';
import Paragraph from '../../../components/document-elements/Paragraph';

export default function Acknowledgment() {
    return (
        <Section id="section-10">
            <SectionHeader>SECTION 10: ACKNOWLEDGMENT</SectionHeader>
            <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm my-12">
                <h4 className="font-bold text-lg mb-6 text-center border-b border-slate-100 dark:border-slate-800 pb-4">Employee Handbook Acknowledgment</h4>
                <Paragraph className="text-sm">I acknowledge that I have received and read the SS+ Employee Handbook (Version 1.0, January 2025).</Paragraph>
                <div className="space-y-4 my-6">
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300">I understand that:</p>
                    {[
                        'This handbook describes important information about SS+, and I should consult my manager or Admin Manager if I have questions.',
                        'This handbook is not a contract of employment. My employment relationship with SS+ is "at-will" with protections under Tunisia labor code, meaning either the company or I can terminate the relationship at any time, with proper notice.',
                        'The policies, benefits, and procedures in this handbook are not conditions of employment.',
                        'SS+ may modify, supplement, rescind, or revise any policies, benefits, or procedures described in this handbook at any time, with or without prior notice.',
                        'I am responsible for reading, understanding, and complying with all policies in this handbook and any revisions made to it.',
                        'I am responsible for protecting confidential SS+ information during and after my employment.',
                        'I will follow all safety rules and procedures, wear required PPE, and report hazards immediately.',
                        'Violation of company policies can result in discipline up to and including termination.',
                        'I have received information about the grievance procedure and know how to raise concerns.'
                    ].map((point, i) => (
                        <div key={i} className="flex gap-3 items-start">
                            <div className="mt-0.5 shrink-0 text-primary-600 dark:text-primary-400 font-bold text-xs">✓</div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mb-0 leading-tight">{point}</p>
                        </div>
                    ))}
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-center mb-8">
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-0">
                        I acknowledge that I have read and understand the above, and I agree to comply with the policies and procedures outlined in this handbook.
                    </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-8">
                    <div className="space-y-1">
                        <div className="h-8 border-b border-slate-300 dark:border-slate-700" />
                        <label className="text-[10px] uppercase font-bold text-slate-400">Employee Signature</label>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="flex-1 space-y-1">
                            <div className="h-8 border-b border-slate-300 dark:border-slate-700" />
                            <label className="text-[10px] uppercase font-bold text-slate-400">Employee Printed Name</label>
                        </div>
                        <div className="w-32 space-y-1">
                            <div className="h-8 border-b border-slate-300 dark:border-slate-700" />
                            <label className="text-[10px] uppercase font-bold text-slate-400">ID / Position</label>
                        </div>
                    </div>
                    <div className="w-1/2 space-y-1">
                        <div className="h-8 border-b border-slate-300 dark:border-slate-700" />
                        <label className="text-[10px] uppercase font-bold text-slate-400">Date</label>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-[11px] text-slate-500 italic mb-0">Please sign and return this acknowledgment page to Admin Manager. Keep the rest of the handbook for your reference.</p>
                </div>
            </div>

            <div className="text-center pb-12 max-w-2xl mx-auto">
                <h3 className="text-2xl font-black text-primary-600 mb-4">WELCOME TO SS+!</h3>
                <Paragraph className="text-center mb-4">
                    We're excited to have you on our team. Together, we'll continue to provide exceptional fire safety and workplace safety solutions to our customers across Tunisia.
                </Paragraph>
                <Paragraph className="text-center mb-6">
                    If you have any questions about anything in this handbook, please don't hesitate to ask. Your success is our success!
                </Paragraph>
                <p className="font-bold text-slate-900 dark:text-white mb-2">Stay safe, work hard, and let's achieve great things together!</p>
                <p className="text-sm text-slate-500 italic">— The SS+ Management Team</p>
            </div>
        </Section>
    );
}
