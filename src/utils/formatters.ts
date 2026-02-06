
/**
 * Formats a number as Tunisian Dinar (TND)
 * @param amount The amount to format
 * @param includeSymbol Whether to include the 'TND' suffix
 * @returns Formatted currency string
 */
export const formatCurrency = (amount: number, includeSymbol: boolean = true): string => {
    const formatted = new Intl.NumberFormat('fr-TN', {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
    }).format(amount);

    return includeSymbol ? `${formatted} TND` : formatted;
};

/**
 * Formats a number with comma separators for thousands
 * @param num The number to format
 * @returns Formatted number string
 */
export const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('fr-TN').format(num);
};

/**
 * Formats a number as a percentage
 * @param value The value to format
 * @param decimals Number of decimal places
 * @returns Formatted percentage string
 */
export const formatPercent = (value: number, decimals: number = 2): string => {
    return `${value.toFixed(decimals)}%`;
};
