"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { Mail } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn } = useAuth(); // Extract isSignedIn from the hook

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Mail className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">MailGenius</span>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Button asChild>
              <Link href="/sign-up">Get Started</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
