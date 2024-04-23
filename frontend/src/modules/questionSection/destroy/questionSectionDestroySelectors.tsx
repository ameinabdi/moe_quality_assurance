import { createSelector } from 'reselect';

const selectRaw = (state) => state.questionSection.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const questionSectionDestroySelectors = {
  selectLoading,
};

export default questionSectionDestroySelectors;
