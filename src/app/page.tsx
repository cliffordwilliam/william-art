import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";


const Page = () => {
  return (<><Button>click</Button><UserButton afterSignOutUrl="/" /></>);
}

export default Page;