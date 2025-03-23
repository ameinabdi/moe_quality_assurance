import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimensionGPE5.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimensionGPE5DestroySelectors = {
  selectLoading,
};

export default dimensionGPE5DestroySelectors;
