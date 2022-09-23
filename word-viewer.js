var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let WordViewer = class WordViewer extends LitElement {
    constructor() {
        super(...arguments);
        this.words = '';
    }
    render() {
        return html `
        <h1>World Viewer</h1>
      <pre>${this.words}</pre>`;
    }
};
__decorate([
    property()
], WordViewer.prototype, "words", void 0);
WordViewer = __decorate([
    customElement('word-viewer')
], WordViewer);
window.customElements.define('word-viewer', WordViewer);
//# sourceMappingURL=word-viewer.js.map