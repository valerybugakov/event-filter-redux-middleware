import eventFilterMiddlware from '../index';

const store = {};

describe('Event Filter middleware', () => {
  test('Removes nativeEvent from action payload', () => {
    const action = {
      type: 'text',
      payload: {
        nativeEvent: 'nativeEventValue',
        data: 'dataValue'
      }
    };

    const result = eventFilterMiddlware(store)(v => v)(action);

    expect(result.payload).not.toHaveProperty('nativeEvent');
    expect(result.payload).toHaveProperty('data', 'dataValue');
  });
});
