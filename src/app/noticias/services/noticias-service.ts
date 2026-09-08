import { Noticia } from './../interfaces/noticia';

import { Injectable, signal } from '@angular/core';
import { noticiaToJson } from '../utils/noticias-utils';

type Action = 'agregar' | 'editar';

@Injectable({providedIn: 'root'})
export class NoticiasService {

  noticias = signal<Noticia[]>([
    {
      id: 1,
      titulo: 'Noticia de prueba',
      contenido: 'Deserunt fugiat in fugiat est culpa culpa consequat commodo dolore laboris consequat culpa occaecat.',
      imagenUrl: 'https://picsum.photos/200/300',
      autor: 'Jane Doe'
    },
    {
      id: 2,
      titulo: 'Noticia de prueba 2',
      contenido: 'Amet nisi est ea sit voluptate sint duis irure Lorem mollit consequat excepteur.',
      imagenUrl: 'https://picsum.photos/200/300',
      autor: 'John Doe'
    },
  ]);

  private _currentAction = signal<Action>('agregar');

  noticiasToJson = signal<string[]>(this.noticias().map((item) => noticiaToJson(item)));

  getCurrentAction = () => {
    return this._currentAction();
  }

  setCurrentAction = (action: Action) => {
    this._currentAction.set(action);
  }

  addNoticia = (noticia: Noticia) => {
    const newNoticia = noticia;
    newNoticia.id = Date.now();
    this.noticias.set([...this.noticias(), newNoticia ]);
  }

  updateNoticia = (noticia: Noticia) => {
    const noticiasActualizadas = this.noticias().map((item) => {
      if (item.id === noticia.id) {
        return noticia;
      }
      return item;
    });
    this.noticias.set(noticiasActualizadas);
  }

  deleteNoticia = (noticiaId: number) => {
    const noticiasActualizadas = this.noticias().filter((item) => item.id !== noticiaId);
    this.noticias.set(noticiasActualizadas);
  }

}
