import { createSelector } from 'reselect';

const selectRaw = (state) => state.question.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const questionDestroySelectors = {
  selectLoading,
};

export default questionDestroySelectors;
