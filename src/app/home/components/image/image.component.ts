import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild, type OnInit } from '@angular/core';
import { Planet } from '../../universe.model';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent implements OnInit, OnChanges {

  @Input() selectedPlanet!: Planet;
  @Input() universe!: Planet[];
  @Input() selectedPlanetIndex!: number;

  @ViewChild('solar') solar!: ElementRef<HTMLElement>;

  currentIndex = 0;
  previousIndex = 0;
  animationInProgress = false;

  ngOnInit(): void {
    this.currentIndex = this.selectedPlanetIndex;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedPlanetIndex'] && !changes['selectedPlanetIndex'].firstChange) {
      if (this.currentIndex < this.selectedPlanetIndex) {
        this.currentIndex = this.selectedPlanetIndex;
        this.previousIndex = this.currentIndex - 1;
        this.animateSolar();
      } else {
        this.currentIndex = this.selectedPlanetIndex;
        this.previousIndex = this.currentIndex + 1;
        this.animateSolar();
      }
    }
  }

  animateSolar(): void {
    this.animationInProgress = true;
    this.solar.nativeElement.style.transform = this.getSolarTransform();
    setTimeout(() => {
      this.animationInProgress = false;
    }, 1000);
  }

  getSolarTransform(): string {
    return `rotate(${this.currentIndex * 36}deg)`;
  }

  getTop(index: number): string {
    if (index === this.currentIndex - 1) {
      // Move current planet out of screen towards top
      return '+100%';
    } else if (index === this.currentIndex) {
      // Center position for the selected planet
      return '20%';
    } else if (index === this.currentIndex + 1) {
      // Move next planet from bottom to center
      return '-100%';
    } else {
      return '300%';
    }
  }

  getTransform(index: number): string {
    // Calculate the rotation based on the current index
    const rotation = (index - this.currentIndex) * 36;
    return `rotate(${rotation}deg)`;
  }

  getOpacity(index: number): number {
    return index === this.currentIndex ? 1 : 0;
  }

  getShadowTransform(): string {
    const translateDist = 250;
    return `translateY(-10%) rotate(90deg) translateX(${translateDist}px) rotate(-90deg)`;
  }
}
