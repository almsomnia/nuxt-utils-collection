export default function () {
   const validFileExtensions = {
      image: ['jpg', 'jpeg', 'png'],
   }

   function fileType(fileName: string, fileType: keyof typeof validFileExtensions) {
      return (fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop() as string) > -1) || false
   }

   function size(file: File, size: number) {
      return file && file.size <= size
   }

   return {
      fileType,
      size
   }
}