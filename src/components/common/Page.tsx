import { Content } from './Content';

type PageProps = {
  title?: string;
  subtitle?: string;
} & React.ComponentProps<typeof Content>;

export function Page({ children, title, subtitle, ...props }: PageProps) {
  return (
    <Content {...props}>
      <div className='p-8 space-y-4 border border-mono-2'>
        <h1 className='text-mono-6 text-5xl font-extrabold'>{title}</h1>
        <h2 className='text-mono-4'>{subtitle}</h2>
      </div>
      {children}
      {/* <Content className='flex flex-col p-8 h-full'>
        {children}
      </Content> */}
    </Content>
  );
}
