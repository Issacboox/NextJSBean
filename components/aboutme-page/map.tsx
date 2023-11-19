// "use client";
// import React, { useEffect } from "react";
// import { Loader } from '@googlemaps/js-api-loader';

// export default function Map() {
//     const mapRef = React.useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const initMap = async () => {
//             const loader = new Loader({
//                 apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
//                 version: 'weekly',
//             });

//             const { Map } = await loader.importLibrary('maps');

//             const position = {
//                 lat: 13.751944,
//                 lng: 100.503611
//             };

//             const mapOptions: google.maps.MapOptions = {
//                 center: position,
//                 zoom: 15,
//                 mapId: 'MY_NEXTJS_MAPID'
//             };

//             const map = new google.maps.Map(mapRef.current as HTMLDivElement, mapOptions);
//         };

//         initMap();
//     }, []);

//     return <div ref={mapRef}></div>;
// }
