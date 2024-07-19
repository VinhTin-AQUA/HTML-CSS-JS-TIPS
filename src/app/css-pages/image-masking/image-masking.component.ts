import { Component } from '@angular/core';

@Component({
	selector: 'app-image-masking',
	standalone: true,
	imports: [],
	templateUrl: './image-masking.component.html',
	styleUrl: './image-masking.component.scss',
})
export class ImageMaskingComponent {
	htmlCode = `<div class="flex justify-center">
            <div class="image-container">
                <img src="/assets/cat.jpg" alt="">
            </div>
        </div>`;
	cssCode = `.image-container {
    width: 50%;
    aspect-ratio: 16/9;
    overflow: hidden;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;

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
