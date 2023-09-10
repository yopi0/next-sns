import { Metadata } from 'next';
import TimeLine from './components/TimeLine';

export const metadata: Metadata = {
  title: 'My page Title',
}

export default function Page() {
  return (
    <>
    <div>
      <TimeLine />
    </div>
    </>
  );
}
    