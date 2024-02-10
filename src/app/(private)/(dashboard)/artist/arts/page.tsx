import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <Link href={"/artist/create"}>
        <Button>New art</Button>
      </Link>
    </>
  );
};

export default Page;
