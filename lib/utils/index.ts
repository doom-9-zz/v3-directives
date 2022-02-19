export function isFunction(x: any): boolean {
  return typeof x === 'function'
}

export function isBoolean(x: any): boolean {
  return typeof x === 'boolean'
}

export const elMapToHandlers: WeakMap<Element, () => void> = new WeakMap()
