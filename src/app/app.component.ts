import { Component } from "@angular/core";
import { IFlash } from "./flash.model";

function getRandomNumber() {
  return Math.floor(Math.random() * 10000);
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  editing = false;
  editingId: number;
  flashs: IFlash[] = [
    {
      question: "What is Your Name",
      answer: "Nikhil",
      show: false,
      id: getRandomNumber()
    },
    {
      question: "Were do you stay",
      answer: "Hyderabad",
      show: false,
      id: getRandomNumber()
    }
  ];

  trackByFlashId(index, flash) {
    return flash.id;
  }

  handleToggleCard(id: number) {
    const flash = this.flashs.find(flash => flash.id === id);
    flash.show = !flash.show;
  }

  // handleDelete(id: number) {
  //   const flashId = this.flashs.indexOf(flash => flash.id === id);
  //   this.flashs.splice(flashId, 1);
  // }

  handleEdit(id: number) {
    this.editing = true;
    this.editingId = id;
  }

  handleRememberedChange({ id, flag }) {
    const flash = this.flashs.find(flash => flash.id === id);
    flash.remembered = flag;
  }
}
