
/**
 * https://stackoverflow.com/a/1480137/5560682
 */
var cumulativeOffset = function(element, opt = 0) {

    const first = element;

    let top = 0, left = 0;
    do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while(element);

    if (opt & cumulativeOffset.CO_MARGIN) {

        left    += parseInt(first.style.marginLeft, 10) || 0;
        top     += parseInt(first.style.marginTop, 10) || 0;
    }

    if (opt & cumulativeOffset.CO_PADDING) {

        left    += parseInt(first.style.paddingLeft, 10) || 0;
        top     += parseInt(first.style.paddingTop, 10) || 0;
    }

    return {
        left,
        top,
    };
};
cumulativeOffset.CO_MARGIN     = 1;
cumulativeOffset.CO_PADDING    = 2;

module.exports = cumulativeOffset;

