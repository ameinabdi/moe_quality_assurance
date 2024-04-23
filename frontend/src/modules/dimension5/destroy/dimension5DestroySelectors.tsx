import { createSelector } from 'reselect';

const selectRaw = (state) => state.dimension5.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const dimension5DestroySelectors = {
  selectLoading,
};

export default dimension5DestroySelectors;
