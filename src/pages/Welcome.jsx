import { Link } from 'react-router-dom';
import useDocumentTitle from '@/hooks/useDocumentTitle';

function Welcome() {
  useDocumentTitle('Welcome');
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5 bg-slate-100">
      <span className="text-6xl font-semibold text-slate-600">Welcome</span>
      <Link
        to="/home"
        className="rounded bg-slate-300 p-2 hover:bg-slate-500 hover:text-white"
      >
        <h2>쿠몽몽 보러가기😊</h2>
      </Link>
    </div>
  );
}

export default Welcome;
