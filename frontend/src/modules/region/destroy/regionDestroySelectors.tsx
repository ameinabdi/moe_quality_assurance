import { createSelector } from 'reselect';

const selectRaw = (state) => state.region.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const regionDestroySelectors = {
  selectLoading,
};

export default regionDestroySelectors;
