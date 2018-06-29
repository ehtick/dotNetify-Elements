import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import Element from '../core/Element';
import * as utils from '../utils';

const ImageComponent = styled.img``;

export class Image extends Element {
   static propTypes = {
      // Identifies the associated view model property.
      id: PropTypes.string,

      // Image source.
      src: PropTypes.string
   };

   static componentTypes = {
      ImageComponent: ImageComponent
   };

   static typeName = 'Image';

   render() {
      const [ _Image ] = this.resolveComponents(Image);
      const { fullId, src, ...props } = this.attrs;
      const _src = this.value || src;

      return _src && <_Image src={_src} {...props} />;
   }
}
