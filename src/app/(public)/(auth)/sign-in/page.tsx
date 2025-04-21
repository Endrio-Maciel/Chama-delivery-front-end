import { FormSignIn } from "./form-sign-in";

export default function Auth() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-sm space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          Entrar ou Cadastrar Restaurante
        </h2>
        <FormSignIn />

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
