import zoneData from "@/lib/data/zoneData.json";
export const useAreaData = (params: {
  [key: string]: string | string[] | undefined;
}) => {
  const areas = zoneData.items;

  const searchQuery =
    typeof params.areaName === "string"
      ? params.areaName.toLowerCase()
      : undefined;

  const selectedCountries =
    typeof params.countries === "string"
      ? decodeURIComponent(params.countries).split(",")
      : [];

  const filteredAreas = areas.filter(
    (area) =>
      selectedCountries.length == 0 || selectedCountries.includes(area.country)
  );

  let sortedAreas = [...filteredAreas];

  if (params.sortby && params.order) {
    const orderBy = params.sortby;
    const orderDirection = params.order;
    if (orderBy === "videoCount") {
      sortedAreas.sort((a, b) =>
        orderDirection === "asc"
          ? b.video_count - a.video_count
          : a.video_count - b.video_count
      );
    }
  }

  return { areas, selectedCountries, searchQuery, filteredAreas, sortedAreas };
};
