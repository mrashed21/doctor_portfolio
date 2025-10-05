import CTA from "../AboutMe/CTA";

const MapAndCtaSection = () => {
  const mapPlaceholderUrl = "/map_ss.png";

  return (
    <section id="map-and-cta" className="relative w-full overflow-hidden ">
      <div className="w-full h-[500px]">
        <img
          src={mapPlaceholderUrl}
          alt="Map showing 121 King Street location"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-0 w-full">
        <CTA />
      </div>
    </section>
  );
};

export default MapAndCtaSection;
