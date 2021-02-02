import React from 'react';
import styled from 'styled-components';
import SimpleMap from './SimpleMap';

const StyledModuleWrapper = styled.div`
	margin-bottom: 100px;
	position: relative;
	width: 100%;
	z-index: 11;
  	height: 450px;

`;

const MapModule = () => {
	return (
		<StyledModuleWrapper>
			<SimpleMap lng={20} lat={50} />
		</StyledModuleWrapper>
	);
}

export default MapModule;
