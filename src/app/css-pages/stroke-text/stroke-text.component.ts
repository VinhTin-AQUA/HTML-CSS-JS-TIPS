import { Component } from '@angular/core';

@Component({
  selector: 'app-stroke-text',
  standalone: true,
  imports: [],
  templateUrl: './stroke-text.component.html',
  styleUrl: './stroke-text.component.scss'
})
export class StrokeTextComponent {
  htmlCode = `<h1 class="stroke">Hello world</h1>`;
	cssCode = `.stroke {
    -webkit-text-stroke: 5px crimson;
    font-size: 10rem;
    color: white;
}`

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
