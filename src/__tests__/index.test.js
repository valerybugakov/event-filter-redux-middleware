import eventFilterMiddlware from '../index';

const store = {};

describe('Event Filter middleware', () => {
  test('Removes nativeEvent from action payload', () => {
    const action = {
      type: 'text',
      payload: {
        nativeEvent: 'nativeEventValue'
      }
    };

    const result = eventFilterMiddlware(store)(v => v)(action);

    expect(result.payload).toEqual(undefined);
  });
});
