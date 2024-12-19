import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimensionSsv2.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimensionSsv2ViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default dimensionSsv2ViewSelectors;
