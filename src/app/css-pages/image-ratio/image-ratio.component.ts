import { Component } from '@angular/core';

@Component({
	selector: 'app-image-ratio',
	standalone: true,
	imports: [],
	templateUrl: './image-ratio.component.html',
	styleUrl: './image-ratio.component.scss',
})
export class ImageRatioComponent {
	htmlCode = '<div class="image"></div>';
	cssCode =
		'.image { \n' +
		'   width: 300px; \n' +
		'   height: 300px; \n' +
		"   background: url('/assets/image-masking/image_1.jpg'); \n" +
		'   background-size: cover; \n' +
		'   background-repeat: no-repeat; \n' +
		'} \n' +
		'.image::before { \n' +
		"   background: url('/assets/image-masking/image_2.jpg'); \n" +
		'   mix-blend-mode: screen; \n' +
		"   content: ''; \n" +
		'   display: block; \n' +
		'   width: 300px; \n' +
		'   height: 300px; \n' +
		'}; \n';

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
