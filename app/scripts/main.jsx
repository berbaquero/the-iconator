import dragDrop from 'drag-drop/buffer';
import imageSizes from './modules/imageSizes.js';
import ImageResult from './components/ImageResult.jsx';
import pica from 'pica';
import React from 'react';

const dropContainerClass = '.js-image-drop-area',
	  dropContainer = document.querySelector(dropContainerClass);

dragDrop(dropContainerClass, (files) => {
	const file = files[0];
	const base64Image = file.toString('base64');

	dropContainer.style.backgroundImage = 'url(data:image/png;base64,' + base64Image + ')';

	renderImageFromCanvas(base64Image);
});

const renderImageFromCanvas = (base64) => {

	const mainSize = imageSizes[imageSizes.length - 1];

	const image = new Image();
	image.onload = () => {
		// Initialize first Canvas
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');
		canvas.height = mainSize;
		canvas.width = mainSize;
		context.drawImage(image, 0, 0);

		renderFromCanvas(canvas, imageSizes.length);
	};
	image.src = 'data:image/png;base64,' + base64;
};

const renderFromCanvas = (initialCanvas, sizeIndex) => {
	if (sizeIndex < 1) {
		return;
	}

	// Create new, smaller canvas
	const newSize = imageSizes[sizeIndex - 1];
	const newSizeCanvas = document.createElement('canvas');
	newSizeCanvas.height = newSize;
	newSizeCanvas.width = newSize;

	// Run the down-scaling
	pica.resizeCanvas(
		initialCanvas, // source
		newSizeCanvas, // target
		{ alpha: true }, // transparency support
		(err) => {
			// When done
			printImage(newSize, newSizeCanvas);
			 // Prepare for next size
			sizeIndex--;
			// and go again
			renderFromCanvas(newSizeCanvas, sizeIndex);
		});
};

// Prints the canvas to the Image element on the DOM
const printImage = (size, canvas) => {
	React.render(
		<ImageResult size={size}
					 dataURL={canvas.toDataURL('image/png')} />,
		document.getElementsByClassName('js-result-' + size)[0]);
};
