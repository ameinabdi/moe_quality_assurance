import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimensionSsv3.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimensionSsv3ViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default dimensionSsv3ViewSelectors;
