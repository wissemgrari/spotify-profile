import { Pipe, PipeTransform } from '@angular/core';
import { parsePitchClass } from "../utils";

@Pipe({
  name: 'pitch'
})
export class PitchPipe implements PipeTransform {
  transform(value: number) {
    return parsePitchClass(value);
  }
}
