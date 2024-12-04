declare type InferSchema<T extends import('yup').ISchema<any, any>> = import('yup').InferType<T>
