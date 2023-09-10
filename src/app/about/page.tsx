import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My page Title',
}

//src/app/hogehoge/page.tsx -> /about のルーティング
export default function Page() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
        About Page!
    </h1>
    </>
  );
}
