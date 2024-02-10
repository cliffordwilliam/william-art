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

const formSchema = z.object({
  title: z.string().min(2).max(50),
});

import { Art } from "@prisma/client";
import axios from "axios";
import toast from "react-hot-toast";
import { Pencil } from "lucide-react";
import { useState } from "react";

const TitleForm = ({ art }: { art: Art }) => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => setIsEditing((current) => !current);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: art,
  });
  const { isSubmitting, isValid } = form.formState;
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await axios.patch(`/api/arts/${art.id}`, values);
      toast.success("Title successfully edited!");
    } catch (error) {
      toast.error("Error editing title. Please try again later.");
    }
  }
  return (
    // card
    <div className="border bg-slate-100 rounded-md p-4">
      {/* title + edit button (cancel / edit) */}
      <div className="flex items-center justify-between">
        <span className="font-medium">Art title</span>
        <Button onClick={toggleEditing} variant={"ghost"}>
          {isEditing && <span>Cancel</span>}
          {!isEditing && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              <span>Edit title</span>
            </>
          )}
        </Button>
      </div>
      {/* val / form */}
      {!isEditing && <span>{art.title}</span>}
      {isEditing && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Blue Ice'"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    What's your new artwork name?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isSubmitting || !isValid} type="submit">
              Submit
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};
export default TitleForm;
