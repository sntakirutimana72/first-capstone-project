/**
 *
 * @param {String} identifer
 */
function $select(identifer) {
  return document.querySelector(identifer);
}

/**
 *
 * @param {String} identifer
 */
function $selectAll(identifer) {
  return document.querySelectorAll(identifer);
}

/**
 *
 * @param { HTMLElement } element
 * @param { String? } value
 * @return {String?}
 */
function $text(element, value) {
  if (!value) {
    return element.textContent;
  }

  element.textContent = value;
}

/**
 *
 * @param { HTMLElement } element
 * @param { string } className
 * @param { Boolean? } force
 */
function $class(element, className, force) {
  element.classList.toggle(className, force);
}

/**
 *
 * @param {String} tagName ~ a known name to the document to be used to create an html element
 * @returns
 */
function $create(tagName) {
  return document.createElement(tagName);
}

/**
 *
 * @param {HMTLElement} element ~ an html element to/from which the content is added or retrieved
 * @param {String?} htmlContent ~ when provided, is added to the element,
                                  else we retrieve content from element.
 * @returns
 */
function $html(element, htmlContent) {
  if (htmlContent === null) {
    return element.innerHTML;
  }

  element.innerHTML = htmlContent;
}
