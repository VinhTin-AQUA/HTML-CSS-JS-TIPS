import { Component } from '@angular/core';

@Component({
	selector: 'app-line-clamp',
	standalone: true,
	imports: [],
	templateUrl: './line-clamp.component.html',
	styleUrl: './line-clamp.component.scss',
})
export class LineClampComponent {
	htmlCode = `
  <div>
      Ad molestiae culpa laboriosam vero non. Corporis modi architecto velit recusandae. Est ipsa odio accusantium ut veritatis aut consectetur doloribus. Voluptatibus voluptatem est pariatur illo dicta quisquam saepe. Aut corrupti ab et quidem.
      Esse accusantium minima et veniam alias rerum nostrum officiis incidunt. Distinctio optio voluptatem amet veritatis quia error dolor officiis aut. Facere ea voluptatum rem vel dolores ratione. Voluptas voluptas et tenetur nobis rerum. Qui aliquam consequatur eum qui eveniet id fugiat.
  </div>
  `;
	cssCode = `.clamp {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-clamp: 3;
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
