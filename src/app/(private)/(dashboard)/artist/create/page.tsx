"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

const formSchema = z.object({
  title: z.string().min(2).max(50), // change
});

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "", // change
    },
  });
  const { isSubmitting, isValid } = form.formState;
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await axios.post("/api/art", values);
      console.log(values);
      toast.success("Artwork successfully submitted!");
    } catch (error) {
      console.log(error);
      toast.error("Error submitting artwork. Please try again later.");
    }
  }
  return (
    <div className="max-w-5xl mx-auto p-6 h-full">
      <h1 className="text-2xl">Name your art</h1>
      <p className="text-sm text-slate-600 mb-8">
        Create your art by naming it, you can edit this name and other details
        after this.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Art title</FormLabel>
                <FormControl>
                  <Input
                    disabled={isSubmitting}
                    placeholder="e.g. 'Blue Ice'"
                    {...field}
                  />
                </FormControl>
                <FormDescription>What's your artwork name?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-x-2">
            <Button disabled={isSubmitting || !isValid} type="submit">
              Submit
            </Button>
            <Link href={"/artist/create"}>
              <Button variant={"ghost"}>Cancel</Button>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Page;
