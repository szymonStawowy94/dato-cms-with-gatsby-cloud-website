import React from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';


const StyledWrapper = styled.div`
	height: 450px;
`;

const SingleMap = ({ lat, lng }) => {
	const center = { lat, lng };
	const googleMapsApiKey = process.env.GATSBY_GOOGLE_MAPS_API_KEY || '';
	console.log(process.env.GATSBY_GOOGLE_MAPS_API_KEY);
	console.log(googleMapsApiKey)
	return (
		<StyledWrapper>
			<h1>{googleMapsApiKey}</h1>
			<h1>{process.env.GATSBY_GOOGLE_MAPS_API_KEY}</h1>
			<GoogleMapReact
				bootstrapURLKeys={{ key: googleMapsApiKey}}
				defaultCenter={center}
				defaultZoom={17}
				center={center}
			>
			</GoogleMapReact>
		</StyledWrapper>
	);
};

export default SingleMap;
