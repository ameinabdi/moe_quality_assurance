import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimensionSsv1.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimensionSsv1ViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default dimensionSsv1ViewSelectors;
