import { Component } from '@angular/core';

@Component({
	selector: 'app-stripes-background',
	standalone: true,
	imports: [],
	templateUrl: './stripes-background.component.html',
	styleUrl: './stripes-background.component.scss',
})
export class StripesBackgroundComponent {
	htmlCode = '<div class="stripes"></div>';
	cssCode = `.stripes {
    width: 300px;
    height: 300px;
    background: repeating-linear-gradient(
        -45deg,
        #fff 0px,
        #fff 4px,
        #10f136 10px,
        #0dc829 20px,
    );
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
