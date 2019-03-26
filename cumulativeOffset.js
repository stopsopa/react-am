
const isFirefox = (function () {
    try {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    }
    catch (e) {

        return false;
    }
}());

const CO_MARGIN     = 1;
const CO_PADDING    = 2;
const CO_BORDER     = 4;

/**
 * https://stackoverflow.com/a/1480137/5560682
 */
var cumulativeOffset = function(element, opt = CO_BORDER | CO_PADDING) {

    let top = 0, left = 0;

    do {

        top     += element.offsetTop  || 0;

        left    += element.offsetLeft || 0;

        if (opt & CO_MARGIN) {

            left    += parseFloat(element.style.marginLeft, 10) || 0;

            top     += parseFloat(element.style.marginTop, 10) || 0;
        }

        if (opt & CO_PADDING) {

            left    += parseFloat(element.style.paddingLeft, 10) || 0;

            top     += parseFloat(element.style.paddingTop, 10) || 0;
        }

        if (opt & CO_BORDER) {

            left    += parseFloat(element.style.borderLeftWidth, 10) || 0;

            top     += parseFloat(element.style.borderTopWidth, 10) || 0;
        }

        if (isFirefox && element.tagName && element.tagName.toLowerCase() === 'body') {

            left    += 10;

            top     += 10;
        }

        element = element.offsetParent;

    } while(element);

    return {
        left    : parseInt(left, 10),
        top     : parseInt(top, 10),
    };
};
cumulativeOffset.CO_MARGIN     = CO_MARGIN;
cumulativeOffset.CO_PADDING    = CO_PADDING;
cumulativeOffset.CO_BORDER     = CO_BORDER;

module.exports = cumulativeOffset;

