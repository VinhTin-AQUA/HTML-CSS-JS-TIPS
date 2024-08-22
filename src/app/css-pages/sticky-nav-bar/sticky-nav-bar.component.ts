import { Component } from '@angular/core';

@Component({
	selector: 'app-sticky-nav-bar',
	standalone: true,
	imports: [],
	templateUrl: './sticky-nav-bar.component.html',
	styleUrl: './sticky-nav-bar.component.scss',
})
export class StickyNavBarComponent {
	htmlCode = `
  <div id="text-container">
    <p>
      Ea odit temporibus et et sed. Officiis repudiandae aut. Molestiae odio qui nisi
      architecto non. Quia sapiente qui ipsa sapiente. Ipsa aspernatur nobis. Officia
      quasi molestiae similique doloribus voluptatem. Quia illum qui autem vel qui. Illum
      non et quis autem non omnis. Commodi rem maxime et beatae asperiores dolorem autem
      sit consectetur. Alias alias necessitatibus aut sit. Ipsum error consectetur fugiat
      voluptas. Adipisci illo cumque quam et.
    </p>

    <p>
      Ea odit temporibus et et sed. Officiis repudiandae aut. Molestiae odio qui nisi
      architecto non. Quia sapiente qui ipsa sapiente. Ipsa aspernatur nobis. Officia
      quasi molestiae similique doloribus voluptatem. Quia illum qui autem vel qui. Illum
      non et quis autem non omnis. Commodi rem maxime et beatae asperiores dolorem autem
      sit consectetur. Alias alias necessitatibus aut sit. Ipsum error consectetur fugiat
      voluptas. Adipisci illo cumque quam et.
    </p>

    <div id="sticky-nav">Hello world 💚💚</div>

    <p>
      Ea odit temporibus et et sed. Officiis repudiandae aut. Molestiae odio qui nisi
      architecto non. Quia sapiente qui ipsa sapiente. Ipsa aspernatur nobis. Officia
      quasi molestiae similique doloribus voluptatem. Quia illum qui autem vel qui. Illum
      non et quis autem non omnis. Commodi rem maxime et beatae asperiores dolorem autem
      sit consectetur. Alias alias necessitatibus aut sit. Ipsum error consectetur fugiat
      voluptas. Adipisci illo cumque quam et.
    </p>
    <p>
      Ea odit temporibus et et sed. Officiis repudiandae aut. Molestiae odio qui nisi
      architecto non. Quia sapiente qui ipsa sapiente. Ipsa aspernatur nobis. Officia
      quasi molestiae similique doloribus voluptatem. Quia illum qui autem vel qui. Illum
      non et quis autem non omnis. Commodi rem maxime et beatae asperiores dolorem autem
      sit consectetur. Alias alias necessitatibus aut sit. Ipsum error consectetur fugiat
      voluptas. Adipisci illo cumque quam et.
    </p>
  </div>
  `;

	cssCode = `
    #sticky-nav {
      background-color: greenyellow;
      padding: 20px;
      border-radius: 10px;
      position: sticky;
      top: 0px;
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
