import dragDrop from 'drag-drop/buffer';
import renderImage from './modules/renderImage.js';
import imageSizes from './modules/imageSizes.js';

const dropContainer = '.js-image-drop-area';

dragDrop(dropContainer, (files) => {
	const file = files[0];
	const base64Image = file.toString('base64');

	document.querySelector(dropContainer).style.backgroundImage = 'url(data:image/png;base64,' + base64Image + ')';

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

	const newSize = imageSizes[sizeIndex - 1];
	const newSizeCanvas = document.createElement('canvas');
	const newSizeContext = newSizeCanvas.getContext('2d');

	newSizeCanvas.height = newSize;
	newSizeCanvas.width = newSize;

	newSizeContext.drawImage(
		initialCanvas,
		0, 0, initialCanvas.width, initialCanvas.height,
		0, 0, newSizeCanvas.width, newSizeCanvas.height
	);

	const resultImage = document.querySelector('.js-result-' + newSize);
	resultImage.src = newSizeCanvas.toDataURL('image/png');

	sizeIndex--;

	renderFromCanvas(newSizeCanvas, sizeIndex);
};
