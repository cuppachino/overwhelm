import cc from 'classcat';

export const Content = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={cc(['comp-content', className])} />
);
