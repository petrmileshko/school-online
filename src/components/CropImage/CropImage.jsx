import React from 'react';
import ReactCrop from 'react-image-crop';

import 'react-image-crop/dist/ReactCrop.css';

class CropImage extends React.Component {
    
    state = {
        imgSrc: '../../img/logo.png',
        crop: {
            aspect: 1/1,
            unit: 'px',
            width: 150,
            height: 150
        }
    }

    render () {

        return (
            <>
                <ReactCrop src={ this.state.imgSrc } crop={ this.state.crop } />
            </>
        )
    }

}

export default CropImage;