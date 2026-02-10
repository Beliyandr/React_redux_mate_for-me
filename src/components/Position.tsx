import { useAppDispatch, useAppSelector } from "../app/hooks";
import * as positionActions from "../features/position";

export const Position = () => {
  const { x, y } = useAppSelector((state) => state.position);
  const dispatch = useAppDispatch();

  const moveLeft = () => dispatch(positionActions.moveLeft());
  const moveRight = () => dispatch(positionActions.moveRight());
  const moveUp = () => dispatch(positionActions.moveUp());
  const moveDown = () => dispatch(positionActions.moveDown());

  const dance = async () => {
    dispatch(positionActions.doACircle(500));
    // doACircle(dispatch);
  };

  const transformValue = `translate(${x * 100}%, ${y * 100}%)`;

  return (
    <section className="position">
      <h2>Position:</h2>

      <div className="position__content">
        <div className="buttons">
          <button onClick={moveUp}>&uarr;</button>

          <div>
            <button onClick={moveLeft}>&larr;</button>
            <strong>
              {x}:{y}
            </strong>
            <button onClick={moveRight}>&rarr;</button>
          </div>

          <button onClick={moveDown}>&darr;</button>
        </div>

        <div className="field">
          <div
            className="track"
            style={{ transform: transformValue, cursor: "pointer" }}
            onClick={dance}
          >
            {x + y}
          </div>
        </div>
      </div>
    </section>
  );
};
