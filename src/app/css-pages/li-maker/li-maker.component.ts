import { Component } from '@angular/core';

@Component({
	selector: 'app-li-maker',
	standalone: true,
	imports: [],
	templateUrl: './li-maker.component.html',
	styleUrl: './li-maker.component.scss',
})
export class LiMakerComponent {
	htmlCode = `
  <ul>
      <li>one</li>
      <li>two</li>
      <li>three</li>
  </ul>
  `;
	cssCode = `ul li::marker {
    content: '🟢';
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
