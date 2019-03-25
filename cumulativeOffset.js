
const CO_MARGIN     = 1;
const CO_PADDING    = 2;
const CO_BORDER     = 4;
/**
 * https://stackoverflow.com/a/1480137/5560682
 */
var cumulativeOffset = function(element, opt = CO_BORDER | CO_PADDING) {

    // const first = element;

    let top = 0, left = 0, i = 0;
    do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;

        if (opt & CO_MARGIN) {

            left    += parseInt(element.style.marginLeft, 10) || 0;
            top     += parseInt(element.style.marginTop, 10) || 0;
        }

        if (opt & CO_PADDING) {

            left    += parseInt(element.style.paddingLeft, 10) || 0;
            top     += parseInt(element.style.paddingTop, 10) || 0;
        }

        if (opt & CO_BORDER) {

            left    += parseInt(element.style.borderLeftWidth, 10) || 0;
            top     += parseInt(element.style.borderTopWidth, 10) || 0;
        }

        element = element.offsetParent;

        i += 1;

    } while(element);

    return {
        left,
        top,
    };
};
cumulativeOffset.CO_MARGIN     = CO_MARGIN;
cumulativeOffset.CO_PADDING    = CO_PADDING;
cumulativeOffset.CO_BORDER     = CO_BORDER;

module.exports = cumulativeOffset;

