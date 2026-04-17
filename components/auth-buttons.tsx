"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react"; // If using NextAuth.js
// OR import your specific auth provider's signIn/signOut functions

export function SignInButton() {
  return (
    <Button
      onClick={() => signIn()}
      className="btn-primary"
    >
      Sign In
    </Button>
  );
}

export function SignOutButton() {
  return (
    <Button
      onClick={() => signOut()}
      variant="outline"
    >
      Sign Out
    </Button>
  );
}