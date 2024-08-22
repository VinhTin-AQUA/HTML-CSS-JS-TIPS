import { Component } from '@angular/core';

@Component({
	selector: 'app-drop-shadow',
	standalone: true,
	imports: [],
	templateUrl: './drop-shadow.component.html',
	styleUrl: './drop-shadow.component.scss',
})
export class DropShadowComponent {
	htmlCode = `
  <img width="200" src="https://cdn-icons-png.flaticon.com/512/2544/2544087.png" alt="" />`;

	cssCode = `
    img {
        filter: drop-shadow(2px 20px 10px #008000);
        border: 1px solid green;
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
}
