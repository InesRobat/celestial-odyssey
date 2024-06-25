import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, HostListener, OnChanges, SimpleChanges, ViewChild, type OnInit } from '@angular/core';
import { PanelComponent } from './components/panel/panel.component';
import { ImageComponent } from './components/image/image.component';
import { UNIVERSE } from './home';
import { debounce, range } from 'lodash';
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
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  @ViewChild('solar') solar!: ElementRef<HTMLDivElement>;

  public universe = UNIVERSE;
  public selectedPlanet = this.universe[0];
  public selectedPlanetIndex = 0;

  total = 50;
  w = window.innerWidth;
  h = window.innerHeight;
  Tweens: any[] = [];

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('window:resize')
  onResize() {
    this.w = window.innerWidth;
    this.h = window.innerHeight;
  }

  ngOnInit(): void {
    const container = this.el.nativeElement.querySelector('#container');

    for (let i = this.total; i--;) {
      const div = document.createElement('div');
      gsap.set(div, { className: 'dot', x: this.R(this.w), y: this.R(this.h), opacity: 0 });
      container.appendChild(div);
      this.anim(div);
      // this.flash(div);
      this.Tweens.push(div);
    }

    for (let i = this.total; i--;) {
      this.Tweens[i].Tween.play();
    }
  }

  anim(elm: any) {
    elm.Tween = gsap.to(elm, {
      duration: this.R(80) + 40,
      motionPath: {
        path: [
          { x: this.R(this.w), y: this.R(this.h) },
          { x: this.R(this.w), y: this.R(this.h) }
        ],
        curviness: 1.5
      },
      opacity: this.R(1),
      scale: this.R(1) + 0.5,
      delay: this.R(8),
      onComplete: () => this.anim(elm)
    });
  }

  flash(elm: any) {
    gsap.to(elm, {
      duration: 0.5,
      opacity: 1,
      boxShadow: '0 0 2vw 0.4vw yellow',
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: this.R(5)  // Random delay for each element
    });
  }

  R(max: number) {
    return Math.random() * max;
  }

  // Debounced scroll handling function
  private handleScroll = debounce((event: WheelEvent) => {
    if (event.deltaY < 0) {
      this.selectPreviousPlanet();
    } else {
      this.selectNextPlanet();
    }
    event.preventDefault(); // Prevent default scrolling behavior
  }, 100); // Adjust debounce delay as needed (200ms in this example)

  // Listen to mouse wheel events
  @HostListener('mousewheel', ['$event'])
  onMouseWheel(event: WheelEvent): void {
    this.handleScroll(event);
  }

  // Methods to select next and previous planets
  public selectNextPlanet(): void {
    const index = this.universe.indexOf(this.selectedPlanet);
    const nextIndex = (index + 1) % this.universe.length;
    this.selectPlanet(this.universe[nextIndex]);
    this.selectedPlanetIndex = nextIndex;
  }

  public selectPreviousPlanet(): void {
    const index = this.universe.indexOf(this.selectedPlanet);
    const previousIndex = (index - 1 + this.universe.length) % this.universe.length;
    this.selectPlanet(this.universe[previousIndex]);
    this.selectedPlanetIndex = previousIndex;
  }

  public selectPlanet(planet: Planet): void {
    this.selectedPlanet = planet;
  }

  public getSelectedPlanetIndex(index: number): void {
    this.selectedPlanetIndex = index;
    this.selectPlanet(this.universe[index]);
  }
}
