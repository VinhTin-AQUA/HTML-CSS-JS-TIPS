import { Component } from '@angular/core';

@Component({
	selector: 'app-text-emphasis',
	standalone: true,
	imports: [],
	templateUrl: './text-emphasis.component.html',
	styleUrl: './text-emphasis.component.scss',
})
export class TextEmphasisComponent {
	htmlCode = '<h1 class="text-emphasis">text-emphasis works!</h1>';
	cssCode = `.text-emphasis {
		text-emphasis: '💚';
		font-size: 1.5rem;
		text-align: center;
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
