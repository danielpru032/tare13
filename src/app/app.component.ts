import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Tarea8Component } from './tarea8/tarea8.component';
import { Tarea9Component } from './tarea9/tarea9.component';
import { Tarea10Component } from './tarea10/tarea10.component';
import { Tarea11Component } from './tarea11/tarea11.component';
import { Tarea12Component } from './tarea12/tarea12.component';
import { Tarea13Component } from './tarea13/tarea13.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { InputComponent } from './input/input.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { SelectComponent } from './select/select.component';
import { TableComponent } from './table/table.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Tarea8Component,
    Tarea9Component,
    Tarea10Component,
    Tarea11Component,
    Tarea12Component,
    Tarea13Component,
    ButtonComponent,
    CardComponent,
    CheckboxComponent,
    ChipsComponent,
    DatepickerComponent,
    InputComponent,
    RadiobuttonComponent,
    SelectComponent,
    TableComponent,
    AutocompleteComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'task13';
}
