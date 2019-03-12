import VMContextStore from './VMContextStore';
import WebComponentHelper from '../utils/web-component-helper';

export default function createWebComponent(Component, elementName) {
   class CustomElement extends HTMLElement {
      constructor() {
         super();
         this.store = new VMContextStore(this);
         this.helper = new WebComponentHelper(this);
      }

      onStateChange = state => {
         const onStateChange = this.helper.parseFunctionString(this.getAttribute('onStateChange'));
         if (typeof onStateChange == 'function') onStateChange(state);
         this.dispatchEvent(new CustomEvent('onStateChange', state));
      };

      connectedCallback() {
         this.vmContextElem = this.parentElement.closest('d-vm-context');
         if (this.vmContextElem) this.vmContext = this.vmContextElem.context;

         const vmId = this.getAttribute('vm');
         const optionsStr = this.getAttribute('options');

         const options = /{.*}/.exec(optionsStr) ? JSON.parse(optionsStr) : null;
         this.store.connect(vmId, options, this.onStateChange);

         this.props = {
            ...this.helper.getProps(this.attributes, Component.propTypes),
            ...this.helper.getEvents(Component.propTypes)
         };
      }

      disconnectedCallback() {
         this.store.destroy();
      }

      get context() {
         return { _type: 'custom', ...this.store.context };
      }

      setState(state) {
         this.state = Object.assign(this.state || {}, state);
         this.dispatchEvent(new CustomEvent('onLocalStateChange', state));
      }
   }

   if (!window.customElements.get(elementName)) window.customElements.define(elementName, CustomElement);
}