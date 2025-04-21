'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useState } from "react";

export function FormRegister() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    restaurant: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // mandar via fetch/axios pra uma rota /api/register
    console.log("Enviando dados de registro:", form)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input name="restaurant" placeholder="Nome do restaurante" onChange={handleChange} />
      <Input name="name" placeholder="Seu nome" onChange={handleChange} />
      <Input name="email" placeholder="Seu e-mail" type="email" onChange={handleChange} />
      <Input name="phone" placeholder="Seu telefone (XX)-X XXXX-XXXX" type="text" onChange={handleChange} />

      <Button type="submit" className="w-full">
        Solicitar acesso
      </Button>
    </form>
  )
}