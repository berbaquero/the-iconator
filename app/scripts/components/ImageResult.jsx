import React from 'react';

class ImageResult extends React.Component {

	render() {
		return (
			<a href={this.props.dataURL}
			   className='result-item__img'
			   download={'icon' + this.props.size + '.png'}
			   title='Click to download your icon'>

				<img src={this.props.dataURL}
					 width={this.props.size}
					 height={this.props.size}/>
			</a>
		)
	}
}

export default ImageResult;
