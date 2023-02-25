export const cn = (...args: (string | undefined | boolean)[]) => {
  // For performance reasons, we use a simple loop instead of Array.prototype.filter
  const result = []
  for (let i = 0; i < args.length; i++) {
    const arg = args[i]
    if (arg) result.push(arg)
  }
  return result.join(' ')
}
