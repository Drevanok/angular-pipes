import { Pipe, PipeTransform } from '@angular/core';
import { Creator, Hero } from '../interfaces/hero.interface';

@Pipe({
    name: 'heroCreator'
})

export class HeroCreatorPipe implements PipeTransform {
    transform(value: Creator): string {
        switch (value) {
            case Creator.Anime:
                return 'Anime'
            case Creator.DC:
                return 'DC'
            case Creator.Marvel:
                return 'Marvel'
            default:
                return 'Creador desconocido'
        }
    }
}