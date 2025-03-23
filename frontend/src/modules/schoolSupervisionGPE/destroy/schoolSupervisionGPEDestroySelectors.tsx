import { createSelector } from 'reselect';

const selectRaw = (state) => state.schoolSupervisionGPE.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const schoolSupervisionGPEDestroySelectors = {
  selectLoading,
};

export default schoolSupervisionGPEDestroySelectors;
