import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, type OnInit } from '@angular/core';
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
export class ImageComponent implements OnInit {

  @Input() selectedPlanet!: Planet;
  @Input() universe!: Planet[];
  @Input() selectedPlanetIndex!: number;


  angle = 0;
  numImages!: number;

  ngOnInit(): void {
    this.numImages = this.universe.length;
  }

  getTransform(index: number): string {
    const angleDeg = (180 / (this.numImages - 1)) * index + 90 + this.angle;
    const translateDist = 100; // Adjust this to control the distance from the center
    return `rotate(${angleDeg}deg) translate(${translateDist}%) rotate(${-angleDeg}deg)`;
  }

  getShadowTransform(): string {
    const translateDist = 250;
    return `translateY(-10%) rotate(90deg) translateX(${translateDist}px) rotate(-90deg)`;
  }

  prev(): void {
    this.angle -= 360 / this.numImages;
  }

  next(): void {
    this.angle += 360 / this.numImages;
  }

}
