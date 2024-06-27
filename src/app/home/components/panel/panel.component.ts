import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, type OnInit } from '@angular/core';
import { Planet } from '../../universe.model';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideVertical', [
      state('void', style({
        transform: 'translateY(100%) scale(0.5)',
        opacity: 0,
        visibility: 'hidden'
      })),
      state('left', style({
        transform: 'translateY(100%) scale(0.7)',
        opacity: 0.4,
        visibility: 'visible'
      })),
      state('center', style({
        transform: 'translateY(0) scale(1)',
        opacity: 1,
        visibility: 'visible'
      })),
      state('right', style({
        transform: 'translateY(-100%) scale(0.7)',
        opacity: 0.4,
        visibility: 'visible'
      })),
      state('void', style({
        transform: 'translateY(-100%) scale(0.5)',
        opacity: 0,
        visibility: 'hidden'
      })),
      transition('* => *', animate('700ms cubic-bezier(0.35, 0, 0.25, 1)'))
    ]),
    trigger('fadeInOut', [
      state('in', style({
        opacity: 1
      })),
      state('out', style({
        opacity: 0
      })),
      transition('out => in', animate('600ms ease-in')),
      transition('in => out', animate('600ms ease-out'))
    ])
  ]
})
export class PanelComponent implements OnInit {
  @Input() selectedPlanet!: Planet;
  @Input() universe!: Planet[];
  @Input() selectedPlanetIndex!: number;

  @ViewChild('name') name!: ElementRef<HTMLDivElement>;

  labelVisible: boolean = false;
  animPosition: string = 'to bottom';

  constructor() { }

  ngOnInit(): void { }

  getCardState(index: number): string {
    if (index === this.selectedPlanetIndex) {
      return 'center';
    } else if (index === this.selectedPlanetIndex - 1) {
      this.animPosition = 'to bottom';
      return 'left';
    } else if (index === this.selectedPlanetIndex + 1) {
      this.animPosition = 'to top';
      return 'right';
    } else {
      return 'void';
    }
  }

  getLabelState(): string {
    return this.labelVisible ? 'in' : 'out';
  }

  onAnimationStart(event: any): void {
    if (event.toState === 'center') {
      this.labelVisible = false;
    }
  }

  onAnimationDone(event: any): void {
    if (event.toState === 'center') {
      this.labelVisible = true;
    }
  }

  getBackgroundStyle(index: number) {
    if (index === this.selectedPlanetIndex - 1) {
      return 'linear-gradient(to top,' + this.universe[index].color + ', rgba(255, 0, 0, 0))';
    } else if (index === this.selectedPlanetIndex + 1) {
      return 'linear-gradient(to bottom,' + this.universe[index].color + ', rgba(255, 0, 0, 0))';
    } else {
      return '';
    }
  }

  getColorStyle(index: number) {
    if (index === this.selectedPlanetIndex - 1) {
      return '';
    } else if (index === this.selectedPlanetIndex + 1) {
      return '';
    } else {
      return this.universe[index].color;
    }
  }

}
