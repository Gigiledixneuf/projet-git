import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
})
export class AccueilComponent implements AfterViewInit, OnDestroy {
  private currentIndex: number = 0; // Index de l'image actuelle
  private interval: any; // Variable pour stocker l'intervalle
  private isBrowser: boolean; // Pour vérifier si on est dans le navigateur

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.startAutoSlide(); // Démarre le défilement automatique uniquement dans le navigateur
    }
  }

  ngOnDestroy() {
    clearInterval(this.interval); // Nettoie l'intervalle lorsque le composant est détruit
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % 3; // Change d'image toutes les 5 secondes
      this.goToSlide(this.currentIndex); // Appelle la méthode pour changer de slide
    }, 5000); // 5000 ms = 5 secondes
  }

  goToSlide(index: number) {
    if (!this.isBrowser) return; // Ne fait rien si on n'est pas dans le navigateur

    const slides = document.querySelectorAll('[data-twe-carousel-item]'); // Sélectionne tous les éléments de slide
    slides.forEach((slide, i) => {
      slide.classList.toggle('hidden', i !== index); // Affiche le slide courant
    });
  }
}