import { Content } from '@/components';

export default function Home() {
  return (
    <Content className='p-8 border border-mono-2'>
      <div className='space-y-4'>
        <h1 className='font-extrabold text-5xl'>Welcome</h1>
        <h2 className='text-mono-4'>Route: "/"</h2>
      </div>
    </Content>
  );
}
