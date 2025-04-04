import { Component, Input } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-share-buttons',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.css']
})
export class ShareButtonsComponent {
  @Input() articleTitle!: string;
  @Input() articleUrl!: string;

  // Icônes
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;

  constructor(private library: FaIconLibrary) {
    library.addIcons(faFacebook, faTwitter, faLinkedin, faWhatsapp);
  }

  getShareLink(platform: string): string {

    if (!this.articleUrl || !this.articleTitle){
      console.error('Article URL ou Article Title est manquant');

      return '#';
    }

    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.articleUrl)}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.articleUrl)}&text=${encodeURIComponent(this.articleTitle)}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.articleUrl)}`;
      case 'whatsapp':
        return `https://api.whatsapp.com/send?text=${encodeURIComponent(this.articleTitle + ' ' + this.articleUrl)}`;
      default:
        return '#';
    }
  }
}
