import { GoogleIcon } from "@/assets/google-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { signIn, useSession } from "next-auth/react";

export function FormSignIn() {

  const { data: session } = useSession()

  if (session) {
    console.log("Usuário logado:", session.user)
  }

  return (
    <div>
      <form className="space-y-4">
        <Input type="email" placeholder="Seu email" />
        <Input type="password" placeholder="Sua senha" />

        <Button className="w-full" type="submit">
          Entrar
        </Button>
      </form>

      <Separator />

      <Button
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
      // onClick={() => signIn("google")}
      >
        <GoogleIcon />
        Entrar com Google
      </Button>
    </div>
  )
}