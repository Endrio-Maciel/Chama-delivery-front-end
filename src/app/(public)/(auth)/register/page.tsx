import { FormRegister } from "./form-register";


export default function Register() {
  return (
    <main className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          Cadastro de Restaurante
        </h2>

        <FormRegister />

        <p className="text-sm text-center text-muted-foreground">
          Já tem conta?{" "}
          <a href="/sign-in" className="underline text-primary">Entre aqui</a>
        </p>
      </div>
    </main>
  );
}