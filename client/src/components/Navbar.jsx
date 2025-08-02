"use client"

import { useState } from "react"
import { Link } from 'react-router-dom'
import { Menu, Home, LogIn, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Leaderboard", href: "/leaderboard", icon: Award },
    { name: "Login", href: "/login", icon: LogIn },
    { name: "Signup", href: "/signup", icon: Users },
  ]

  return (
    <nav className="bg-gray-950 border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/dashboard" className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Intern Portal
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                to={link.href}
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-800"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-gray-800 hover:text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-900 border-l border-gray-800 text-white p-6">
                <div className="flex flex-col space-y-4 pt-8">
                  {navLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <SheetClose asChild key={link.name}>
                        <Link
                          href={link.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                        >
                          <Icon className="h-6 w-6 text-emerald-400" />
                          {link.name}
                        </Link>
                      </SheetClose>
                    )
                  })}
                </div>
                <div className="mt-8 text-center text-gray-500 text-sm">
                  &copy; {new Date().getFullYear()} Intern Portal. All rights reserved.
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
