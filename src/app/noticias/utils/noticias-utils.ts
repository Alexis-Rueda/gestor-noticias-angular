import { Noticia } from './../interfaces/noticia';

const noticiaToJson = ({
  id,
  titulo,
  contenido,
  imagenUrl,
  autor
}: Noticia): string => {

  return `
   {
      "id": ${id},
      "titulo": ${titulo}
      "contenido": ${contenido},
      "imagenUrl": ${imagenUrl},
      "autor": ${autor}
   }`
}

export { noticiaToJson };
