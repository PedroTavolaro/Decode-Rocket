import { render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from './List';

/*
test('sum', () => {
    const { getByText } = render(<List />)
    expect(getByText('Hello world')).toHaveAttribute('class', 'test')
})
*/

describe('List Component', () => {

    it('should render list items', () => {
        const { getByText } = render(<List initialItems={['Pedro', 'Diego', 'Mayk']}/>)

        expect(getByText('Pedro')).toBeInTheDocument()
        expect(getByText('Diego')).toBeInTheDocument()
        expect(getByText('Mayk')).toBeInTheDocument()
    });

    it('should be able to add new item to the list', async () => {
        const {getByText, getByPlaceholderText, findByText} = render(<List initialItems={[]}/>)
        const addButton = getByText('Add');

        const inputElement = getByPlaceholderText('Novo item');

        userEvent.type(inputElement, 'Novo');
        userEvent.click(addButton);

        await waitFor(( ) => {
            expect(getByText('Novo')).toBeInTheDocument()
        })
    });

    it('should be able to add remove item from the list', async () => {
        const {getByText, getAllByText, queryByText} = render(<List initialItems={['Pedro']}/>)
        
        const removeButtons = getAllByText('Remover');
        const addButton = getByText('Add');

        userEvent.click(removeButtons[0]);

       // await waitForElementToBeRemoved(( ) => {
       //     return getByText('Pedro');
       // })
        await waitFor(( ) => {
           expect(queryByText('Pedro')).not.toBeInTheDocument();
        })
    });

    
})