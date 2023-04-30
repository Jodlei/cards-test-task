export const LoadMoreButton = (loadMoreClikHandler, isLoading) => {
  return (
    <ButtonWrapper>
      <MainButton
        title="Load more"
        func={loadMoreClikHandler}
        isLoading={isLoading}
      />
    </ButtonWrapper>
  );
};
