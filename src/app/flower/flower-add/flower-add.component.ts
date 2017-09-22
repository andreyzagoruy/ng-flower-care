import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'flower-add',
  templateUrl: './flower-add.component.html',
  styleUrls: ['./flower-add.component.scss']
})
export class FlowerAddComponent implements OnInit {

  @Input() flowerName = "";
  @Input() oldWatering = "00";
  @Input() nextWatering = "00";
  @Input() today = new Date();
  @Input() dayWatering = new Date();
  @Input() lastWatering = new Date();

  constructor() { }

  ngOnInit() {
  }

  flowers = [
     {
        flowerName : "cactus",
        oldWatering : 22,
        nextWatering : 23
      },
      {
        flowerName : "violet",
        oldWatering : 22,
        nextWatering : 25
      },
      {
        flowerName : "mandrake",
        oldWatering : 22,
        nextWatering : 24
      }
    ];

  addFlower(today, dayWatering, lastWatering) {
    this.flowers.push({
      flowerName: this.flowerName,
      oldWatering: lastWatering.setDate(today.getDate() -  Number(this.oldWatering)) ,
      nextWatering: dayWatering.setDate(today.getDate()+ Number(this.nextWatering))
    });
    this.flowerName = '';
    this.oldWatering = '00';
    this.nextWatering = '00';
  }
}
