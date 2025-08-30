import { z } from "zod";

export const searchSchema = z.object({
  query: z
    .string()
    .nonempty({ message: "A busca não pode estar vazia." })
    .refine((value) => !/^\s*$/.test(value), {
      message: "A busca não pode conter apenas espaços em branco.",
    }),
});
