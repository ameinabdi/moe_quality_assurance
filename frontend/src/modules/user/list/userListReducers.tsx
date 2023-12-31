import actions from 'src/modules/user/list/userListActions';

const INITIAL_PAGE_SIZE = 10;

const initialData = {
  rows: [],
  count: 0,
  loading: false,
  filter: {},
  rawFilter: {},
  pagination: {
    current: 1,
    pageSize: INITIAL_PAGE_SIZE,
  },
  roleLoading:false,
  roles:null,
  sorter: {},
  selectedKeys: [],
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.RESETED) {
    return {
      ...initialData,
    };
  }

  if (type === actions.SELECTEDS_CHANGED) {
    return {
      ...state,
      selectedKeys: payload || [],
    };
  }

  if (type === actions.PAGINATION_CHANGED) {
    return {
      ...state,
      pagination: payload || {
        current: 1,
        pageSize: INITIAL_PAGE_SIZE,
      },
    };
  }

  if (type === actions.SORTER_CHANGED) {
    return {
      ...state,
      sorter: payload || {},
    };
  }

  if (type === actions.FETCH_STARTED) {
    return {
      ...state,
      loading: true,
      selectedKeys: [],
      filter: payload ? payload.filter : {},
rawFilter: payload ? payload.rawFilter : {},
      pagination:
        payload && payload.keepPagination
          ? state.pagination
          : {
              current: 1,
              pageSize: INITIAL_PAGE_SIZE,
            },
    };
  }

  if (type === actions.FETCH_SUCCESS) {
    return {
      ...state,
      loading: false,
      rows: payload.rows,
      count: payload.count,
    };
  }

  if (type === actions.FETCH_ERROR) {
    return {
      ...state,
      loading: false,
      rows: [],
      count: 0,
    };
  }

  if (type === actions.ROLE_FETCH_STARTED) {
    return {
      ...state,
      roleLoading: true,
      selectedKeys: [],
      filter: payload ? payload.filter : {},
rawFilter: payload ? payload.rawFilter : {},
      pagination:
        payload && payload.keepPagination
          ? state.pagination
          : {
              current: 1,
              pageSize: INITIAL_PAGE_SIZE,
            },
    };
  }

  if (type === actions.ROLE_FETCH_SUCCESS) {
    return {
      ...state,
      roleLoading: false,
      roles: payload.rows,
     };
  }

  if (type === actions.ROLE_FETCH_ERROR) {
    return {
      ...state,
      roleLoading: false,
      roles: [],
    };
  }

  if (type === actions.EXPORT_STARTED) {
    return {
      ...state,
      exportLoading: true,
    };
  }

  if (type === actions.EXPORT_SUCCESS) {
    return {
      ...state,
      exportLoading: false,
    };
  }

  if (type === actions.EXPORT_ERROR) {
    return {
      ...state,
      exportLoading: false,
    };
  }

  if (type === actions.DESTROY_ALL_SELECTED_STARTED) {
    return {
      ...state,
      loading: true,
    };
  }

  if (type === actions.DESTROY_ALL_SELECTED_ERROR) {
    return {
      ...state,
      loading: false,
    };
  }

  if (type === actions.DESTROY_ALL_SELECTED_SUCCESS) {
    return {
      ...state,
      selectedKeys: [],
    };
  }

  if (type === actions.DESTROY_STARTED) {
    return {
      ...state,
      loading: true,
    };
  }

  if (type === actions.DESTROY_ERROR) {
    return {
      ...state,
      loading: false,
    };
  }

  if (type === actions.DESTROY_SUCCESS) {
    return {
      ...state,
      selectedKeys: [],
    };
  }

  return state;
};
