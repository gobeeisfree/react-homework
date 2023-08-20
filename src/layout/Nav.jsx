import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <ul className="flex gap-4 text-base">
      <li>
        <NavLink
          to="/home/cuchi"
          className={({ isActive }) =>
            isActive ? 'font-bold text-slate-900' : ''
          }
        >
          쿠치
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/home/mongsil"
          className={({ isActive }) =>
            isActive ? 'font-bold text-slate-900' : ''
          }
        >
          몽실
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/home/monggun"
          className={({ isActive }) =>
            isActive ? 'font-bold text-slate-900' : ''
          }
        >
          몽군
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
