import fileValidator from "./validators/file"

export default function () {
   return {
      file: fileValidator(),
   }
}
