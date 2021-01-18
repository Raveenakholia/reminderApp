import { IMAGES } from '../Constants/Constant';

const ImageReducer = (state = [], action) => {
	if (action.type === IMAGES.LOAD_SUCCESS) {
		return [...state, ...action.images];
	}

	return state;
};

export default ImageReducer;
