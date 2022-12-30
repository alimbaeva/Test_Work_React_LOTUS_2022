import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { IForm, IUser } from '../../type/types';
import { getUsers, setCurrentUser } from '../../store/userReducer';
import { api } from '../../api/api';

interface IOpenFn {
  openFn: (boolean: boolean) => void;
}

export const Authentication: FC<IOpenFn> = ({ openFn }: IOpenFn) => {
  const dispatch = useDispatch<AppDispatch>();
  const { users } = useSelector((state: RootState) => state.user);
  const { register, handleSubmit } = useForm<IForm>();

  const [update, setUpdate] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getUsers());
  }, [update]);

  const onSubmit = handleSubmit((data) => {
    users.forEach((user: IUser) => {
      if (
        user.key === data.key &&
        user.firstName === data.firstName &&
        user.surname === data.surname
      ) {
        api.apdateUsers(user, user.id, true);
        setUpdate(!update);
        openFn(true);
        dispatch(setCurrentUser(user));
      }
    });
  });

  return (
    <div>
      <h3>Войти в платформу</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="firstName">Имя:</label>
        <input placeholder="Асель" {...register('firstName')} required />
        <label htmlFor="surname">Фамилия:</label>
        <input placeholder="Кадырбековна" {...register('surname')} required />

        <label htmlFor="key">Ключь:</label>
        <input type="password" {...register('key')} required />
        <input type="submit" />
      </form>
    </div>
  );
};
