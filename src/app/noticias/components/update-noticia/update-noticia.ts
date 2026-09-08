import { Component, inject, input, OnChanges, output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Noticia } from '../../interfaces/noticia';

@Component({
  selector: 'app-update-noticia',
  imports: [ReactiveFormsModule],
  templateUrl: './update-noticia.html',
})
export class UpdateNoticia implements OnChanges {

  noticiaToEdit = input<Noticia>();
  onNoticiaUpdated = output<Noticia>();

  private fb = inject(FormBuilder);

  myForm: FormGroup = this.fb.group({
    id: [],
    titulo: ['', Validators.required],
    contenido: ['', Validators.required],
    imagenUrl: ['', Validators.required],
    autor: ['', Validators.required],
  });

  ngOnChanges(): void {
    if (this.noticiaToEdit()) {
      this.myForm.setValue(this.noticiaToEdit()!);
    }
  }

  onSave = () => {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { id, titulo, contenido, imagenUrl, autor } = this.myForm.value;
    this.onNoticiaUpdated.emit({
      id,
      titulo,
      contenido,
      imagenUrl,
      autor,
    });

    this.myForm.reset();
  }
}
