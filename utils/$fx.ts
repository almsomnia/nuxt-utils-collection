import type { NuxtError } from "nuxt/app"
import type {
   NitroFetchRequest,
   NitroFetchOptions,
   TypedInternalResponse,
} from "nitropack"
import type { FetchOptions, FetchResponse } from "ofetch"

export default async function <
   T = unknown,
   R extends NitroFetchRequest = NitroFetchRequest
>(endpoint: R, opts?: FetchOptions): Promise<TypedInternalResponse<R, T>> {
   const handler = $fetch.create({
      async onRequestError({ error }) {
         throw error
      },

      async onResponse({ response }) {
         return response._data
      },

      async onResponseError({ response, error }) {
         const res = response as FetchResponse<NuxtError>
         throw error ?? res._data
      },

      ...opts
   })

   return handler<T, R>(endpoint, opts as NitroFetchOptions<R>)
}
