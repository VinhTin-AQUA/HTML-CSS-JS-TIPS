import { Component } from '@angular/core';

@Component({
  selector: 'app-not-and-hover',
  standalone: true,
  imports: [],
  templateUrl: './not-and-hover.component.html',
  styleUrl: './not-and-hover.component.scss'
})
export class NotAndHoverComponent {
  htmlCode = `
<div id="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
</div>
  `;

	cssCode = `
        #container {
            display: inline-block;
            background-color: #fecaca;
            padding: 50px;
            border-radius: 5px;
        }

        .box {
            display: inline-block;
            width: 200px;
            height: 200px;
            background-color: #166534;
            border-radius: 5px;
            padding: 5px;
            color: white;
            transition: all 500ms;
        }

        #container:hover .box:not(:hover) {
            transform: scale(0.85);
            opacity: 0.7;
            background-color: #f59e0b;
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
