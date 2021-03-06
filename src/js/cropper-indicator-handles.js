// extend the class
Cropper.prototype.Handles = function (parent) {

	// PROPERTIES

	this.parent = parent;
	this.config = parent.config;

	// METHODS

	this.init = function () {
		var config = this.config;
		var a, b, name;
		// create the handles
		config.handles = {};
		for (a = 0, b = config.names.length; a < b; a += 1) {
			name = config.names[a];
			config.handles[name] = document.createElement('span');
			config.handles[name].className = 'cr-' + name;
			config.overlay.appendChild(config.handles[name]);
		}
		// return the object
		return this;
	};

	this.left = function (distance) {
		var config = this.config;
		var horizontal, left, right, limit;
		// measure the movement in fractions of the dimensions
		horizontal = distance / config.width;
		// calculate the new crop fractions
		left = config.left + horizontal;
		right = config.right + horizontal;
		limit = config.right - config.minimum;
		// if all are within limits
		if (left >= 0 && left < limit) {
			// apply the movement to the crop fractions
			config.left = left;
		}
	};

	this.top = function (distance) {
		var config = this.config;
		var vertical, top, bottom, limit;
		// measure the movement in fractions of the dimensions
		vertical = distance / config.height;
		// calculate the new crop fractions
		top = config.top + vertical;
		bottom = config.bottom + vertical;
		limit = config.bottom - config.minimum;
		// if all are within limits
		if (top >= 0 && top < limit) {
			// apply the movement to the crop fractions
			config.top = top;
		}
	};

	this.right = function (distance) {
		var config = this.config;
		var horizontal, left, right, limit;
		// measure the movement in fractions of the dimensions
		horizontal = distance / config.width;
		// calculate the new crop fractions
		left = config.left + horizontal;
		right = config.right + horizontal;
		limit = config.left + config.minimum;
		// if all are within limits
		if (right <= 1 && right > limit) {
			// apply the movement to the crop fractions
			config.right = right;
		}
	};

	this.bottom = function (distance) {
		var config = this.config;
		var vertical, top, bottom, limit;
		// measure the movement in fractions of the dimensions
		vertical = distance / config.height;
		// calculate the new crop fractions
		top = config.top + vertical;
		bottom = config.bottom + vertical;
		limit = config.top + config.minimum;
		// if all are within limits
		if (bottom <= 1 && bottom > limit) {
			// apply the movement to the crop fractions
			config.bottom = bottom;
		}
	};

	this.init();
	
};
