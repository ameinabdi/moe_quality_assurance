import { createSelector } from 'reselect';

const selectRaw = (state) => state.schoolSupervisionGPE.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const schoolSupervisionGPEViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default schoolSupervisionGPEViewSelectors;
