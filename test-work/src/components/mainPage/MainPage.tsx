import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Authentication } from '../authentication/Authentication';
import { Platform } from '../platform/Platform';
import { api } from '../../api/api';
import { Timer } from '../timer/Timer';

export const MainPage: FC = () => {
  const { current } = useSelector((state: RootState) => state.user);
  const [authentication, setAuthentication] = useState<boolean>(false);

  const openFn = (boolean: boolean) => setAuthentication(boolean);

  const exitUser = () => {
    setAuthentication(false);
    api.apdateUsers(current[0], current[0].id, false);
  };

  return (
    <div className="container">
      {!authentication && <Authentication openFn={openFn} />}
      {authentication && (
        <>
          <div>
            <h1>Ход торгов. Тестовые торги на аппарат Лотос №123456678</h1>
            <p>
              Уважвемые участники, во время вашего хода вы можете изменить параметры торгов,
              указанных в таблице.
            </p>
          </div>
          <div className="timer">
            <p>Ход: </p>
            <span>
              <Timer />
            </span>
          </div>
          <button onClick={exitUser} className="exit">
            Выйти
          </button>
          <Platform />
        </>
      )}
    </div>
  );
};
