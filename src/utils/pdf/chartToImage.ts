/**
 * Chart to Image Conversion Utility
 * Converts charts, diagrams, and visual elements to images for PDF/print
 */

import html2canvas from 'html2canvas';

/**
 * Convert a DOM element to an image data URL
 */
export async function convertElementToImage(element: HTMLElement): Promise<string> {
    const canvas = await html2canvas(element, {
        backgroundColor: '#ffffff',
        scale: 2, // High DPI for print quality (2x scale)
        logging: false,
        useCORS: true,
        allowTaint: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
    });

    return canvas.toDataURL('image/png');
}

/**
 * Convert all chart elements in the document to images
 */
export async function convertAllChartsInDocument(): Promise<Map<string, string>> {
    const chartMap = new Map<string, string>();

    // Find all chart elements with various selectors
    const chartSelectors = [
        '.org-chart',
        '.flowchart',
        '.diagram',
        '[data-chart]',
        '[data-chart-type]',
        '.react-flow',
        '.visualization-container'
    ];

    const charts: NodeListOf<HTMLElement> = document.querySelectorAll(chartSelectors.join(', '));

    for (let i = 0; i < charts.length; i++) {
        const chart = charts[i];
        const chartId = chart.getAttribute('data-chart-id') || 
                       chart.getAttribute('id') || 
                       `chart-${i}`;

        try {
            // Ensure the element is visible and rendered
            const originalStyle = chart.style.visibility;
            chart.style.visibility = 'visible';
            
            const imageDataUrl = await convertElementToImage(chart);
            chartMap.set(chartId, imageDataUrl);
            
            chart.style.visibility = originalStyle;
        } catch (error) {
            console.error(`Failed to convert chart ${chartId}:`, error);
        }
    }

    return chartMap;
}

/**
 * Replace a chart element with its image representation
 */
export function replaceChartWithImage(chartId: string, imageDataUrl: string): void {
    const chartElement = document.querySelector(`[data-chart-id="${chartId}"]`) as HTMLElement ||
                        document.getElementById(chartId);

    if (!chartElement) {
        console.warn(`Chart element not found: ${chartId}`);
        return;
    }

    // Create container if needed
    let container = chartElement.parentElement;
    if (!container || !container.classList.contains('chart-container')) {
        container = document.createElement('div');
        container.className = 'chart-container';
        chartElement.parentNode?.insertBefore(container, chartElement);
        container.appendChild(chartElement);
    }

    // Add image
    const img = document.createElement('img');
    img.src = imageDataUrl;
    img.className = 'chart-image print-only';
    img.alt = chartElement.getAttribute('data-chart-title') || 'Chart';
    img.style.maxWidth = '100%';
    img.style.height = 'auto';

    // Hide original chart for print
    chartElement.classList.add('chart-original');
    chartElement.classList.add('print-hide');

    container.appendChild(img);
}

/**
 * Process all charts in document for print/PDF
 */
export async function prepareChartsForPrint(): Promise<Map<string, string>> {
    const chartImages = await convertAllChartsInDocument();

    chartImages.forEach((imageDataUrl, chartId) => {
        replaceChartWithImage(chartId, imageDataUrl);
    });

    return chartImages;
}

/**
 * Restore charts to original state after print/PDF
 */
export function restoreChartsAfterPrint(): void {
    // Remove chart images
    document.querySelectorAll('.chart-image').forEach(el => el.remove());

    // Show original charts
    document.querySelectorAll('.chart-original').forEach(el => {
        el.classList.remove('chart-original');
        el.classList.remove('print-hide');
    });

    // Remove chart containers if they were created
    document.querySelectorAll('.chart-container').forEach(container => {
        const chartElement = container.querySelector('.org-chart, .flowchart, .diagram, [data-chart]');
        if (chartElement && container.parentElement) {
            container.parentElement.insertBefore(chartElement, container);
        }
        container.remove();
    });
}

/**
 * Convert a React Flow chart to image
 */
export async function convertReactFlowToImage(reactFlowElement: HTMLElement): Promise<string> {
    // Wait for React Flow to fully render
    await new Promise(resolve => setTimeout(resolve, 500));

    const canvas = await html2canvas(reactFlowElement, {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true
    });

    return canvas.toDataURL('image/png');
}

/**
 * Wait for images to load
 */
export function waitForImages(maxWait = 5000): Promise<void> {
    return new Promise((resolve, reject) => {
        const images = document.querySelectorAll('img');
        let loadedCount = 0;
        const totalImages = images.length;
        const startTime = Date.now();

        if (totalImages === 0) {
            resolve();
            return;
        }

        const checkImage = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
                resolve();
            } else if (Date.now() - startTime > maxWait) {
                // Timeout, but still resolve
                resolve();
            }
        };

        images.forEach((img) => {
            if (img.complete) {
                checkImage();
            } else {
                img.addEventListener('load', checkImage);
                img.addEventListener('error', checkImage);
            }
        });
    });
}
