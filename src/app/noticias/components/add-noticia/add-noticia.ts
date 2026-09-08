import { Component, inject, output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Noticia } from '../../interfaces/noticia';

@Component({
  selector: 'app-add-noticia',
  imports: [ReactiveFormsModule],
  templateUrl: './add-noticia.html',
})
export class AddNoticia {

  onNoticiaCreated = output<Noticia>();

  private fb = inject(FormBuilder);

  myForm: FormGroup = this.fb.group({
    id: [],
    titulo: ['', Validators.required],
    contenido: ['', Validators.required],
    imagenUrl: ['', Validators.required],
    autor: ['', Validators.required],
  });

  onSave = () => {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { id, titulo, contenido, imagenUrl, autor } = this.myForm.value;
    this.onNoticiaCreated.emit({
      id,
      titulo,
      contenido,
      imagenUrl,
      autor,
    });

    this.myForm.reset();
  }
}
