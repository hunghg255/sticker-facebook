//@ts-ignore
import * as React from 'react';

type Colors =
  | 'blueLink'
  | 'disabled'
  | 'highlight'
  | 'negative'
  | 'placeholder'
  | 'positive'
  | 'primary'
  | 'primaryButton'
  | 'secondary'
  | 'secondaryOnMedia'
  | 'tertiary'
  | 'white';

interface Props {
  children: string | React.ReactElement;
  color?: Colors;
}

const Text = (props: Props, ref: React.RefObject<any>) => {
  const { children, color = 'primary' } = props;

  return <span ref={ref}>{children}</span>;
};
//@ts-ignore
const _Text = React.forwardRef(Text);
export { _Text as Text };
