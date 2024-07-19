import { Component } from '@angular/core';

@Component({
	selector: 'app-grid-responsive',
	standalone: true,
	imports: [],
	templateUrl: './grid-responsive.component.html',
	styleUrl: './grid-responsive.component.scss',
})
export class GridResponsiveComponent {
	htmlCode =
		'<div class="wrapper"></div> \n' +
		'  <div class="item">1</div> \n' +
		'  <div class="item">2</div> \n' +
		'  <div class="item">3</div> \n' +
		'  <div class="item">4</div> \n' +
		'  <div class="item">5</div> \n' +
		'  <div class="item">6</div> \n' +
		'  <div class="item">7</div> \n' +
		'  <div class="item">8</div> \n' +
		'</div> \n';

	cssCode =
		'.wrapper { \n' +
		'   display: grid; \n' +
		'   grid-template-columns: repeat(auto-fit, minmax(200px,1fr)); \n' +
		'   gap: 1rem; \n' +
		'} \n' +
		'.item { \n' +
		'   background-color: red; \n' +
		'} \n';

	copyText(flag:string): void {

		if(flag === 'html') {
			navigator.clipboard
			.writeText(this.htmlCode)
			.then(() => {
				console.log('Text copied to clipboard successfully!');
			})
			.catch(err => {
				console.error('Could not copy text: ', err);
			});
		} else if(flag === 'css') {
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
