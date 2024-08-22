"use client"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation"

const Sidebar = () => {
    const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex flex-col h-screen w-fit justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
        <div className="flex flex-col gap-6">
            {
                sidebarLinks.map((link) => {
                    const isActive = pathname === link.route || pathname.startsWith(link.route)
                    return (
                        <Link key={link.label} href={link.route}
                        className={cn('flex gap-4 items-center p-4 rounded-lg justify-start', {
                            'bg-blue-1': isActive
                        })}
                        >
                        {link.label}
                        </Link>
                    )
                })
            }
        </div>
    </section> 
  )
}

export default Sidebar