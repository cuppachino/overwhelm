import { Content } from '@/components';

export default function About() {
  return (
    <Content className='p-8 border border-mono-2'>
      <div className='space-y-4'>
        <h1 className='font-extrabold text-5xl'>About</h1>
        <h2 className='text-mono-4'>Route: "/about"</h2>
      </div>
    </Content>
  );
}
