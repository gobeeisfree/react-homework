import Heading from '@/components/Heading';
import Nav from './Nav';

function HeaderBar() {
  return (
    <header className="flex items-center gap-12 bg-slate-200 p-5">
      <Heading />
      <Nav />
    </header>
  );
}

export default HeaderBar;
