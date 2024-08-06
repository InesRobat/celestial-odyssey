import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { PanelComponent } from './components/panel/panel.component';
import { ImageComponent } from './components/image/image.component';
import { UNIVERSE } from './home';
import { debounce } from 'lodash';
import { Planet } from './universe.model';
import { RangeComponent } from './components/range/range.component';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PanelComponent,
    ImageComponent,
    RangeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  @ViewChild('prev') public prev!: ElementRef<HTMLDivElement>;
  @ViewChild('next') public next!: ElementRef<HTMLDivElement>;

  public universe = UNIVERSE;
  public selectedPlanet = this.universe[0];
  public selectedPlanetIndex = 0;

  w = window.innerWidth;
  h = window.innerHeight;

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('window:resize')
  onResize() {
    this.w = window.innerWidth;
    this.h = window.innerHeight;
  }

  ngOnInit(): void {}

  // Listen to mouse wheel events
  @HostListener('mousewheel', ['$event'])
  onMouseWheel(event: WheelEvent): void {
    this.scroll(event);
  }

  // Scroll method
  scroll = debounce((event: WheelEvent): void => {
    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      this.selectNextPlanet();
    } else {
      this.selectPreviousPlanet();
    }
  }, 50);

  // Methods to select next and previous planets
  public selectNextPlanet(): void {
    const index = this.universe.indexOf(this.selectedPlanet);
    const nextIndex = (index + 1) % this.universe.length;
    this.selectPlanet(this.universe[nextIndex]);
    this.selectedPlanetIndex = nextIndex;
    this.animateButtonPress(this.next.nativeElement);
  }

  public selectPreviousPlanet(): void {
    const index = this.universe.indexOf(this.selectedPlanet);
    const previousIndex = (index - 1 + this.universe.length) % this.universe.length;
    this.selectPlanet(this.universe[previousIndex]);
    this.selectedPlanetIndex = previousIndex;
    this.animateButtonPress(this.prev.nativeElement);
  }

  public selectPlanet(planet: Planet): void {
    this.selectedPlanet = planet;
  }

  public getSelectedPlanetIndex(index: number): void {
    this.selectedPlanetIndex = index;
    this.selectPlanet(this.universe[index]);
  }

  private animateButtonPress(element: HTMLDivElement): void {
    gsap.fromTo(element, { scale: 1 }, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
  }
}

// @media (min-width: 810px) and (max-width: 1199px),
//   (max-width: 809px) {
//   }