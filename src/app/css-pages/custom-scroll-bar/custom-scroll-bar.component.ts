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

	cssCode = `/* Custom scrollbar cho trình duyệt WebKit */
::-webkit-scrollbar {
    width: 12px; /* Chiều rộng của thanh cuộn */
}

::-webkit-scrollbar-track {
    background: #e94c4c; /* Màu nền của track */
}

::-webkit-scrollbar-thumb {
    background: #2af04b; /* Màu của thumb */
    border-radius: 6px; /* Bo góc của thumb */
}

::-webkit-scrollbar-thumb:hover {
    background: #555; /* Màu của thumb khi hover */
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
