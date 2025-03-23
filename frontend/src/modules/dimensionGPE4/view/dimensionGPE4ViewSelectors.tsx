import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimensionGPE4.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimensionGPE4ViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default dimensionGPE4ViewSelectors;
