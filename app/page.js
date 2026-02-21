import { Button } from "@/components/ui/button";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button>Hello World</Button>
      <UserButton />
    </div>
  );
}
