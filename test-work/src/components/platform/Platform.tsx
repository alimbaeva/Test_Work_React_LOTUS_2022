import { FC, useEffect, useMemo } from 'react';
import { IUser } from '../../type/types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { getUsers } from '../../store/userReducer';

export const Platform: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users } = useSelector((state: RootState) => state.user);
  const memoizedValue = useMemo(() => users, [users]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(getUsers());
    }, 1000);
    return () => clearTimeout(timer);
  }, [memoizedValue]);

  return (
    <div>
      <ul className="platform">
        <li className="title">
          <ul className="info-block">
            <li className="title-subtile title-height">Параметры и требования</li>
            <li>Наличие комплекса мероприятий</li>
            <li>Срок изготовления ЛОТО</li>
            <li>Гарантийные объязательство</li>
            <li>Условия оплаты</li>
            <li className="title-height">Стоимость изготовления лота (без НДС)</li>
            <li>Действия: </li>
          </ul>
        </li>
        {users &&
          memoizedValue.map((el: IUser) => {
            if (el.authentication) {
              return (
                <li key={el.id} className="title">
                  <ul className="info-block">
                    <li className="title-subtile">
                      <p>{el.person}</p>
                      <p>{el.surname}</p>
                      <p>{el.firstName}</p>
                      <p>{el.patronymic}</p>
                    </li>
                    <li>{el.activities}</li>
                    <li>{el.term}</li>
                    <li>{el.warranty}</li>
                    <li>{el.pay}</li>
                    <li className="title-height">
                      <p>{el.priceAll} руб</p>
                      <p>- {el.percent} руб</p>
                      <p>{el.priceAll - el.percent} руб</p>
                    </li>
                    <li>Действия: </li>
                  </ul>
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
};
