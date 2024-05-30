import zoneData from "@/lib/data/zoneData.json";

export const useFilterAreaData = (params: {
  [key: string]: string | string[] | undefined;
}) => {
  const areas = zoneData.items;

  const searchQuery =
    typeof params.areaName === "string"
      ? params.areaName.toLowerCase()
      : undefined;

  const selectedCountries =
    typeof params.countries === "string"
      ? decodeURIComponent(params.countries).toLowerCase().split(",")
      : [];

  const filteredAreas = areas.filter((area) => {
    let includedArea = true;
    if (searchQuery) {
      includedArea = area.name.toLowerCase().includes(searchQuery);
    }
    if (includedArea && selectedCountries.length > 0) {
      includedArea = selectedCountries.includes(area.country);
    }
    return includedArea;
  });

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

  return { filteredAreas, selectedCountries };
};
