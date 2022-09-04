const Content = ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={`  ${className}`} />
)

export { Content };