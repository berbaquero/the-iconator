import React from 'react';
import Root from './root';
import imageSizes from '../scripts/modules/imageSizes.js';

const Index = React.createClass({

	scripts: ['/dist/main.js'],
	styles: ['/dist/main.css'],
	title: 'The Iconator',

	render() {

		const resultImages = imageSizes.map((size, index) =>
				<img className={'js-result-' + size + ' ui-bordered ui-tert-color ui-margins'}
					 width={size}
					 height={size}
					 key={index}
					 src="data:image/jpeg;base64,0=="/>
		);

		return (
			<Root scripts={this.scripts}
				  styles={this.styles}
				  title={this.title}>

				<header>
					<h1>{this.title}</h1>
				</header>

				<section>
					<div className="js-image-drop-area drop-area ui-bordered">
					</div>
					<input className="js-main-button-input"
						   type="file"/>
				</section>

				<section className="results">
					{resultImages}
				</section>

			</Root>
		)
	}
});

export default Index;
