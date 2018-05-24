const eventFilterMiddlware = () => next => action => {
  if (!action.type) {
    throw new Error('Apply this middleware at last position');
  }

  const hasNativeEvent = action.payload && action.payload.nativeEvent;

  // Remove synthetic events from the payload
  if (hasNativeEvent) {
    action.payload = undefined;
  }

  return next(action);
};

export default eventFilterMiddlware;
