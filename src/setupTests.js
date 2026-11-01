// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom draws nothing and has no scrolling: the globe gets no canvas, as in a
// browser without one, and a new page's jump to the top does nothing.
HTMLCanvasElement.prototype.getContext = () => null;
window.scrollTo = () => {};
