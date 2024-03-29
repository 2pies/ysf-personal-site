export type staticPage<
  getStaticPropsK extends (props: any) => Promise<{ props: any }>,
> = Awaited<ReturnType<getStaticPropsK>>['props']

export type valueOf<T> = T[keyof T]
