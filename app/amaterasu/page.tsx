import dynamic from 'next/dynamic';

// Dynamically import the client component with no SSR
const AmaterasuClient = dynamic(() => import('./client'), { ssr: false });

export default function AmaterasuPage() {
  return <AmaterasuClient />;
}
