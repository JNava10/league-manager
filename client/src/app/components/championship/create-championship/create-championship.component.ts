import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Championship} from "../../../utils/interfaces/championship.interface";

@Component({
  selector: 'app-create-championship',
  standalone: true,
    imports: [
        NgIf,
        ReactiveFormsModule
    ],
  templateUrl: './create-championship.component.html',
  styleUrl: './create-championship.component.css'
})
export class CreateChampionshipComponent {
  constructor(private championshipService: ChampionshipService) {}

  createChampionshipForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  createChampionship = () => {
    if (this.createChampionshipForm.invalid) return;

    const championship = this.createChampionshipForm.value as Championship;


  };
}
