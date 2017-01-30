/* tslint:disable: max-line-length */
import { Component, HostBinding, ElementRef, AfterViewInit,
         trigger, transition, animate,
         style, state } from '@angular/core';

import { CurrencyPipe } from '@angular/common';
import { ApiService } from '../services/index';

@Component({
  selector: 'sh-about',
  template: `
    <div class="container">
      <div class="content">
        <h1>Welcome to the Minimal Dota 2 Watcher</h1>
        <div class="info">
          <div class="about">
            <h2>About</h2>
            <p>
              Watch multiple Dota 2 matches while staying up-to-date with previous and upcoming matches.
            </p>
            <p>
              Contact: <a href="adam.johannesmeyer@gmail.com">adam.johannesmeyer@gmail.com</a>
            </p>
          </div>
          <div class="donate">
            <h2>Donations</h2>
            <div>
              <div>
                Help me with server costs or just show your appreciation with that donation button below!
              </div>
              <div class="donation">
                <select class="currency" [ngModel]="defaultCurrency" (change)="onChangeCurrency($event.target.value)">
                    <option [disabled]="i === '---'"  *ngFor="let i of currency">{{i}}</option>
                </select>
                <div>
                  <select 
                    *ngIf="userCurrency !== 'RUB' && userCurrency !== 'CYN' && userCurrency !== 'SAR'"
                    [ngModel]="defaultAmount"
                    (change)="onChangeAmount($event.target.value)">
                      <option *ngFor="let i of amount">{{i}}</option>
                  </select>
                  <select *ngIf="userCurrency === 'RUB'" (change)="onChangeAmount($event.target.value)">
                      <option *ngFor="let i of amountRuble">{{i}}</option>
                  </select>
                  <select *ngIf="userCurrency === 'CYN'" (change)="onChangeAmount($event.target.value)">
                      <option *ngFor="let i of amountChinese">{{i}}</option>
                  </select>
                  <select *ngIf="userCurrency === 'SAR'" (change)="onChangeAmount($event.target.value)">
                      <option *ngFor="let i of amountSAR">{{i}}</option>
                  </select>
                </div>
                <button (click)="openCheckout()">
                  Stripe Donate
                </button>
                <span class="or">or</span>
                <button class="paypal">
                  <a target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3HNBRHTU44PGY">Paypal</a>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'scale(1)'
        })
      ),
      transition('void => *', [
        style({
          opacity: .5,
          transform: 'scale(.95)'
        }),
        animate('0.3s ease-in')
      ])
    ])
  ]
})

export class AboutComponent implements AfterViewInit {

  currency = [
    'AUD', 'CAD', 'EUR', 'GBP', 'USD',
    '---',
    'CYN',
    '---',
    'RUB',
    '---',
    'SAR'
  ];

  amount = [
    '1', '2', '3', '4', '5',
    '10', '50', '75', '100', '150', '300'
  ];

  amountRuble = [
    '100', '200', '300', '400', '500',
    '1,000', '2,000', '3,000', '7,500', '10,000'
  ];

  amountChinese = [
    '10', '20', '30', '40', '50',
    '100', '500', '750', '1,000', '2,000'
  ];

  amountSAR = [
    '5', '50', '500', '5,000', '50,000'
  ];

  defaultCurrency: string = 'USD';
  defaultAmount: string = '5';
  userAmount: number;
  userAmountCents: number;
  userCurrency: string = 'USD';


  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.position') get position() {
    return 'relative';
  }

  constructor(private apiService: ApiService, private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.onChangeAmount(this.defaultAmount);

    let s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://js.stripe.com/v2/';
    this.elementRef.nativeElement.appendChild(s);

    let r = document.createElement('script');
    r.src = 'https://checkout.stripe.com/checkout.js';
    this.elementRef.nativeElement.appendChild(r);
  }

  onChangeCurrency(currencyValue) {
    this.userCurrency = currencyValue;
  }

  onChangeAmount(amountValue: string) {
    this.userAmount = parseInt(amountValue.replace(',', ''), 10);
    this.userAmountCents = parseInt(amountValue.replace(',', '') + '00', 10);
  }

  // tslint:disable:no-shadowed-variable
  openCheckout() {
    // hack for stripejs & angular 2 to remove an error on callback.
    // http://stackoverflow.com/questions/36258252/stripe-json-circular-reference
    const _stringify = JSON.stringify;
    JSON.stringify = (value, ...args) => {
      if (args.length) {
        return _stringify(value, args);
      } else {
        return _stringify(value, function (key, value) {
          if (value && key === 'zone' && value['_zoneDelegate']
              && value['_zoneDelegate']['zone'] === value) {
            return undefined;
          }
          return value;
        });
      }
    };
    // tslint:enable:no-shadowed-variable

    let selectedAmount = new CurrencyPipe(this.userCurrency)
      .transform(this.userAmount, this.userCurrency, true);

    let description = `Donation of ${selectedAmount}`;
    let handler = (<any>window).StripeCheckout.configure({
      key: 'pk_live_aQ6aUyhoFiME9Q9RZ1OWGQHd',
      image: 'assets/icon/android-chrome-192x192.png',
      locale: 'auto',

      token: (token, args) => {
        this.apiService.passToken(token.id, this.userAmountCents, this.userCurrency, description);
      }
    });

    handler.open({
      name: 'Minidota.watch',
      description: description,
      amount: this.userAmountCents,
      currency: this.userCurrency,
      bitcoin: true,
      alipay: true
    });
  }
}
