import { Component } from '@angular/core';

@Component({
	selector: 'app-smooth',
	standalone: true,
	imports: [],
	templateUrl: './smooth.component.html',
	styleUrl: './smooth.component.scss',
})
export class SmoothComponent {
	htmlCode = ``;

	cssCode = `html {
  scroll-behavior: smooth;
}`;

	copyText(flag: string): void {
		if (flag === 'html') {
			navigator.clipboard
				.writeText(this.htmlCode)
				.then(() => {
					console.log('Text copied to clipboard successfully!');
				})
				.catch(err => {
					console.error('Could not copy text: ', err);
				});
		} else if (flag === 'css') {
			navigator.clipboard
				.writeText(this.cssCode)
				.then(() => {
					console.log('Text copied to clipboard successfully!');
				})
				.catch(err => {
					console.error('Could not copy text: ', err);
				});
		}
	}

	scroll(event: Event) {
		event.preventDefault();
    const welcomeElement = document.getElementById('welcome');
    if (welcomeElement) {
      welcomeElement.scrollIntoView({ behavior: 'smooth' });
    }
	}
}
