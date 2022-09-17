export function Button({
  label,
  className,
  ...props
}: { label: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className='bg-blue-600 rounded-lg p-2.5 text-mono-0 btn' {...props}>
      {label}
    </button>
  );
}
