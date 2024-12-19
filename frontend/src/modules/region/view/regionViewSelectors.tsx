import { createSelector } from 'reselect';

const selectRaw = (state) => state.region.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const regionViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default regionViewSelectors;
