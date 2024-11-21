const ParkImage = ({ nationalPark }: { nationalPark: string }) => {
    let imageSrc;
    // Set image source based on the national park
    if (nationalPark === 'Mount Rainier National Park') {
      imageSrc = '/mount_rainier.jpeg';
    } else if (nationalPark === 'Olympic National Park') {
      imageSrc = '/olympic.jpeg';
    } else if (nationalPark === 'North Cascades National Park') {
      imageSrc = '/north_cascades.jpeg';
    }
    return <img src={imageSrc} alt={nationalPark} />;
  };

  export default ParkImage;