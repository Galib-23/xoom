"use client"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex flex-col h-screen w-fit justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {
          sidebarLinks.map((link) => {
            const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
            return (
              <Link key={link.label} href={link.route}
                className={cn('flex gap-4 items-center p-4 rounded-lg justify-start hover:bg-blue-1', {
                  'bg-blue-1': isActive
                })}
              >
                <Image src={link.imgURL} alt="img" width={24} height={24} />
                <p className="text-lg font-semibold max-lg:hidden">{link.label}</p>
              </Link>
            )
          })
        }
      </div>
    </section>
  )
}

export default Sidebar