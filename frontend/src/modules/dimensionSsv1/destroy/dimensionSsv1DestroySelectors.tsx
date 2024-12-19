import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimensionSsv1.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimensionSsv1DestroySelectors = {
  selectLoading,
};

export default dimensionSsv1DestroySelectors;
