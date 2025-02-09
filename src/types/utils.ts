import { FC } from 'react'

export type PropsOf<Type> = Type extends FC<infer Props> ? Props : never
