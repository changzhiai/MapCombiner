
/**
 * Extracts waypoints from a Google Maps URL.
 * Assumes format: https://www.google.com/maps/dir/Waypoint1/Waypoint2/...
 * @param {string} url 
 * @returns {string[]} List of waypoints (decoded)
 */
export function extractWaypoints(url) {
  try {
    const urlObj = new URL(url);
    if (!urlObj.pathname.includes('/maps/dir/')) {
      return [];
    }

    // Path parts after /maps/dir/
    // Example: /maps/dir/New+York,+NY/Los+Angeles,+CA/@...
    let path = urlObj.pathname.split('/maps/dir/')[1];

    // Remove anything after @ or matching data params if they appear in path (rare but possible)
    // Actually @ marks the view parameters usually.
    if (path && path.includes('@')) {
      path = path.split('@')[0];
    }

    if (!path) return [];

    // Split by slash
    const parts = path.split('/').filter(p => p && p.trim() !== '');

    // Decode URI components
    return parts.map(p => decodeURIComponent(p));
  } catch (e) {
    console.error("Invalid URL", e);
    return [];
  }
}

export function combineMapUrls(urls, mergeOverlap = true) {
  if (!Array.isArray(urls) || urls.length === 0) return '';

  // Filter out empty strings to avoid issues
  const validUrls = urls.filter(u => u && u.trim() !== '');
  if (validUrls.length === 0) return '';

  if (validUrls.length === 1) return validUrls[0];

  let combinedPoints = extractWaypoints(validUrls[0]);

  for (let i = 1; i < validUrls.length; i++) {
    const nextPoints = extractWaypoints(validUrls[i]);

    if (nextPoints.length === 0) continue;

    if (mergeOverlap) {
      const lastP1 = combinedPoints[combinedPoints.length - 1];
      const firstP2 = nextPoints[0];

      // Simple string comparison (normalized)
      if (lastP1 && firstP2 && lastP1.trim() === firstP2.trim()) {
        combinedPoints = [...combinedPoints, ...nextPoints.slice(1)];
      } else {
        combinedPoints = [...combinedPoints, ...nextPoints];
      }
    } else {
      combinedPoints = [...combinedPoints, ...nextPoints];
    }
  }

  // Construct new URL
  const baseUrl = 'https://www.google.com/maps/dir/';
  const path = combinedPoints.map(p => encodeURIComponent(p)).join('/');

  return baseUrl + path;
}
