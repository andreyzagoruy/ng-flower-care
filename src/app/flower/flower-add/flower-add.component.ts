import { Component, OnInit, Input } from '@angular/core';
import { DatabaseService } from '../../shared/database.service';

@Component({
  selector: 'flower-add',
  templateUrl: './flower-add.component.html',
  styleUrls: ['./flower-add.component.scss']
})
export class FlowerAddComponent implements OnInit {


  flowerName = "";
  oldWatering = "00";
  nextWatering = "00";
  today = new Date();
  dayWatering = new Date();
  lastWatering = new Date();

  constructor(private db: DatabaseService) { }

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

  addFlower(today, dayWatering, lastWatering, flowerName, oldWatering, nextWatering) {
    /*
    this.flowers.push({
      flowerName: this.flowerName,
      oldWatering: lastWatering.setDate(today.getDate() -  Number(this.oldWatering)) ,
      nextWatering: dayWatering.setDate(today.getDate()+ Number(this.nextWatering))
    });
    this.flowerName = '';
    this.oldWatering = '00';
    this.nextWatering = '00';
    */
    this.db.addFlower(today, dayWatering, lastWatering, flowerName, oldWatering, nextWatering);
  }
}
