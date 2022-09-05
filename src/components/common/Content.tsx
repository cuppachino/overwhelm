import cc from 'classcat';

const Content = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={cc(['comp-content', className])} />
);

export { Content };
