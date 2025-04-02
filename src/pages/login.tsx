// login.js
import React from 'react';
import { LoginForm } from '@/components/login-form';
import { GalleryVerticalEnd } from "lucide-react"
import { SkiperMarquee } from "@/components/ui/skiper-marquee";
import MaskedDiv from "@/components/ui/masked-div"

export default function LoginPage() {
  return (
    
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
      <LoginForm />
      </div>
    </div>
  )
}