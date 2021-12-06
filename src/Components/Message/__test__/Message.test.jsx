import { render, screen } from '@testing-library/react';
import { Message } from '..';

describe('Message tests', () => {
    it('renders author and text', () => {
        render(<Message text={"simpletext"} name={"name"}/>);
        const msgText = screen.getByText('simpletext');
        const author = screen.getByText('name');
        expect(msgText).toBeInTheDocument();
        expect(author).toBeInTheDocument();
    });

    it('Matches snapshot', () => {
        const message = render(<Message text={"simpletext"} name={"name"}/>);
        expect(message).toMatchSnapshot();
    })
});