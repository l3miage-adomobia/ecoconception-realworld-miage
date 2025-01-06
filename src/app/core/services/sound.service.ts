import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SoundService {
  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio("assets/audio/background-sound.mp3");
    this.audio.loop = true; // Joue le son en boucle
    this.audio.volume = 0.8; // Volume ajustable entre 0 et 1
  }

  playSound() {
    this.audio.play().catch((error) => {
      console.error("Erreur lors de la lecture du son :", error);
    });
  }

  stopSound() {
    this.audio.pause();
  }
}
