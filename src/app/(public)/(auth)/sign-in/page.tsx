import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/assets/google-icon"
// import { signIn, useSession } from "next-auth/react";

export default function Auth() {


  // // const { data: session } = useSession()

  // if (session) {
  //   console.log("Usuário logado:", session.user)
  // }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-sm space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          Entrar ou Cadastrar Restaurante
        </h2>

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

        <p className="text-sm text-center text-muted-foreground">
          Não tem uma conta?{" "}
          <a href="/register" className="underline text-primary">
            Cadastre-se aqui
          </a>
        </p>
      </div>
    </main>
  );
}
