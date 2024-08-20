import { Component } from '@angular/core';
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-create-league-form',
  standalone: true,
  imports: [
    DropdownModule,
    InputTextModule,
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './create-league-form.component.html',
  styleUrl: './create-league-form.component.css'
})
export class CreateLeagueFormComponent {
  createLeagueForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl(''),
  });

  get name() {
    return this.createLeagueForm.get('name')!;
  }

  get description() {
    return this.createLeagueForm.get('description')!;
  }

  get category() {
    return this.createLeagueForm.get('category')!;
  }

  createLeague = () => {
    if (this.createLeagueForm.invalid) return;

    const data = this.createLeagueForm.value;


  }
}
