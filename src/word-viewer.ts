import {html, LitElement, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js'

@customElement('word-viewer')
class WordViewer extends LitElement {
    static style = css`
    :host {
            display: flex;
            flex-direction: column;
            padding: 2em;
            cursor: pointer;
            border: 1px solid black;
    }
    pre {background-color: beige; color: black; padding: 1em;}
            `
    @state() private idx = 0;
    @state() private playDirection = 1;
    @property() words: string = '';

    private intervalTimer?:number;
    override connectedCallback() {
        super.connectedCallback();
        this.intervalTimer = setInterval(this.tickToNextWord, 1000);
    }

    override disconnectedCallback() {
        super.disconnectedCallback();
        clearInterval(this.intervalTimer);
        this.intervalTimer = undefined;
    }

    override render(){
        const splitWords = this.words.split('.')
    return html` <h1>World Viewer</h1>
      <pre @click=${this.switchPlayDIrection}>
      ${splitWords[
          ((this.idx % splitWords.length) + splitWords.length) %
            splitWords.length
        ]}</pre
      >`;
  }
  tickToNextWord = () => {this.idx += this.playDirection;}

  switchPlayDIrection = () => {
    this.playDirection *= -1;
  }
}
window.customElements.define('word-viewer', WordViewer);