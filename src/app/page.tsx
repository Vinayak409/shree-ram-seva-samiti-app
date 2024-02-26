import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle-button";
import { TypingAnimation } from "@/components/ui/typing-animation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24">
      <div className="scroll-m-20 border-b-2 border-green-400 pb-3 text-2xl font-semibold tracking-tight first:mt-0 flex flex-wrap py-1">
        <TypingAnimation />
      </div>

      {/* <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Welcome to Shree Ram seva samiti portal
      </h1> */}

      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      <div className="w-9/12 flex-col justify-center items-center space-y-14 ">
        <div>
          <Button
            variant="outline"
            className="h-20 w-full border-solid border-2 border-yellow-500 text-4xl font-semibold"
          >
            Member
          </Button>
        </div>
        <div>
          <Button
            variant="outline"
            size="lg"
            className="h-20 w-full border-solid border-2 border-yellow-500 text-4xl font-semibold"
          >
            Admin
          </Button>
        </div>
      </div>
    </main>
  );
}
