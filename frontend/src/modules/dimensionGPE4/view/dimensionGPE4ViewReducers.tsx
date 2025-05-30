import actions from 'src/modules/dimensionGPE4/view/dimensionGPE4ViewActions';

const initialData = {
  loading: false,
  record: null,
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.FIND_STARTED) {
    return {
      ...state,
      record: null,
      loading: true,
    };
  }

  if (type === actions.FIND_SUCCESS) {
    return {
      ...state,
      record: payload,
      loading: false,
    };
  }

  if (type === actions.FIND_ERROR) {
    return {
      ...state,
      record: null,
      loading: false,
    };
  }

  return state;
};
