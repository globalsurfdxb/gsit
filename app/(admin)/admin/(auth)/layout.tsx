import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import ClientSideLink from "../client-side-link";
import AdminNavbar from "@/app/components/admin/AdminNavbar/Index";
import Image from "next/image";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white flex flex-col h-screen overflow-y-auto shadow-[1px_0_0_0_rgba(0,0,0,0.04)]">
        <div className="flex-1">
          <Link href="/admin" className="cursor-pointer">
            <div className="px-4 flex flex-col gap-2 py-6">
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/images/logo.svg"
                  alt="Logo"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </Link>

          <nav className="space-y-1 px-2">
            <AdminNavbar />
          </nav>
        </div>

        {/* Logout */}
        <div className="px-2 py-4">
          <ClientSideLink
            href="/admin/logout"
            name="Logout"
            icon={<ArrowRightOnRectangleIcon className="h-5 w-5" />}
            className="text-red-600 rounded-[10px]"
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden pb-5">
        {/* Scrollable Content */}
        <div className="h-full overflow-y-auto mx-8 pt-8 bg-gray-50">
          {children}
        </div>
      </main>
    </div>
  );
}
