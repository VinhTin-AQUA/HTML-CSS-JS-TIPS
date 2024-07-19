import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-sidebar',
	standalone: true,
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
	readonly cssMenus = [
		{
			route: '/css/image-masking',
			title: 'Image Masking CSS',
			name: 'Image Masking',
		},
		{
			route: '/css/grid-responsive',
			title: 'Grid Responsive CSS',
			name: 'Grid Responsive',
		},
		{
			route: '/css/stipes-background',
			title: 'Stipes Background CSS',
			name: 'Stipes Background',
		},
		{
			route: '/css/stroke-text',
			title: 'Stroke Text CSS',
			name: 'Stroke Text',
		},
		{
			route: '/css/custom-cursor',
			title: 'Custom Cursor',
			name: 'Custom Cursor',
		},
		{
			route: '/css/image-ratio',
			title: 'Image Ratio',
			name: 'Image Ratio',
		},
		{
			route: '/css/text-emphasis',
			title: 'Text Emphasis',
			name: 'Text Emphasis',
		},
		{
			route: '/css/li-marker',
			title: 'Li maker',
			name: 'Li maker',
		}, // 
		{
			route: '/css/line-clamp',
			title: 'Line Clamp',
			name: 'Line Clamp',
		},
		{
			route: '/css/custom-scroll-bar',
			title: 'Custom scroll bar',
			name: 'Custom scroll bar',
		},
		{
			route: '/css/check-box',
			title: 'Checkbox',
			name: 'Checkbox',
		},
	];

	readonly htmlMenus = [
		{
			route: '/html/smooth-behavior',
			title: 'Smooth Behavior CSS',
			name: 'Smooth Behavior',
		},
	];

	readonly jsMenus = [
		{
			route: '/css/image-masking',
			title: 'Image Masking CSS',
			name: 'Image Masking',
		},
	];

	menuActivated = 'css';

	constructor() {}

	onChangeMenuTopic(event: any) {
		// console.log(event.target.value);
		this.menuActivated = event.target.value;
	}
}
