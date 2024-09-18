import { Component } from '@angular/core';

@Component({
	selector: 'app-prevent-input-number',
	standalone: true,
	imports: [],
	templateUrl: './prevent-input-number.component.html',
	styleUrl: './prevent-input-number.component.scss',
})
export class PreventInputNumberComponent {
	htmlCode = '<input id="input-numbrt" (keydown)="preventInvalidInput($event)" type="number">';

	cssCode = `
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

/* Đối với Firefox */
input[type="number"] {
    -moz-appearance: textfield;
}

#input-numbrt {
    @apply border-2 rounded-md outline-none py-1 px-2;
}
`;

	tsCode = `
	preventInvalidInput(event: KeyboardEvent): void {
		// Nếu ký tự là 'e', '+', '-', hoặc '.'
		if (['e', 'E', '+', '-'].includes(event.key)) {
			event.preventDefault();
		}
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

	preventInvalidInput(event: KeyboardEvent): void {
		// Nếu ký tự là 'e', '+', '-', hoặc '.'
		if (['e', 'E', '+', '-'].includes(event.key)) {
			event.preventDefault();
		}
	}
}
