'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleLogin = () => {
    //  aqui depois entra o login com Google
    router.push('/sign-in')
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">🍔 Chama Delivery</h1>
      <p className="text-lg text-gray-100 max-w-md mb-8">
        Uma plataforma simples e poderosa para que donos de lanchonetes gerenciem cardápio, recebam pedidos em tempo real e compartilhem sua loja online com clientes!
      </p>

      <Button onClick={handleLogin}>
        Entrar com Google
      </Button>

      <p className="text-sm text-gray-100 mt-6">
        Ainda em desenvolvimento. Projeto pessoal open-source ❤️
      </p>
    </main>
  )
}