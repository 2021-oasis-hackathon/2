import Geocode from 'react-geocode';

Geocode.setApiKey('');
Geocode.setLanguage('ko');
Geocode.setRegion('ko');
Geocode.enableDebug();

const GoogleMap = async ({ currentAddr }) => {
  return Geocode.fromAddress('광주광역시 북구 오룡동 첨단과기로 123')
    .then((response) => {
      const { lat, lng } = response.results[0].geometry.location;
      return { lat, lng };
    })
    .catch((err) => console.log(err));
};

export default GoogleMap;
