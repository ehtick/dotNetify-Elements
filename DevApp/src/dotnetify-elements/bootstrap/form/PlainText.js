import styled from 'styled-components';
import lightTheme from '../../theme-light';

export const PlainText = styled.div.attrs({
   className: 'form-control-plaintext'
})`
   min-height: 2.4rem;
   ${props => props.theme.Field.PlainTextComponent}
`;

PlainText.defaultProps = { theme: lightTheme };
