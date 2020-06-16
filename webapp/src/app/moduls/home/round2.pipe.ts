import { Pipe, PipeTransform } from '@angular/core';
import { UtilityService } from 'src/app/core/services/utility/utility.service';

@Pipe({
    name: 'round2',
})
export class Round2Pipe implements PipeTransform {
    constructor(private util: UtilityService) {}

    transform(value: number): number {
        return this.util.round(value, 2);
    }
}
