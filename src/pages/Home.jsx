import useDocumentTitle from '@/hooks/useDocumentTitle';

function Home() {
  useDocumentTitle('Home');

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-100">
      <span className="text-4xl">이름을 누르면 사진을 볼 수 있어요!</span>
    </div>
  );
}

export default Home;
