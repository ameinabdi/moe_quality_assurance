import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimensionGPE3.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimensionGPE3ViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default dimensionGPE3ViewSelectors;
