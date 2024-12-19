import { createSelector } from 'reselect';

const selectRaw = (state) => state.district.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const districtViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default districtViewSelectors;
