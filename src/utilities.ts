export function toDesignRatio(px: number) {
    const rem = 0.063 * px;
    return `calc(${rem}rem * 0.8)`;
}
