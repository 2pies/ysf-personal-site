export type staticPage<getStaticPropsK extends () => Promise<{ props: any }>> =
  Awaited<ReturnType<getStaticPropsK>>['props']
