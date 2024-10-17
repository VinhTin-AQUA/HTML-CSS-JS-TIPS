import { Component } from '@angular/core';

@Component({
	selector: 'app-custom-scroll-bar',
	standalone: true,
	imports: [],
	templateUrl: './custom-scroll-bar.component.html',
	styleUrl: './custom-scroll-bar.component.scss',
})
export class CustomScrollBarComponent {
	htmlCode = `<div id="container">
  Odio nobis enim. Dolorum perferendis ut aut necessitatibus laudantium ullam omnis nisi
  molestiae. Quidem nihil totam accusantium doloribus. Ab esse molestiae earum omnis.
  Labore non vero in in et. Illo et maxime placeat quasi aut facilis aut inventore autem.
  Molestias aperiam voluptatem voluptates voluptas quia. Placeat assumenda in aliquam
  repellendus consequatur reiciendis eius laborum. Eaque possimus fugiat ducimus quo quo
  impedit. Amet inventore unde. Non illo dolorem rerum deleniti ut. Recusandae quis
  reiciendis dolor porro odio delectus aut cupiditate. Voluptas iste est non molestiae et
  illo ut officiis. Et maxime voluptatum et. Dolorem omnis eveniet officia mollitia veniam
  vel. Repellat provident veniam.
</div>`;

	cssCode = `
div::-webkit-scrollbar {
	width: 5px; /* width of the entire scrollbar */
	height: 5px;
}

div::-webkit-scrollbar-track {
	background: #df1818; /* color of the tracking area */
}

div::-webkit-scrollbar-thumb {
	background: #09cf55; /* color of the scroll thumb */
}

div::-webkit-scrollbar-thumb:hover {
	background: #210be7; /* color of the scroll thumb on hover */
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
