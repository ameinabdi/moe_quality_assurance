import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimension4.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimension4DestroySelectors = {
  selectLoading,
};

export default dimension4DestroySelectors;
