import React from 'react';
import Root from './root';
import imageSizes from '../scripts/modules/imageSizes.js';

const Index = React.createClass({

	scripts: ['dist/main.js'],
	styles: ['dist/main.css'],
	title: 'The Iconator',
	description: 'Simple tool to resize your icons for Firefox OS apps',

	render() {

		const resultImages = imageSizes.map((size, index) =>
				<div style={{display: 'inline-block', verticalAlign: 'top'}}
					 className="ui-margins-y ui-margin-r"
					 key={index}>

					<div className="result-item__label">
						{size + 'x' + size}
					</div>

					<div className={'js-result-' + size + ' ui-bordered ui-bg-main-alpha result-item'}
						 style={{width: size, height: size}}
						 key={index}></div>
				</div>
		);

		return (
			<Root scripts={this.scripts}
				  styles={this.styles}
				  title={this.title}
				  description={this.description}>

				<header className='ui-bordered-b'>
					<a className='header-title ui-heading ui-link'
					   href='/'>{this.title}</a>
				</header>

				<section className="drop-area__container ui-centered ui-full-width">
					<div className="ui-sec-color ui-margins-y">1. Drop your icon here</div>

					<div className="js-image-drop-area drop-area ui-bordered ui-bordered--dash ui-sec-color"
						 title="Drop your icon here">
					</div>
				</section>

				<div className="description ui-margins-y ui-bordered-b">
					<span className="ui-sec-color">2. Click the resulting icons to download them</span>
				</div>

				<section className="results">
					{resultImages}
				</section>

				<footer>
					<div>The Iconator — Swiftly and easily generate all the icon sizes for your Firefox Open Web App.</div>
					<div className='ui-margins-y'>
						<a className='ui-heading ui-link'
						   href='http://berbaquero.com/'>Bernardo Baquero Stand</a>
					</div>
				</footer>

			</Root>
		)
	}
});

export default Index;
