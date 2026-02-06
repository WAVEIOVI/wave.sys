import Section, { SectionHeader, SubSection, SubSectionHeader } from '../../../components/document-elements/Section';
import List, { ListItem } from '../../../components/document-elements/List';
import Paragraph from '../../../components/document-elements/Paragraph';

export default function Appendices() {
    return (
        <Section id="appendices">
            <SectionHeader>APPENDICES: FORMS & TEMPLATES</SectionHeader>
            <Paragraph>
                The following forms and templates are referenced throughout the People & Admin Handbook. These documents are available in the WAVE PLUS Document Repository.
            </Paragraph>

            <SubSection id="recruitment-forms">
                <SubSectionHeader>Recruitment & Onboarding</SubSectionHeader>
                <List className="text-xs">
                    <ListItem>Appendix A: Job Application Form</ListItem>
                    <ListItem>Appendix B: Interview Evaluation Scorecard</ListItem>
                    <ListItem>Appendix C: Offer Letter Template (CDD/CDI)</ListItem>
                    <ListItem>Appendix D: Onboarding Checklist (Technician/Sales)</ListItem>
                </List>
            </SubSection>

            <SubSection id="performance-forms">
                <SubSectionHeader>Performance Management</SubSectionHeader>
                <List className="text-xs">
                    <ListItem>Appendix E: Goal Setting Form (Annual)</ListItem>
                    <ListItem>Appendix F: Performance Review Form (Self-Evaluation)</ListItem>
                    <ListItem>Appendix G: Performance Review Form (Manager Assessment)</ListItem>
                    <ListItem>Appendix H: Performance Improvement Plan (PIP) Template</ListItem>
                </List>
            </SubSection>

            <SubSection id="admin-forms">
                <SubSectionHeader>Administrative & Safety</SubSectionHeader>
                <List className="text-xs">
                    <ListItem>Appendix I: Leave Request Form</ListItem>
                    <ListItem>Appendix J: Incident/Accident Report Form</ListItem>
                    <ListItem>Appendix K: Disciplinary Warning Form (Verbal/Written)</ListItem>
                    <ListItem>Appendix L: Exit Interview Questionnaire</ListItem>
                </List>
            </SubSection>
        </Section>
    );
}
