import { ButtonWrap, Button } from './LoadMoreButton.styled';

export const LoadMoreButton = (loadMoreClikHandler, isLoading) => {
  return (
    <ButtonWrap>
      <Button onClick={loadMoreClikHandler} isLoading={isLoading}>
        {isLoading ? 'Loading' : 'Load more'}
      </Button>
    </ButtonWrap>
  );
};
