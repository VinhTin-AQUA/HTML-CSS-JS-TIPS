import { Routes } from '@angular/router';
import { ImageMaskingComponent } from './css-pages/image-masking/image-masking.component';
import { GridResponsiveComponent } from './css-pages/grid-responsive/grid-responsive.component';
import { StripesBackgroundComponent } from './css-pages/stripes-background/stripes-background.component';
import { StrokeTextComponent } from './css-pages/stroke-text/stroke-text.component';
import { CustomCursorComponent } from './css-pages/custom-cursor/custom-cursor.component';
import { ImageRatioComponent } from './css-pages/image-ratio/image-ratio.component';
import { TextEmphasisComponent } from './css-pages/text-emphasis/text-emphasis.component';
import { LiMakerComponent } from './css-pages/li-maker/li-maker.component';
import { LineClampComponent } from './css-pages/line-clamp/line-clamp.component';
import { CustomScrollBarComponent } from './css-pages/custom-scroll-bar/custom-scroll-bar.component';
import { SmoothComponent } from './html-pages/smooth/smooth.component';
import { CheckboxComponent } from './css-pages/checkbox/checkbox.component';
import { NotAndHoverComponent } from './css-pages/not-and-hover/not-and-hover.component';
import { BackdropFilterBlurComponent } from './css-pages/backdrop-filter-blur/backdrop-filter-blur.component';
import { DropShadowComponent } from './css-pages/drop-shadow/drop-shadow.component';
import { StickyNavBarComponent } from './css-pages/sticky-nav-bar/sticky-nav-bar.component';

export const routes: Routes = [
	{
		path: 'css',
		children: [
			{ path: 'image-masking', component: ImageMaskingComponent, title: 'Image Masking' },
			{
				path: 'grid-responsive',
				component: GridResponsiveComponent,
				title: 'Grid Responsive',
			},
			{
				path: 'stipes-background',
				component: StripesBackgroundComponent,
				title: 'Stipes Background',
			},
			{ path: 'stroke-text', component: StrokeTextComponent, title: 'Stoke Text' },
			{ path: 'custom-cursor', component: CustomCursorComponent, title: 'Custom Cursor' },
			{ path: 'image-ratio', component: ImageRatioComponent, title: 'Image Ratio' },
			{ path: 'text-emphasis', component: TextEmphasisComponent, title: 'Text Emphasis' },
			{ path: 'li-marker', component: LiMakerComponent, title: 'Li Maker' },
			{ path: 'line-clamp', component: LineClampComponent, title: 'Line Clamp' },
			{
				path: 'custom-scroll-bar',
				component: CustomScrollBarComponent,
				title: 'Custom Scroll',
			},
			{ path: 'check-box', component: CheckboxComponent, title: 'Checkbox' },
			{ path: 'not-and-hover', component: NotAndHoverComponent, title: 'Note And Hover' },
			{ path: 'backdrop-filter-blur', component: BackdropFilterBlurComponent, title: 'Backdrop Filter Blur' },
			{ path: 'drop-shadow', component: DropShadowComponent, title: 'Drop Shadow' },
			{ path: 'sticky-nav-bar', component: StickyNavBarComponent, title: 'Sticky Navbar' },
			{ path: '**', redirectTo: 'image-masking' },
		],
	},
	{ path: 'js', children: [] },
	{
		path: 'html',
		children: [
			{ path: 'smooth-behavior', component: SmoothComponent, title: 'smooth behavior' },
			{ path: '**', redirectTo: 'smooth-scroll' },
		],
	},
	{ path: '**', redirectTo: 'css' },
];
