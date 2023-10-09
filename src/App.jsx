import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [title, setTitle] = useState('Jam');

  const handleTitleChange = (good) => {
    if (good === title
      || !good
      || typeof good !== 'string') {
      setTitle('');

      return;
    }

    setTitle(good);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {title !== ''
          ? `${title} is selected`
          : 'No goods selected'
        }

        {title !== ''
          && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={handleTitleChange}
            />
          )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={uuidv4()}
              className={good === title
                && 'has-background-success-light'
              }
            >
              <td>
                <button
                  data-cy={good === title
                    ? 'RemoveButton'
                    : 'AddButton'
                  }
                  type="button"
                  className={good === title
                    ? 'button is-info'
                    : 'button'}
                  onClick={() => handleTitleChange(good)}
                >
                  {good === title
                    ? '-'
                    : '+'
                  }
                </button>
              </td>

              <td
                data-cy="GoodTitle"
                className="is-vcentered"
              >
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
