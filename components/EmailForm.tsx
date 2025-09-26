"use client";

import React, { useTransition } from "react";
import toast from "react-hot-toast";
import { LoaderCircle, Mail, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type EmailFormCopy = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
  finePrint?: string;
};

type EmailFormProps = {
  copy: EmailFormCopy;
  includeName?: boolean;
  className?: string;
};

const EmailForm = ({ copy, includeName = true, className }: EmailFormProps) => {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const email = formData.get("email")?.toString().trim();
    const fullName = formData.get("name")?.toString().trim();

    if (!email) {
      toast.error(copy.errorMessage);
      return;
    }

    const [firstName = "", ...lastNameParts] =
      includeName && fullName ? fullName.split(/\	|\s+/).filter(Boolean) : [""];
    const lastName = lastNameParts.join(" ");

    startTransition(async () => {
      try {
        const response = await fetch("/api/resend", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, firstName, lastName }),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        formElement.reset();
        toast.success(copy.successMessage);
      } catch (error) {
        console.error("Resend request failed", error);
        toast.error(copy.errorMessage);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className={cn("w-full space-y-4", className)}>
      <div className={cn("grid gap-4", includeName ? "md:grid-cols-2" : "")}>
        {includeName && (
          <div className="space-y-2">
            <Label htmlFor="name">{copy.nameLabel}</Label>
            <div className="relative">
              <Input
                id="name"
                name="name"
                type="text"
                placeholder={copy.namePlaceholder}
                autoComplete="name"
                required={includeName}
                className="h-12 border-slate-200 bg-white/80 pr-10 text-base shadow-none focus-visible:ring-2 focus-visible:ring-[#4A90E2]/30"
              />
              <span className="pointer-events-none absolute inset-y-0 end-3 flex items-center text-slate-400">
                <User size={18} strokeWidth={2} aria-hidden="true" />
              </span>
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email">{copy.emailLabel}</Label>
          <div className="relative">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={copy.emailPlaceholder}
              autoComplete="email"
              required
              className="h-12 border-slate-200 bg-white/80 pr-10 text-base shadow-none focus-visible:ring-2 focus-visible:ring-[#4A90E2]/30"
            />
            <span className="pointer-events-none absolute inset-y-0 end-3 flex items-center text-slate-400">
              <Mail size={18} strokeWidth={2} aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 items-center">
        <Button
          type="submit"
          disabled={isPending}
          className="relative inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#4A90E2] px-8 text-base font-medium text-white transition hover:bg-[#407fc7] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 max-w-xs"
        >
          {isPending && (
            <LoaderCircle
              size={18}
              strokeWidth={2}
              className="animate-spin text-white"
              aria-hidden="true"
            />
          )}
          <span>{copy.submitLabel}</span>
        </Button>
        {copy.finePrint && (
          <p className="text-sm text-slate-500 text-center max-w-md">
            {copy.finePrint}
          </p>
        )}
      </div>
    </form>
  );
};

export type { EmailFormCopy };
export default EmailForm;
