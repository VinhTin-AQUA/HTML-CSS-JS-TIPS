import { Component, ElementRef } from '@angular/core';

@Component({
	selector: 'app-image-blob-viewer',
	standalone: true,
	imports: [],
	templateUrl: './image-blob-viewer.component.html',
	styleUrl: './image-blob-viewer.component.scss',
})
export class ImageBlobViewerComponent {
  blobUrl: string = '';
	htmlCode = `
        <div>
            <input (change)="onChange($event)" type="file" id="fileInput" />
        </div>

        <div>
            <img id="previewImage" alt="Preview" [src]="blobUrl"  />
        </div>
  `;

	jsCode = `
  onChange(event: any) {
    const file = event.target.files[0];
    const blobUrl = URL.createObjectURL(file); // Tạo Blob URL
    this.blobUrl = blobUrl
  }
    `;

	onChange(event: any) {
		const file = event.target.files[0];
		const blobUrl = URL.createObjectURL(file); // Tạo Blob URL
    this.blobUrl = blobUrl
	}

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
				.writeText(this.jsCode)
				.then(() => {
					console.log('Text copied to clipboard successfully!');
				})
				.catch(err => {
					console.error('Could not copy text: ', err);
				});
		}
	}
}
