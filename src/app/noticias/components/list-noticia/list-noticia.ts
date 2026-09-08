import { Component, input, output } from '@angular/core';
import { Noticia } from '../../interfaces/noticia';

@Component({
  selector: 'app-list-noticia',
  imports: [],
  templateUrl: './list-noticia.html',
})
export class ListNoticia {
  noticias = input.required<Noticia[]>();

  noticiaToUpdate = output<number>();
  noticiaToDelete = output<number>();

  setNoticiaToEdit = (noticiaId: number) => {
    this.noticiaToUpdate.emit(noticiaId);
  }

  setNoticiaToDelete = (noticiaId: number) => {
    this.noticiaToDelete.emit(noticiaId);
  }
}
