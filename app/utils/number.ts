export function round(value: number | string | null | undefined, digits: number = 2) {
  if (value === null) return null
  if (value === undefined) return undefined
  return parseFloat(value).toFixed(digits)
}

export function numberSeparator(value?: number, separator: string = ',') {
  if (value === null) return null
  if (value === undefined) return undefined
  return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, separator);
}