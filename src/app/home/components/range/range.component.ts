import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, type OnInit } from '@angular/core';
import { Planet } from '../../universe.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-range',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './range.component.html',
  styleUrl: './range.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RangeComponent implements OnInit {

  @Input() universe!: Planet[];
  @Input() selectedPlanetIndex!: number;

  @Output() emitSelectedPlanetIndex = new EventEmitter<number>();

  ngOnInit(): void { }
}
