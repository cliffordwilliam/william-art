import TitleForm from "@/components/TitleForm";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: { artId: string } }) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }
  const art = await db.art.findUnique({ where: { id: params.artId } });
  if (!art) {
    redirect("/artist/arts");
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TitleForm art={art} />
      </div>
    </>
  );
};

export default Page;
