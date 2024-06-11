import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [
    DecimalPipe, // pour formater les nombres décimaux (qui peuvent être très grand)
    PercentPipe, // pour formater les pourcentages
    CurrencyPipe // pour formater les monaies
    // Un pipe modifie uniquement le format d'affichage d'une variable mais pas sa valeur de base.
  ],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss'
})
export class TestsComponent {
  largeNumber!: number;
  percentageNumber!: number;
  moneyNumber!: number;

  ngOnInit(): void {
    // Tests des pipes de formatage des nombres :
    this.largeNumber = 2493485.29;
    this.percentageNumber = 0.3367;
    this.moneyNumber = 336.75;
  }
}
