import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimensionGPE5.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimensionGPE5ViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default dimensionGPE5ViewSelectors;
