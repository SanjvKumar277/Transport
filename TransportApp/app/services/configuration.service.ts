import { Injectable } from '@angular/core';
import { Utilities } from './utilities';

//@Injectable()
export class ConfigurationService {
    public baseUrl: string = Utilities.baseUrl().replace(/\/$/, '');
}