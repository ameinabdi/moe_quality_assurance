import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimensionGPE2.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimensionGPE2DestroySelectors = {
  selectLoading,
};

export default dimensionGPE2DestroySelectors;
