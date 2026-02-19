"use client";

import { Field, FieldLabel, FieldError } from "../../components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { formSchema, FormType } from "../../lib/schemas/formSchema";
import { toast } from "react-toastify";
import Image from "next/image";
import { Loader2 } from "lucide-react";

export default function ContactUs() {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: FormType) {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "wadleyalphonse@gmail.com",
          subject: values.subject,
          html: `
              <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #e0e0e0; border-radius: 8px; color: #444; line-height: 1.6;">
                <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; margin-top: 0;">New email from Chouncoune's website</h2>
                
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                  <p style="margin: 5px 0;"><strong>Name:</strong> <span style="color: #333;">${values.firstName} ${values.lastName}</span></p>
                  <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${values.email}" style="color: #3498db; text-decoration: none;">${values.email}</a></p>
                  <p style="margin: 5px 0;"><strong>Subject:</strong> <span style="font-style: italic;">${values.subject}</span></p>
                </div>

                <p style="font-weight: bold; color: #2c3e50; margin-bottom: 5px;">Message Content:</p>
                <div style="padding: 15px; border-left: 4px solid #3498db; background-color: #fff; min-height: 100px;">
                  ${values.message.replace(/\n/g, "<br>")}
                </div>

                <footer style="margin-top: 30px; font-size: 12px; color: #999; text-align: center; border-top: 1px solid #eee; padding-top: 15px;">
                  Sent via Chouncoune's Website Contact Form • ${new Date().toLocaleDateString()}
                </footer>
              </div>
          `,
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      }

      if (!response.ok) throw new Error("Failed");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-slate-50/50 py-50 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden bg-white rounded-lg shadow shadow-slate-200/60 border border-slate-100">
          {/* Form Side */}
          <div className="p-4 md:p-8 lg:p-12">
            <div className="max-w-md mx-auto lg:mx-0">
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
                Let's talk.
              </h2>
              <p className="text-slate-500 mb-10 text-lg">
                We'd love to hear from you.
              </p>

              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Controller
                    control={form.control}
                    name="firstName"
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                          First Name
                        </FieldLabel>
                        <Input
                          className="bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-blue-500/20"
                          placeholder="Your first name"
                          {...field}
                        />
                        <FieldError errors={[fieldState.error]} />
                      </Field>
                    )}
                  />
                  <Controller
                    control={form.control}
                    name="lastName"
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                          Last Name
                        </FieldLabel>
                        <Input
                          className="bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-blue-500/20"
                          placeholder="Your last name"
                          {...field}
                        />
                        <FieldError errors={[fieldState.error]} />
                      </Field>
                    )}
                  />
                </div>

                <Controller
                  control={form.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                        Email Address
                      </FieldLabel>
                      <Input
                        className="bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-blue-500/20"
                        type="email"
                        placeholder="john@example.com"
                        {...field}
                      />
                      <FieldError errors={[fieldState.error]} />
                    </Field>
                  )}
                />

                <Controller
                  control={form.control}
                  name="subject"
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                        Subject
                      </FieldLabel>
                      <Input
                        className="bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-blue-500/20"
                        type="text"
                        placeholder="Your subject"
                        {...field}
                      />
                      <FieldError errors={[fieldState.error]} />
                    </Field>
                  )}
                />

                <Controller
                  control={form.control}
                  name="message"
                  render={({ field, fieldState }) => (
                    <Field>
                      <FieldLabel className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                        Message
                      </FieldLabel>
                      <Textarea
                        rows={4}
                        className="bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-blue-500/20 resize-none"
                        placeholder="Write your message here..."
                        {...field}
                      />
                      <FieldError errors={[fieldState.error]} />
                    </Field>
                  )}
                />

                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full cursor-pointer py-6 text-lg font-semibold bg-slate-900 hover:bg-slate-800 transition-all rounded-xl shadow-lg shadow-slate-200"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Image Side - Hidden on small screens */}
          <div className="hidden lg:block relative bg-slate-100">
            <Image
              src="/contact.jpg"
              alt="Contact"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
