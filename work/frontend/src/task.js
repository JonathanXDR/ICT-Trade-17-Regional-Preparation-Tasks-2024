/**
 * STRING_COMPETITION STRING_YEAR - STRING_TRADE - STRING_TITLE
 * Frontend - Task 2
 *
 * Your task is to implement all methods marked with @todo.
 * You are allowed to add additional methods and variables to this file if you need to.
 * You are not allowed to change the signature of or delete existing methods.
 */

/**
 * @todo
 *
 * Format the given camel case string prettily.
 * All words and numbers should be capitalized
 * and separated by a space.
 *
 * For instance:
 * "boxBlur7"
 * should become
 * "Box Blur 7"
 *
 * @param {string} string
 * @returns {string}
 */
export function formatString(string) {
    return string
}

/**
 * @todo
 *
 * Format the given string to camel case.
 *
 * For instance:
 * "Box Blur 7"
 * should become
 * "boxBlur7"
 *
 * @param {string} string
 * @returns {string}
 */
export function camelCaseString(string) {
    return string
}

/**
 * @todo
 *
 * Format the given camel case filters prettily.
 * All words and numbers of every filter should
 * be capitalized and separated by a space.
 * Finally, join all filters with a comma
 * and a space and return the result.
 *
 * For instance:
 * ["boxBlur7", "sobelLeftRight"]
 * should become
 * "Box Blur 7, Sobel Left Right"
 *
 * @param {string[]} filters
 * @returns {string}
 */
export function prepareFiltersForCopy(filters) {
    return ''
}

/**
 * @todo
 *
 * Split the given string at every comma and space.
 * Then, format each filter to camel case and
 * return the result as an array.
 *
 * For instance:
 * "Box Blur 7, Sobel Left Right"
 * should become
 * ["boxBlur7", "sobelLeftRight"]
 *
 * @param {string} string
 * @returns {string[]}
 */
export function parseFiltersFromCopy(string) {
    return []
}

/**
 * @todo
 *
 * Format the given camel case filters prettily.
 * All words and numbers of every filter should
 * be capitalized and separated by a space.
 * Finally, join all filters with a comma
 * and a space and copy the result to the
 * clipboard using the Clipboard API.
 *
 * For instance:
 * ["boxBlur7", "sobelLeftRight"]
 * should become
 * "Box Blur 7, Sobel Left Right"
 *
 * @param {string[]} filters
 * @returns {Promise<void>}
 */
export function copyFiltersToClipboard(filters) {
    return Promise.resolve()
}

/**
 * @todo
 *
 * Remove the list item with class "filter" at the given index from
 * the unordered list. Make sure to remove the list item from
 * the DOM but ignore any template elements inside the list.
 *
 * @param {HTMLUListElement} list
 * @param {number} index
 * @returns {void}
 */
export function removeFilterElement(list, index) {
    //
}

/**
 * @todo
 *
 * Call the given callback function for each filter in the filters
 * array. The first argument of the callback function should be
 * the imageData and the second argument should be the current
 * filter. After the first call, the imageData should be the
 * return value of the previous call. Finally, return the
 * data returned by the last callback function call.
 *
 * @param {*} imageData
 * @param {string[]} filters
 * @param {function} callback
 * @returns {*}
 */
export function applyFilters(imageData, filters, callback) {
    return imageData
}

/**
 * @todo
 *
 * Correctly map a 3D array of
 * RGBA values to a 2D array
 * of grayscale values.
 *
 * The grayscale value of a pixel is the
 * average of the RGB values of that
 * pixel. Round the value of the
 * given pixel up or down
 * respectively.
 *
 * The alpha value of
 * a pixel should
 * be ignored.
 *
 * E.g.:
 * [[[255, 0, 0, 255], [0, 255, 0, 255]], [[0, 0, 255, 255], [255, 255, 255, 255]]]
 * should be mapped to:
 * [[85, 85], [85, 255]]
 *
 * @param {number[][][]} imageData
 * @returns {number[][]}
 */
export function imageDataToGrayscaleImageData(imageData) {
    return imageData
}

/**
 * @todo
 *
 * Correctly map a 2D array of
 * grayscale values to a 3D
 * array of RGBA values.
 *
 * The grayscale value of a pixel
 * should be used for the RGB
 * values of that pixel.
 *
 * The alpha value of
 * a pixel should
 * always be 255.
 *
 * E.g.:
 * [[85, 85], [85, 255]]
 * should be mapped to:
 * [[[85, 85, 85, 255], [85, 85, 85, 255]], [[85, 85, 85, 255], [255, 255, 255, 255]]]
 *
 * @param {number[][]} grayscaleImageData
 * @returns {number[][][]}
 */
export function grayscaleImageDataToImageData(grayscaleImageData) {
    return grayscaleImageData
}

/**
 * @todo
 *
 * Correctly apply the kernel to the given grayscale image data.
 * For each pixel, the kernel needs to be applied to the pixel
 * and its neighboring pixels. Round the final value of the
 * given pixel up or down respectively.
 * Check the readme for more information.
 *
 * @param {number[][]} imageData
 * @param {number[][]} kernel
 * @returns {number[][]}
 */
export function applyKernel(imageData, kernel) {
    return imageData
}
