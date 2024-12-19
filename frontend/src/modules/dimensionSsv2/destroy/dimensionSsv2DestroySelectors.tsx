import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimensionSsv2.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimensionSsv2DestroySelectors = {
  selectLoading,
};

export default dimensionSsv2DestroySelectors;
