import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white p-6">
      <nav>
        <ul>
          <li>
            <Link href="/dashboard" className="text-blue-600 hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/dashboard/analytics" className="text-blue-600 hover:underline">
              Analytics
            </Link>
          </li>
          <li>
            <Link href="/dashboard/profile" className="text-blue-600 hover:underline">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings" className="text-blue-600 hover:underline">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;