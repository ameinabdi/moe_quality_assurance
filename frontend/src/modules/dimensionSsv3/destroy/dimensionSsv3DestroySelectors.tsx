import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimensionSsv3.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimensionSsv3DestroySelectors = {
  selectLoading,
};

export default dimensionSsv3DestroySelectors;
