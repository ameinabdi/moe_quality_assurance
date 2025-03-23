import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimensionGPE2.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimensionGPE2ViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default dimensionGPE2ViewSelectors;
