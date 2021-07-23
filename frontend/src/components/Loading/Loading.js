import { StyledLoading } from './Loading.styled';

function Loading() {
  return (
    <StyledLoading>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledLoading>
  );
}

export default Loading;
