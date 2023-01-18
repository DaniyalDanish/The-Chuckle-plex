import {Component, Input} from '@angular/core';
import {Movie} from "../../shared/value-objects/movie";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  @Input() public movies: Array<Movie> | undefined;

}
