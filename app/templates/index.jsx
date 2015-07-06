import React from 'react';
import Root from './root';
import imageSizes from '../scripts/modules/imageSizes.js';

const Index = React.createClass({

	scripts: ['/dist/main.js'],
	styles: ['/dist/main.css'],
	title: 'The Iconator',
	description: 'Simply resize your icons for Firefox OS apps',

	render() {

		const resultImages = imageSizes.map((size, index) =>
				<div style={{display: 'inline-block', verticalAlign: 'top'}}
					 className="ui-margins-y ui-margin-r">

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
					<span className='header-title'>{this.title}</span>
				</header>

				<section className="drop-area__container ui-centered">
					<div className="ui-sec-color ui-margins-y">Drop your icon here</div>

					<div className="js-image-drop-area drop-area ui-bordered ui-bordered--dash ui-sec-color"
						 title="Drop your icon here">
					</div>
				</section>

				<div className="description ui-margins-y ui-bordered-b">
					Results
					<span className="ui-sec-color"
						  style={{textAlign: 'right', width: '100%'}}>Click the icons to download them</span>
				</div>

				<section className="results">
					{resultImages}
				</section>

			</Root>
		)
	}
});

export default Index;
