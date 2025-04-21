import { z } from 'zod'

const envSchema = z.object({
  GOOGLE_ID: z.string(),
  GOOGLE_SECRET: z.string(),
  NEXTAUTH_SECRET: z.string(),
  NEXT_PUBLIC_API_URL: z.string().url(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.log('Invalid enviroment variables')

  throw new Error('Invalid enviroment variables')
}

export const env = _env.data