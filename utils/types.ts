export type Nullable<T> = {
   [P in keyof T]: T[P] extends object ? Nullable<T[P]> : T[P] | null
}

export type InferSchema<T extends import('yup').ISchema<any, any>> = import('yup').InferType<T>
