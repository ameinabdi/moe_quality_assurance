import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimension3.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimension3DestroySelectors = {
  selectLoading,
};

export default dimension3DestroySelectors;
