import { Component, inject, signal } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { Title } from "../../../shared/components/title/title";
import { NoticiasService } from '../../services/noticias-service';
import { Noticia } from '../../interfaces/noticia';
import { AddNoticia } from '../../components/add-noticia/add-noticia';
import { UpdateNoticia } from '../../components/update-noticia/update-noticia';
import { ListNoticia } from "../../components/list-noticia/list-noticia";
import { Action } from '../../interfaces/action';

@Component({
  selector: 'app-noticia',
  imports: [Title, AddNoticia, UpdateNoticia, JsonPipe, ListNoticia],
  templateUrl: './noticia-page.html',
})
export class NoticiaPage {

  private noticiasService = inject(NoticiasService);

  noticias = this.noticiasService.noticias;
  noticiasJson = this.noticiasService.noticiasToJson();

  noticiaToUpdate = signal<Noticia | null>(null);
  currentAction = signal<Action>('agregar');

  onNoticiaToUpdate = (noticiaId: number) => {
    const noticia = this.noticias().find(n => n.id === noticiaId) || null;
    this.noticiaToUpdate.set(noticia);
    this.currentAction.set('editar');
  }

  onNoticiaCreated = (newNoticia: Noticia) => {
    this.noticiasService.addNoticia(newNoticia);
    this.currentAction.set('agregar');
  }

  onNoticiaUpdated = (updatedNoticia: Noticia) => {
    this.noticiasService.updateNoticia(updatedNoticia);
    this.currentAction.set('agregar');
  }

  onNoticiaToDelete(noticiaId: number) {
    this.noticiasService.deleteNoticia(noticiaId);
  }

}
