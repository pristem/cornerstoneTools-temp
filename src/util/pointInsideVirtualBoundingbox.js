import external from '../externalModules.js';

/**
 * Returns true if a point is enclosed within a virtual bounding box based on distance threshold.
 * @export @public @method
 * @name pointInsideVirtualBoundingBox
 *
 * @param  {Object} handle The handle containing the boundingBox.
 * @param  {Object} coords The coordinate to check.
 * @param  {number} distanceThreshold The distance threshold.
 * @returns {boolean} True if the point is enclosed within the virtual bounding box.
 */
const pointInsideVirtualBoundingBox = (handle, coords, distanceThreshold = 0) => {
  if (!handle.boundingBox) {
    return false;
  }

  const virtualBoundingBox = {
    left: handle.boundingBox.left - distanceThreshold,
    top: handle.boundingBox.top - distanceThreshold,
    width: handle.boundingBox.width + distanceThreshold * 2,
    height: handle.boundingBox.height + distanceThreshold * 2
  };

  return external.cornerstoneMath.point.insideRect(coords, virtualBoundingBox);
};

export default pointInsideVirtualBoundingBox;
