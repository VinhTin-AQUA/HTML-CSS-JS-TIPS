import { Component } from '@angular/core';

@Component({
	selector: 'app-checkbox',
	standalone: true,
	imports: [],
	templateUrl: './checkbox.component.html',
	styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
	htmlCode = `<input type="checkbox">`;

	cssCode = `input[type='checkbox'] {
	accent-color: red;
}`;

	htmlCode1 = `<input type="checkbox">`;

	cssCode1 = `input[type='checkbox'] {
	/* Double-sized Checkboxes */
	-ms-transform: scale(1); /* IE */
	-moz-transform: scale(1); /* FF */
	-webkit-transform: scale(1); /* Safari and Chrome */
	-o-transform: scale(1); /* Opera */
	transform: scale(1.5);
	background-color: red;
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
		} else if (flag === 'html1') {
			navigator.clipboard
				.writeText(this.htmlCode1)
				.then(() => {
					console.log('Text copied to clipboard successfully!');
				})
				.catch(err => {
					console.error('Could not copy text: ', err);
				});
		} else if (flag === 'css1') {
			navigator.clipboard
				.writeText(this.cssCode1)
				.then(() => {
					console.log('Text copied to clipboard successfully!');
				})
				.catch(err => {
					console.error('Could not copy text: ', err);
				});
		}
	}
}
