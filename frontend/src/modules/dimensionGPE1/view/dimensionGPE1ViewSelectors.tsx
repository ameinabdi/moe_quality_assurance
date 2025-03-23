import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimensionGPE1.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimensionGPE1ViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default dimensionGPE1ViewSelectors;
