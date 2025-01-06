import { Component, OnInit } from "@angular/core";
import { SoundService } from "./core/services/sound.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  constructor(private soundService: SoundService) {}

  ngOnInit() {
    this.soundService.playSound(); // Lancer le son en boucle au démarrage
  }
}
