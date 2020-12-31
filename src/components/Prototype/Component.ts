class Component {
  protected outputElement: Element;
  protected targetContainer: Element;
  protected domLocation: Element;
  protected debounceTimer: number;
  
  constructor(container) {
    this.targetContainer = container;
    this.domLocation = null;
    this.debounceTimer = null;
    this.outputElement = document.createElement("div");
  }

  protected _updateOutputElement() {
    /* 
    this.outputElement.className = <style>;
    this.outputElement.innerHTML = `<html>`;
    */
  }

  protected _bindWindowDebounce(event, handler, delay) {
    window.addEventListener(event, () => {
      if (this.debounceTimer != null) {
        window.clearTimeout(this.debounceTimer);
      }
      this.debounceTimer = window.setTimeout(handler, delay);
    });
  }

  protected _bindWindowHandler(event, handler) {
    window.addEventListener(event, handler);
  }

  protected _bindHandler(event, handler) {
    this.outputElement.addEventListener(event, handler);
  }

  public render() {
    this._updateOutputElement();
    if (this.domLocation != null) {
      this.domLocation.innerHTML = this.outputElement.innerHTML;
    } else {
      this.targetContainer.append(this.outputElement);
      let targetChild = this.targetContainer.lastChild;
      this.domLocation = <Element>targetChild;
    }
  }
}

export { Component };