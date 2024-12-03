/**
 * A React functional component that displays an image representing a national park.
 * Dynamically sets the image source based on the provided national park name.
 * 
 * @param nationalPark - The name of the national park to display an image for.
 * @returns A JSX element containing an image of the specified national park.
 */
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