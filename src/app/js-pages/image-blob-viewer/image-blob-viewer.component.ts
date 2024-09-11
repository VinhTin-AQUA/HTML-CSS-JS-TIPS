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
document.getElementById('fileInput').addEventListener('change', function (event) {
	const file = event.target.files[0]; // Lấy tệp đầu tiên từ input
	const blobUrl = URL.createObjectURL(file); // Tạo Blob URL

	// Gán URL cho thẻ img để hiển thị hình ảnh
	document.getElementById('previewImage').src = blobUrl;
});
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
