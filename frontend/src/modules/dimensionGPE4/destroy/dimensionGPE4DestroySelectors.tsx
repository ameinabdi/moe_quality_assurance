import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimensionGPE4.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimensionGPE4DestroySelectors = {
  selectLoading,
};

export default dimensionGPE4DestroySelectors;
