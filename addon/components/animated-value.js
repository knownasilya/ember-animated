import { computed } from '@ember/object';
import Component from '@ember/component';
import layout from '../templates/components/animated-value';
import { A } from '@ember/array';

/**
  A component that animates when a single value changes.
  Animated-value uses the same arguments as animated-each.
  ```hbs
    <AnimatedContainer>
      {{#animated-value counter rules=rules duration=100 as |v|}}
          <span class="numbers">{{v}}</span>
      {{/animated-value}}
    </AnimatedContainer>

    <button {{action "increment"}}>+</button>
    <button {{action "decrement"}}>-</button>
  ```
  ```js
  import Component from '@ember/component';
  import { toLeft, toRight } from 'ember-animated/transitions/move-over';

  export default Component.extend({
    rules({ oldItems, newItems }) {
      if (oldItems[0] < newItems[0]) {
        return toLeft;
      } else {
        return toRight;
      }
    },

    counter: 10,

    actions: {
      increment() {
        this.set('counter', this.get('counter') + 1);
      },
      decrement() {
        this.set('counter', this.get('counter') - 1);
      }
    }
  });
  ```
  @class animated-value
  @public
*/

export default Component.extend({
  tagName: '',
  layout,
  items: computed('value', function() {
    return A([this.get('value')]);
  }),
}).reopenClass({
  positionalParams: ['value'],
});
