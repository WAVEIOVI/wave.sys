# PDF & Print Testing Checklist
## SS PLUS Management System

This document provides a comprehensive testing checklist for verifying PDF and print functionality across all 7 documents in the SS PLUS Management System.

---

## 1. Print Testing Checklist

### 1.1 Dark Mode Override Test
- [ ] Open any document in browser with dark mode enabled
- [ ] Click the Print button (Printer icon)
- [ ] Verify the print preview shows **white background** (not black)
- [ ] Verify text appears **black** (not white)
- [ ] Verify all charts have white backgrounds
- [ ] Verify tables have proper formatting with light backgrounds

### 1.2 Chart/Diagram Test
- [ ] Open a document containing organization charts (e.g., Company Manual → Organizational Structure)
- [ ] Open a document containing flowcharts (e.g., Money & Finance → Budget Approval Flow)
- [ ] Open a document containing process diagrams (e.g., Service Delivery → Service Request Process)
- [ ] Open a document containing timelines (e.g., Handbook → Company Timeline if exists)
- [ ] For each document:
  - [ ] Open print preview
  - [ ] Verify charts display as images, not code/markdown
  - [ ] Verify chart text is readable
  - [ ] Verify chart colors are preserved (where appropriate)

### 1.3 Table Formatting Test
- [ ] Open a document with tables (e.g., People Admin → Attendance & Leave)
- [ ] Print the document
- [ ] Verify:
  - [ ] Table headers have light background
  - [ ] Table borders are visible
  - [ ] Text is readable (black on white)
  - [ ] Alternating row colors (if any) print correctly
  - [ ] Table doesn't span page breaks incorrectly

### 1.4 Layout & Page Breaks Test
- [ ] Print a long document (e.g., Company Manual with 10+ sections)
- [ ] Verify:
  - [ ] Section titles stay with their content
  - [ ] Tables don't break across pages inappropriately
  - [ ] Charts don't break across pages
  - [ ] Headers and footers appear on each page
  - [ ] Page numbers are correct

### 1.5 Header/Footer Test
- [ ] Print any document with multiple pages
- [ ] Verify on each page:
  - [ ] Header shows "SS PLUS" logo on left
  - [ ] Header shows document title on right
  - [ ] Footer shows "SS PLUS Management System" on left
  - [ ] Footer shows page number (e.g., "Page 2 of 5")
  - [ ] Footer shows "WAVE IO - M. Anis HWAS" copyright

### 1.6 Navigation Elements Hidden Test
- [ ] Print any document
- [ ] Verify the following are hidden:
  - [ ] Navigation sidebar (left)
  - [ ] Table of Contents sidebar (right)
  - [ ] Theme toggle button
  - [ ] Share button
  - [ ] Search bar
  - [ ] Breadcrumb navigation
  - [ ] Action buttons (Print, Download, Share)
  - [ ] Header/Footer navigation menus

---

## 2. PDF Generation Testing Checklist

### 2.1 Cover Page Test
- [ ] Click Download PDF button on any document
- [ ] Open the downloaded PDF
- [ ] Verify:
  - [ ] Cover page exists as first page
  - [ ] SS PLUS logo appears at top
  - [ ] Document title is prominent (large font)
  - [ ] Category/subtitle is visible
  - [ ] "Generated: [date]" appears
  - [ ] "Version: 1.0" appears
  - [ ] WAVE IO footer appears at bottom
  - [ ] "Lead Consultant: M. Anis HWAS" appears

### 2.2 Content Pages Test
- [ ] Verify content pages (after cover):
  - [ ] Headers on each page show "SS PLUS" and document title
  - [ ] Footers show page numbers correctly
  - [ ] Content is properly formatted
  - [ ] Section titles are styled correctly
  - [ ] Lists are properly formatted with bullets
  - [ ] Tables render correctly

### 2.3 Back Page Test
- [ ] Verify the last page of the PDF:
  - [ ] Back page exists
  - [ ] "Document Information" title appears
  - [ ] Contact information is present
  - [ ] Document control disclaimer appears
  - [ ] Copyright notice appears
  - [ ] SS PLUS and WAVE IO logos appear

### 2.4 All 7 Documents PDF Test
Generate and verify PDF for each document:
- [ ] **Company Manual** (`company-manual`)
- [ ] **Handbook** (`handbook`)
- [ ] **Money & Finance** (`money-finance`)
- [ ] **People Admin** (`people-admin`)
- [ ] **Products & Inventory** (`products-inventory`)
- [ ] **Sales & Customer** (`sales-customer`)
- [ ] **Service Delivery** (`service-delivery`)

For each document:
- [ ] PDF downloads successfully
- [ ] Cover page has correct title and category
- [ ] All sections are present
- [ ] Back page appears
- [ ] File size is reasonable (<5MB for most documents)

---

## 3. Cross-Document Consistency Test

### 3.1 Visual Consistency
- [ ] Compare cover pages of all 7 PDFs:
  - [ ] Logo placement is consistent
  - [ ] Title font size/style is consistent
  - [ ] Footer content is consistent
- [ ] Compare back pages of all 7 PDFs:
  - [ ] Layout is identical
  - [ ] Contact information format is consistent
  - [ ] Disclaimer text is identical

### 3.2 Typography Consistency
- [ ] Check all PDFs for:
  - [ ] Consistent heading styles
  - [ ] Consistent paragraph spacing
  - [ ] Consistent list formatting
  - [ ] Consistent font families

### 3.3 Color Consistency
- [ ] Verify brand colors:
  - [ ] Primary red (#DC143C) used for headings
  - [ ] Dark gray for body text
  - [ ] Light gray for secondary text
  - [ ] White backgrounds throughout

---

## 4. Browser Compatibility Test

Test in the following browsers:
- [ ] Google Chrome (latest)
- [ ] Mozilla Firefox (latest)
- [ ] Microsoft Edge (latest)
- [ ] Safari (latest, if available)

For each browser:
- [ ] Print preview works correctly
- [ ] PDF download works correctly
- [ ] Print dialog opens properly
- [ ] No console errors

---

## 5. Mobile/Tablet Test

- [ ] Test on tablet (iPad/Android):
  - [ ] Print button is accessible
  - [ ] Print preview displays correctly
  - [ ] PDF download works
- [ ] Test on mobile phone:
  - [ ] Print button is accessible
  - [ ] UI doesn't break when accessing print options

---

## 6. Performance Test

- [ ] Measure PDF generation time for each document:
  - [ ] Company Manual: < 5 seconds
  - [ ] Handbook: < 5 seconds
  - [ ] Money & Finance: < 5 seconds
  - [ ] People Admin: < 5 seconds
  - [ ] Products & Inventory: < 5 seconds
  - [ ] Sales & Customer: < 5 seconds
  - [ ] Service Delivery: < 5 seconds

- [ ] Measure print preparation time:
  - [ ] Chart conversion: < 2 seconds per chart
  - [ ] Theme override: < 1 second

---

## 7. Error Handling Test

- [ ] Test with no internet connection:
  - [ ] Print still works
  - [ ] PDF download still works
- [ ] Test with large documents:
  - [ ] PDF generation doesn't crash
  - [ ] Memory usage is reasonable
- [ ] Test with empty content:
  - [ ] PDF generates with placeholder content
  - [ ] Print shows appropriate message

---

## 8. Accessibility Test

- [ ] Verify print styles work with system high contrast mode
- [ ] Verify text remains readable when printing
- [ ] Verify no loss of important information in print/PDF

---

## 9. Known Issues & Workarounds

### Issue: Charts not converting to images
**Symptom:** Charts appear as blank spaces or code in print/PDF
**Solution:** 
1. Ensure html2canvas is installed: `npm install html2canvas`
2. Check browser console for errors
3. Ensure charts are fully rendered before print

### Issue: Dark mode persists in print
**Symptom:** Print preview shows black background
**Solution:**
1. Clear browser cache
2. Disable browser extensions that modify printing
3. Use the enhanced print preparation (automatic)

### Issue: PDF generation fails
**Symptom:** PDF download button shows error or nothing happens
**Solution:**
1. Check @react-pdf/renderer is installed
2. Verify Image component src paths are correct
3. Check browser console for React rendering errors

---

## 10. Test Results Summary

| Document | Print OK | PDF OK | Cover Page OK | Back Page OK | Notes |
|----------|----------|--------|---------------|--------------|-------|
| Company Manual | [ ] | [ ] | [ ] | [ ] | |
| Handbook | [ ] | [ ] | [ ] | [ ] | |
| Money & Finance | [ ] | [ ] | [ ] | [ ] | |
| People Admin | [ ] | [ ] | [ ] | [ ] | |
| Products & Inventory | [ ] | [ ] | [ ] | [ ] | |
| Sales & Customer | [ ] | [ ] | [ ] | [ ] | |
| Service Delivery | [ ] | [ ] | [ ] | [ ] | |

---

## 11. Testing Sign-off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Developer | | | |
| QA Tester | | | |
| Project Manager | | | |

---

**Document Version:** 1.0  
**Last Updated:** 2024  
**Maintained By:** WAVE IO Development Team
